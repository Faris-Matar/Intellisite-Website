"use strict";

/* ─── Reveal on scroll ─────────────────────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
})();

/* ─── Sticky nav ───────────────────────────────────────────────────────────── */
(function initNav() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 48);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ─── Mobile menu ──────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  const open  = () => { links.classList.add("is-open"); toggle.setAttribute("aria-expanded", "true");  document.body.style.overflow = "hidden"; };
  const close = () => { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; };

  toggle.addEventListener("click", () => {
    links.classList.contains("is-open") ? close() : open();
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("click", (e) => {
    if (header && !header.contains(e.target) && links.classList.contains("is-open")) close();
  });
})();

/* ─── Gallery filters ──────────────────────────────────────────────────────── */
(function initFilters() {
  const filterBar = document.querySelector(".gallery-filters");
  if (!filterBar) return;

  const btns  = filterBar.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item[data-category]");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
})();

/* ─── Contact / enquiry form ───────────────────────────────────────────────── */
(function initForm() {
  const form    = document.getElementById("enquiry-form");
  const success = document.getElementById("form-success");
  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type=submit]");
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

    setTimeout(() => {
      form.style.display  = "none";
      success.style.display = "block";
    }, 1200);
  });
})();

/* ─── Smooth scroll ────────────────────────────────────────────────────────── */
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
