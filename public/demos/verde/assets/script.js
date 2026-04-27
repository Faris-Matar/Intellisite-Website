/* =====================================================
   VERDE GARDEN DESIGN — Site Script
   A showcase build by IntelliSite
   ===================================================== */

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
    { threshold: 0.1, rootMargin: "0px 0px -44px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

/* ─── STICKY NAV ─────────────────────────────────────── */
(function initNav() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 28);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ─── MOBILE MENU ────────────────────────────────────── */
(function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  const close = () => {
    links.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("click", (e) => {
    if (header && !header.contains(e.target) && links.classList.contains("is-open")) close();
  });
})();

/* ─── GALLERY FILTERS ────────────────────────────────── */
(function initFilters() {
  const btns  = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item[data-category]");
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const cat = btn.dataset.filter;
      items.forEach((item) => {
        item.style.display = (cat === "all" || item.dataset.category === cat) ? "" : "none";
      });
    });
  });
})();

/* ─── CONTACT FORM ───────────────────────────────────── */
(function initForm() {
  const form    = document.getElementById("enquiry-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.textContent = "Sending…"; btn.disabled = true; }
    setTimeout(() => {
      form.style.display = "none";
      if (success) success.classList.add("is-visible");
    }, 1200);
  });
})();

/* ─── SMOOTH SCROLL ──────────────────────────────────── */
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
