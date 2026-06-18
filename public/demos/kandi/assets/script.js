'use strict';

/* ══════════════════════════════════════════════════════════════
   K&I Kitchens — interaction layer (vanilla JS, no dependencies)
   ══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ─── SCROLL PROGRESS BAR + NAVBAR STATE ──────────────────── */
  var progress = document.getElementById('scroll-progress');
  var header   = document.getElementById('site-header');
  var heroImg  = document.getElementById('hero-image');

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    var docH = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar — width tied to scroll percentage
    if (progress) {
      var pct = docH > 0 ? (scrollY / docH) : 0;
      progress.style.width = (Math.min(1, Math.max(0, pct)) * 100) + '%';
    }

    // Navbar frosted glass after 80px
    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 80);
    }

    // Hero parallax — image moves at 0.4x scroll speed
    if (heroImg && scrollY < window.innerHeight) {
      heroImg.style.transform = 'translateY(' + (scrollY * 0.4) + 'px)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── MOBILE MENU OVERLAY ──────────────────────────────────── */
  var toggle   = document.getElementById('nav-toggle');
  var menu     = document.getElementById('mobile-menu');
  var closeBtn = document.getElementById('mobile-menu-close');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle)   toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menu) {
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    // Close when clicking the dark backdrop (outside the links)
    menu.addEventListener('click', function (e) {
      if (e.target === menu) closeMenu();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ─── STAGGER: assign incremental delays to grouped children ── */
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    var kids = group.querySelectorAll('.reveal-item, .wipe-left, .wipe-up');
    kids.forEach(function (kid, i) {
      kid.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  /* ─── INTERSECTION OBSERVER — reveals & clip-path wipes ─────── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-item, .wipe-left, .wipe-up').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ─── TIMELINE LINE DRAW ───────────────────────────────────── */
  var timeline = document.getElementById('timeline');
  if (timeline) {
    var tlObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          timeline.classList.add('is-drawn');
          tlObserver.unobserve(timeline);
        }
      });
    }, { threshold: 0.3 });
    tlObserver.observe(timeline);
  }

});
