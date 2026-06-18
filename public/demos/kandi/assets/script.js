'use strict';

// ─── NAV: transparent → white + red border on scroll ─────────────
const header = document.getElementById('site-header');

function updateNav() {
  if (window.scrollY > 60) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ─── HAMBURGER MENU ──────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── HERO PHOTO PARALLAX ─────────────────────────────────────────
const heroPhoto = document.getElementById('hero-photo');

if (heroPhoto) {
  function updateParallax() {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight) return;
    // Subtle downward shift as user scrolls down
    const shift = scrollY * 0.22;
    heroPhoto.style.transform = 'scale(1.08) translateY(' + shift + 'px)';
  }
  window.addEventListener('scroll', updateParallax, { passive: true });
}

// ─── INTERSECTION OBSERVER REVEALS ──────────────────────────────
const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.10,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal-item').forEach(function(el) {
  revealObserver.observe(el);
});
