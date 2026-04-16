const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
document.documentElement.classList.add("js-ready");

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

const contactType = document.querySelector("#contact-type");
const conditionalGroups = document.querySelectorAll("[data-conditional-group]");

if (contactType && conditionalGroups.length > 0) {
  const syncConditionalFields = () => {
    conditionalGroups.forEach((group) => {
      const shouldShow = group.dataset.conditionalGroup === contactType.value;
      group.classList.toggle("is-visible", shouldShow);
    });
  };

  contactType.addEventListener("change", syncConditionalFields);
  syncConditionalFields();
}

const form = document.querySelector("[data-contact-form]");
const feedback = document.querySelector("[data-form-feedback]");

if (form && feedback) {
  const requiredFields = Array.from(form.querySelectorAll("[data-required='true']"));

  const setFeedback = (message, type) => {
    feedback.textContent = message;
    feedback.className = `status-message is-visible is-${type}`;
  };

  const clearErrors = () => {
    form.querySelectorAll(".field-error").forEach((error) => error.remove());
  };

  const showFieldError = (field, message) => {
    const error = document.createElement("span");
    error.className = "field-error";
    error.textContent = message;
    field.parentElement.appendChild(error);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    let hasError = false;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        hasError = true;
        showFieldError(field, "Please complete this field.");
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        hasError = true;
        showFieldError(field, "Please enter a valid email address.");
      }
    });

    if (hasError) {
      setFeedback("Please review the highlighted fields before sending your request.", "error");
      return;
    }

    setFeedback("Thanks. Your enquiry has been staged locally and the form is ready for live email integration.", "success");

    // Future email integration goes here:
    // 1. Replace this placeholder flow with a POST request.
    // 2. Send `new FormData(form)` to Formspree, Resend, EmailJS, Nodemailer, or your own API route.
    // 3. Keep the success state, then optionally redirect to a booking flow.
    window.setTimeout(() => {
      form.reset();
      if (contactType && conditionalGroups.length > 0) {
        contactType.dispatchEvent(new Event("change"));
      }
    }, 450);
  });
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
