"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
document.documentElement.classList.add("js-ready");

/* ─── Mobile navigation ──────────────────────────────── */
(function initMobileNav() {
  const header  = document.querySelector(".site-header");
  const toggle  = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggle || !navLinks) return;

  const open = () => {
    navLinks.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    navLinks.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    navLinks.classList.contains("is-open") ? close() : open();
  });

  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("click", (e) => {
    if (header && !header.contains(e.target) && navLinks.classList.contains("is-open")) {
      close();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("is-open")) close();
  });
})();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.16,
  }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const comparisonRange = document.querySelector("[data-comparison-range]");
const comparisonAfter = document.querySelector("[data-comparison-after]");

if (comparisonRange && comparisonAfter) {
  const syncComparison = () => {
    comparisonAfter.style.width = `${comparisonRange.value}%`;
  };

  comparisonRange.addEventListener("input", syncComparison);
  syncComparison();
}

const popupStorageKey = "intellisite-checklist-popup-dismissed";

if (!localStorage.getItem(popupStorageKey) && !prefersReducedMotion.matches) {
  const popupBackdrop = document.createElement("div");
  popupBackdrop.className = "popup-backdrop";
  popupBackdrop.innerHTML = `
    <div class="popup-card contact-card interactive-card" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <button class="popup-close" type="button" aria-label="Close popup">x</button>
      <span class="eyebrow">Performance Checklist</span>
      <h3 id="popup-title">Benchmark your agency website before the next instruction pitch.</h3>
      <p>Claim the IntelliSite checklist for speed, trust, local SEO, listing UX, and conversion friction.</p>
      <div class="button-row">
        <a class="btn" href="contact.html">Request the checklist</a>
        <button class="btn-secondary popup-dismiss" type="button">Maybe later</button>
      </div>
    </div>
  `;

  const closePopup = () => {
    popupBackdrop.classList.remove("is-visible");
    localStorage.setItem(popupStorageKey, "true");
  };

  popupBackdrop.addEventListener("click", (event) => {
    if (event.target === popupBackdrop) {
      closePopup();
    }
  });

  popupBackdrop.querySelector(".popup-close").addEventListener("click", closePopup);
  popupBackdrop.querySelector(".popup-dismiss").addEventListener("click", closePopup);

  document.body.appendChild(popupBackdrop);

  const handleMouseLeave = (event) => {
    if (event.clientY <= 0) {
      popupBackdrop.classList.add("is-visible");
      document.removeEventListener("mouseout", handleMouseLeave);
    }
  };

  document.addEventListener("mouseout", handleMouseLeave);
}

const tiltCards = document.querySelectorAll("[data-tilt]");

if (!prefersReducedMotion.matches && tiltCards.length > 0) {
  tiltCards.forEach((card) => {
    const reset = () => {
      card.style.transform = "";
    };

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = relativeY * -7;
      const rotateY = relativeX * 8;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", reset);
  });
}

const homeHeroSceneHost = document.querySelector("[data-home-hero-scene]");

if (homeHeroSceneHost) {
  import("./home-hero-scene.js")
    .then(({ initHomeHeroScene }) => {
      initHomeHeroScene(homeHeroSceneHost);
    })
    .catch(() => {
      homeHeroSceneHost.classList.add("is-fallback");
    });
}
