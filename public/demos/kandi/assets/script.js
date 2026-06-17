(function() {
  'use strict';

  // ─── MOBILE / WEBGL DETECTION ───────────────────────────────
  // Skip 3D only on genuine phones (< 640px) or if WebGL is unavailable.
  // Tablets and narrow desktop windows still get the 3D experience.
  function hasWebGL() {
    try {
      var c = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (c.getContext('webgl') || c.getContext('webgl2') || c.getContext('experimental-webgl'))
      );
    } catch(e) { return false; }
  }

  var isMobile = function() {
    if (!hasWebGL()) return true;
    return window.innerWidth < 640;
  };

  // ─── CLAMP HELPER ───────────────────────────────────────────
  function clamp01(v) { return Math.min(1, Math.max(0, v)); }

  // ─── OPENING INTRO ──────────────────────────────────────────
  function initIntro() {
    var overlay = document.getElementById('s1-intro');
    var line1 = document.getElementById('intro-line-1');
    var line2 = document.getElementById('intro-line-2');
    if (!overlay) return;

    setTimeout(function() {
      if (line1) line1.classList.add('is-visible');
    }, 200);

    setTimeout(function() {
      if (line1) line1.classList.remove('is-visible');
    }, 1700);

    setTimeout(function() {
      if (line2) line2.classList.add('is-visible');
    }, 2000);

    setTimeout(function() {
      overlay.classList.add('is-exiting');
    }, 3400);

    setTimeout(function() {
      overlay.style.display = 'none';
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 4000);
  }

  // ─── THREE.JS HERO SCENE ────────────────────────────────────
  function initHeroScene() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas) { console.warn('[KI] hero-canvas not found'); return; }
    if (typeof THREE === 'undefined') { console.warn('[KI] THREE not loaded'); return; }

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    } catch(err) {
      console.error('[KI] WebGLRenderer failed:', err);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;

    var scene = new THREE.Scene();
    // Warm cream background matching the page — ensures objects are always visible
    scene.background = new THREE.Color(0xfafaf8);

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    // Lighting — daylight style, warm
    var ambient = new THREE.AmbientLight(0xfff8f0, 0.8);
    scene.add(ambient);

    var sun = new THREE.DirectionalLight(0xfff5e0, 2.0);
    sun.position.set(4, 8, 6);
    scene.add(sun);

    var fill = new THREE.DirectionalLight(0xe8d8c0, 0.6);
    fill.position.set(-4, 2, 4);
    scene.add(fill);

    var back = new THREE.DirectionalLight(0xffffff, 0.3);
    back.position.set(0, -4, -4);
    scene.add(back);

    // Cabinet door group
    var group = new THREE.Group();

    // Frame — dark walnut border
    var frameGeom = new THREE.BoxGeometry(3.0, 4.4, 0.08);
    var frameMat = new THREE.MeshStandardMaterial({ color: 0x5c3d1e, roughness: 0.8, metalness: 0.05 });
    var frame = new THREE.Mesh(frameGeom, frameMat);
    frame.position.z = -0.06;
    group.add(frame);

    // Main panel — rich warm oak
    var panelGeom = new THREE.BoxGeometry(2.6, 4.0, 0.12);
    var panelMat = new THREE.MeshStandardMaterial({ color: 0x9a6b30, roughness: 0.6, metalness: 0.08 });
    var panel = new THREE.Mesh(panelGeom, panelMat);
    group.add(panel);

    // Inner recessed panel — lighter grain
    var innerGeom = new THREE.BoxGeometry(1.8, 3.2, 0.04);
    var innerMat = new THREE.MeshStandardMaterial({ color: 0xb87d3a, roughness: 0.65, metalness: 0.05 });
    var inner = new THREE.Mesh(innerGeom, innerMat);
    inner.position.z = 0.08;
    group.add(inner);

    // Handle — vertical bar, brass
    var handleGeom = new THREE.BoxGeometry(0.06, 1.2, 0.06);
    var handleMat = new THREE.MeshStandardMaterial({ color: 0xc8a030, roughness: 0.2, metalness: 0.95 });
    var handle = new THREE.Mesh(handleGeom, handleMat);
    handle.position.set(0.9, 0, 0.15);
    group.add(handle);

    // Handle end caps — top & bottom
    var capGeom = new THREE.BoxGeometry(0.1, 0.08, 0.12);
    var capTop = new THREE.Mesh(capGeom, handleMat);
    capTop.position.set(0.9, 0.64, 0.15);
    group.add(capTop);

    var capBot = new THREE.Mesh(capGeom, handleMat);
    capBot.position.set(0.9, -0.64, 0.15);
    group.add(capBot);

    // Position group right so hero copy sits on left
    group.position.set(1.5, 0, 0);
    scene.add(group);

    // GSAP camera proxy — scroll drives z in
    var state = { cameraZ: 8 };
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.to(state, {
        cameraZ: 3.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '#s2-hero',
          start: 'top top',
          end: '+=100vh',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1
        }
      });
    }

    function onResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onResize);

    function animate() {
      requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      camera.position.z = state.cameraZ;
      renderer.render(scene, camera);
    }
    animate();
    console.log('[KI] hero scene running');
  }

  // ─── DOOR OPENING ───────────────────────────────────────────
  function initDoorScene() {
    var doorPanel = document.getElementById('door-panel');
    var revealText = document.querySelector('.door-reveal-text');
    if (!doorPanel) { console.warn('[KI] door-panel not found'); return; }
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('[KI] gsap/ScrollTrigger not loaded for door');
      return;
    }

    ScrollTrigger.create({
      trigger: '#s3-door',
      start: 'top top',
      end: '+=150vh',
      scrub: 1.2,
      pin: true,
      anticipatePin: 1,
      onUpdate: function(self) {
        var deg = self.progress * -110;
        doorPanel.style.transform = 'rotateY(' + deg + 'deg)';
        if (revealText) {
          var t = self.progress > 0.55 ? Math.min(1, (self.progress - 0.55) / 0.35) : 0;
          revealText.style.opacity = t;
        }
      }
    });
    console.log('[KI] door scene running');
  }

  // ─── THREE.JS DRAWER SCENE ──────────────────────────────────
  function initDrawerScene() {
    var canvas = document.getElementById('drawer-canvas');
    if (!canvas) { console.warn('[KI] drawer-canvas not found'); return; }
    if (typeof THREE === 'undefined') { console.warn('[KI] THREE not loaded for drawer'); return; }

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    } catch(err) {
      console.error('[KI] drawer WebGLRenderer failed:', err);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    var scene = new THREE.Scene();
    // Cream background matching the drawer section (#s4-drawer uses --bg-cream)
    scene.background = new THREE.Color(0xf0ede6);

    var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 1.5, 7);
    camera.lookAt(0, 0, 0);

    var ambient = new THREE.AmbientLight(0xfff8f0, 0.8);
    scene.add(ambient);

    var sun = new THREE.DirectionalLight(0xfff5e0, 2.0);
    sun.position.set(3, 6, 5);
    scene.add(sun);

    var fill = new THREE.DirectionalLight(0xe0d8c8, 0.5);
    fill.position.set(-3, 1, 3);
    scene.add(fill);

    // Cabinet body (fixed — behind drawer)
    var bodyGeom = new THREE.BoxGeometry(5.2, 1.4, 2.8);
    var bodyMat = new THREE.MeshStandardMaterial({ color: 0x5c3d1e, roughness: 0.85, metalness: 0.03 });
    var body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.set(0, 0, -1.6);
    scene.add(body);

    // Drawer opening slot (darker interior)
    var slotGeom = new THREE.BoxGeometry(4.6, 0.9, 2.4);
    var slotMat = new THREE.MeshStandardMaterial({ color: 0x2e1c08, roughness: 0.95 });
    var slot = new THREE.Mesh(slotGeom, slotMat);
    slot.position.set(0, 0, -0.8);
    scene.add(slot);

    // Drawer group — slides on Z axis
    var drawerGroup = new THREE.Group();

    // Front face — rich oak
    var frontGeom = new THREE.BoxGeometry(4.8, 1.0, 0.15);
    var frontMat = new THREE.MeshStandardMaterial({ color: 0x9a6b30, roughness: 0.6, metalness: 0.07 });
    var front = new THREE.Mesh(frontGeom, frontMat);
    drawerGroup.add(front);

    // Inner front detail — lighter panel
    var innerFrontGeom = new THREE.BoxGeometry(4.0, 0.6, 0.06);
    var innerFrontMat = new THREE.MeshStandardMaterial({ color: 0xb87d3a, roughness: 0.65 });
    var innerFront = new THREE.Mesh(innerFrontGeom, innerFrontMat);
    innerFront.position.z = 0.11;
    drawerGroup.add(innerFront);

    // Handle — horizontal bar, brass
    var hGeom = new THREE.BoxGeometry(2.2, 0.06, 0.06);
    var hMat = new THREE.MeshStandardMaterial({ color: 0xc8a030, roughness: 0.2, metalness: 0.95 });
    var hBar = new THREE.Mesh(hGeom, hMat);
    hBar.position.set(0, 0, 0.18);
    drawerGroup.add(hBar);

    var hCapGeom = new THREE.BoxGeometry(0.08, 0.08, 0.12);
    var hCapL = new THREE.Mesh(hCapGeom, hMat);
    hCapL.position.set(-1.14, 0, 0.18);
    drawerGroup.add(hCapL);

    var hCapR = new THREE.Mesh(hCapGeom, hMat);
    hCapR.position.set(1.14, 0, 0.18);
    drawerGroup.add(hCapR);

    drawerGroup.position.z = 0;
    scene.add(drawerGroup);

    // GSAP scroll proxy — drives drawer out towards camera
    var state = { drawerZ: 0 };
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.to(state, {
        drawerZ: 2.8,
        ease: 'none',
        scrollTrigger: {
          trigger: '#s4-drawer',
          start: 'top top',
          end: '+=100vh',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1
        }
      });
    }

    function onResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onResize);

    function animate() {
      requestAnimationFrame(animate);
      drawerGroup.position.z = state.drawerZ;
      renderer.render(scene, camera);
    }
    animate();
    console.log('[KI] drawer scene running');
  }

  // ─── CRAFTSMANSHIP SECTION ──────────────────────────────────
  function initCraftSection() {
    var section = document.getElementById('s5-craft');
    if (!section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var cp1 = document.getElementById('cp1');
    var cp2 = document.getElementById('cp2');
    var cp3 = document.getElementById('cp3');
    var finale = document.querySelector('.craft-finale');
    var headline = document.querySelector('.craft-headline');

    ScrollTrigger.create({
      trigger: '#s5-craft',
      start: 'top top',
      end: '+=120vh',
      scrub: 1.2,
      pin: true,
      anticipatePin: 1,
      onUpdate: function(self) {
        var p = self.progress;

        if (headline) headline.style.opacity = Math.min(1, p / 0.1);

        var p1 = clamp01((p - 0.05) / 0.3);
        if (cp1) {
          cp1.style.opacity = p1;
          cp1.style.transform = 'translateY(' + ((1 - p1) * 30) + 'px) scale(' + (0.88 + p1 * 0.12) + ')';
        }

        var p2 = clamp01((p - 0.2) / 0.3);
        if (cp2) {
          cp2.style.opacity = p2;
          cp2.style.transform = 'translateY(' + ((1 - p2) * 30) + 'px) scale(' + (0.88 + p2 * 0.12) + ')';
        }

        var p3 = clamp01((p - 0.35) / 0.3);
        if (cp3) {
          cp3.style.opacity = p3;
          cp3.style.transform = 'translateY(' + ((1 - p3) * 30) + 'px) scale(' + (0.88 + p3 * 0.12) + ')';
        }

        var pf = clamp01((p - 0.75) / 0.25);
        if (finale) {
          finale.style.opacity = pf;
          finale.style.transform = 'translateY(' + ((1 - pf) * 20) + 'px)';
        }
      }
    });
  }

  // ─── DESKTOP SCROLL REVEALS ─────────────────────────────────
  function initDesktopReveals() {
    if (typeof ScrollTrigger === 'undefined') return;
    document.querySelectorAll('.reveal').forEach(function(el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: function() { el.classList.add('is-visible'); }
      });
    });
  }

  // ─── MOBILE REVEALS ─────────────────────────────────────────
  function initMobileReveals() {
    document.querySelectorAll('.mobile-fallback').forEach(function(el) {
      el.style.display = 'block';
    });
    document.querySelectorAll('.desktop-only').forEach(function(el) {
      el.style.display = 'none';
    });

    ['cp1', 'cp2', 'cp3'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
    });

    var finale = document.querySelector('.craft-finale');
    if (finale) { finale.style.opacity = '1'; finale.style.transform = 'none'; }

    var craftHeadline = document.querySelector('.craft-headline');
    if (craftHeadline) craftHeadline.style.opacity = '1';

    var drt = document.querySelector('.door-reveal-text');
    if (drt) drt.style.opacity = '1';

    var toReveal = document.querySelectorAll('.reveal, .craft-panel, .craft-finale, .craft-headline');
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    toReveal.forEach(function(el) {
      el.style.transition = 'opacity 700ms ease, transform 700ms ease';
      obs.observe(el);
    });
  }

  // ─── NAV ────────────────────────────────────────────────────
  function initNav() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (header) {
      window.addEventListener('scroll', function() {
        header.classList.toggle('is-scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    if (toggle && navLinks) {
      toggle.addEventListener('click', function() {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.classList.toggle('is-open', !open);
        navLinks.classList.toggle('is-open', !open);
      });

      navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.remove('is-open');
          navLinks.classList.remove('is-open');
        });
      });
    }
  }

  // ─── BOOT ───────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('js-ready');

    initNav();
    initIntro();

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    } else {
      console.warn('[KI] gsap or ScrollTrigger not available at boot');
    }

    console.log('[KI] isMobile:', isMobile(), '| innerWidth:', window.innerWidth, '| WebGL:', hasWebGL());

    if (!isMobile()) {
      // Explicitly show canvases in case CSS media query hid them
      document.querySelectorAll('.scene-canvas.desktop-only').forEach(function(el) {
        el.style.display = 'block';
      });
      initHeroScene();
      initDoorScene();
      initDrawerScene();
      initCraftSection();
      initDesktopReveals();
    } else {
      console.log('[KI] mobile path — showing fallbacks');
      initMobileReveals();
    }

    window.addEventListener('resize', function() {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });

})();
