/* =====================================================
   HARTLEY & CO KITCHENS — Site Script
   A showcase build by IntelliSite
   ===================================================== */

document.documentElement.classList.add("js-ready");

/* ─── SCROLL REVEAL ─────────────────────────────────── */
(function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

/* ─── STICKY NAV ────────────────────────────────────── */
(function initNav() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ─── MOBILE MENU ───────────────────────────────────── */
(function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close on link click
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (header && !header.contains(e.target) && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
})();

/* ─── GALLERY FILTERS ───────────────────────────────── */
(function initGalleryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item[data-category]");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const cat = btn.dataset.filter;

      items.forEach((item) => {
        const show = cat === "all" || item.dataset.category === cat;
        item.style.display = show ? "" : "none";
      });
    });
  });
})();

/* ─── CONTACT FORM ──────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;

  const successEl = document.getElementById("form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.textContent = "Sending…";
      btn.disabled = true;
    }

    // Simulate async submission (no real backend in this demo)
    setTimeout(() => {
      form.style.display = "none";
      if (successEl) successEl.classList.add("is-visible");
    }, 1200);
  });
})();

/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
