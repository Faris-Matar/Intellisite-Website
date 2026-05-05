/* =====================================================
   THE LOFT CONVERTER — Site Script
   A showcase build by InteliSite
   ===================================================== */

document.documentElement.classList.add("js-ready");

/* ─── SCROLL REVEAL (Intersection Observer) ─────────── */
(function initReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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

/* ─── MOBILE MENU TOGGLE ────────────────────────────── */
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

/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href === "#" || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

/* ─── CONTACT FORM SUBMIT ───────────────────────────── */
(function initContactForm() {
  const form = document.getElementById("survey-form");
  if (!form) return;

  const successEl = document.getElementById("form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.textContent = "Sending…";
      btn.disabled = true;
    }

    setTimeout(() => {
      form.style.display = "none";
      if (successEl) successEl.classList.add("is-visible");
    }, 1100);
  });
})();
