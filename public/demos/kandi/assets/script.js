(function () {
  'use strict';

  // ─── WEBGL DETECTION ─────────────────────────────────────────
  function hasWebGL() {
    try {
      var c = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (c.getContext('webgl') || c.getContext('webgl2') || c.getContext('experimental-webgl'))
      );
    } catch (e) { return false; }
  }

  function isMobile() {
    // Only skip 3D on phones or devices with no WebGL at all
    if (!hasWebGL()) return true;
    return window.innerWidth < 640;
  }

  // ─── HELPERS ─────────────────────────────────────────────────
  function clamp01(v) { return Math.min(1, Math.max(0, v)); }

  // ─── MODULE-LEVEL THREE.JS STATE ─────────────────────────────
  var renderer, scene, camera;
  var cabinetGroup, drawerGroup, drawerFrontGroup;

  // ─── BUILD CABINET GEOMETRY ──────────────────────────────────
  function buildCabinet() {
    var g = new THREE.Group();
    g.position.set(1.6, 0, 0); // offset right; hero text occupies left half

    var frameMat = new THREE.MeshStandardMaterial({ color: 0x4a2e0e, roughness: 0.82, metalness: 0.04 });
    var panelMat = new THREE.MeshStandardMaterial({ color: 0x8a5c22, roughness: 0.58, metalness: 0.06 });
    var innerMat = new THREE.MeshStandardMaterial({ color: 0xa86e30, roughness: 0.64, metalness: 0.04 });
    var brassMat = new THREE.MeshStandardMaterial({ color: 0xc8a020, roughness: 0.16, metalness: 0.97 });

    // Outer frame (dark walnut border)
    var frame = new THREE.Mesh(new THREE.BoxGeometry(3.1, 4.5, 0.08), frameMat);
    frame.position.z = -0.07;
    g.add(frame);

    // Main door panel
    g.add(new THREE.Mesh(new THREE.BoxGeometry(2.7, 4.1, 0.13), panelMat));

    // Recessed inner panel
    var inner = new THREE.Mesh(new THREE.BoxGeometry(1.9, 3.3, 0.045), innerMat);
    inner.position.z = 0.09;
    g.add(inner);

    // Vertical brass handle
    var handle = new THREE.Mesh(new THREE.BoxGeometry(0.065, 1.3, 0.065), brassMat);
    handle.position.set(0.92, 0, 0.17);
    g.add(handle);

    var capGeom = new THREE.BoxGeometry(0.12, 0.09, 0.13);
    var capT = new THREE.Mesh(capGeom, brassMat);
    capT.position.set(0.92, 0.68, 0.17);
    g.add(capT);
    var capB = new THREE.Mesh(capGeom, brassMat);
    capB.position.set(0.92, -0.68, 0.17);
    g.add(capB);

    return g;
  }

  // ─── BUILD DRAWER GEOMETRY ───────────────────────────────────
  function buildDrawer() {
    var g = new THREE.Group();

    var bodyMat  = new THREE.MeshStandardMaterial({ color: 0x4a2e0e, roughness: 0.85, metalness: 0.03 });
    var slotMat  = new THREE.MeshStandardMaterial({ color: 0x1e0e02, roughness: 0.96 });
    var frontMat = new THREE.MeshStandardMaterial({ color: 0x8a5c22, roughness: 0.58, metalness: 0.06 });
    var innerMat = new THREE.MeshStandardMaterial({ color: 0xa86e30, roughness: 0.64 });
    var brassMat = new THREE.MeshStandardMaterial({ color: 0xc8a020, roughness: 0.16, metalness: 0.97 });

    // Fixed cabinet body
    var body = new THREE.Mesh(new THREE.BoxGeometry(5.4, 1.5, 2.9), bodyMat);
    body.position.z = -1.7;
    g.add(body);

    // Dark slot opening
    var slot = new THREE.Mesh(new THREE.BoxGeometry(4.7, 1.0, 2.5), slotMat);
    slot.position.z = -0.85;
    g.add(slot);

    // Sliding drawer front group
    drawerFrontGroup = new THREE.Group();

    drawerFrontGroup.add(new THREE.Mesh(new THREE.BoxGeometry(4.9, 1.05, 0.16), frontMat));

    var innerF = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.65, 0.065), innerMat);
    innerF.position.z = 0.12;
    drawerFrontGroup.add(innerF);

    var hBar = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.07, 0.07), brassMat);
    hBar.position.set(0, 0, 0.20);
    drawerFrontGroup.add(hBar);

    var capG = new THREE.BoxGeometry(0.09, 0.09, 0.13);
    var hCapL = new THREE.Mesh(capG, brassMat);
    hCapL.position.set(-1.24, 0, 0.20);
    drawerFrontGroup.add(hCapL);
    var hCapR = new THREE.Mesh(capG, brassMat);
    hCapR.position.set(1.24, 0, 0.20);
    drawerFrontGroup.add(hCapR);

    drawerFrontGroup.position.z = 0;
    g.add(drawerFrontGroup);

    return g;
  }

  // ─── INIT SINGLE THREE.JS RENDERER ──────────────────────────
  function initThreeJS() {
    var canvas = document.getElementById('three-canvas');
    if (!canvas) { console.warn('[KI] #three-canvas not found'); return false; }
    if (typeof THREE === 'undefined') { console.warn('[KI] THREE not loaded'); return false; }

    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    } catch (e) {
      console.error('[KI] WebGLRenderer failed:', e);
      return false;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (THREE.sRGBEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;

    // alpha:true — canvas transparent by default; 3D objects render on top of page
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    // Warm studio lighting
    scene.add(new THREE.AmbientLight(0xfff8f0, 1.0));
    var key = new THREE.DirectionalLight(0xfff0d0, 2.6);
    key.position.set(5, 8, 7);
    scene.add(key);
    var fill = new THREE.DirectionalLight(0xe0d8c8, 0.8);
    fill.position.set(-4, 2, 5);
    scene.add(fill);
    var rim = new THREE.DirectionalLight(0xffffff, 0.4);
    rim.position.set(0, -3, -5);
    scene.add(rim);

    // Build both mesh groups; start invisible
    cabinetGroup = buildCabinet();
    cabinetGroup.visible = false;
    scene.add(cabinetGroup);

    drawerGroup = buildDrawer();
    drawerGroup.visible = false;
    scene.add(drawerGroup);

    // Show the fixed canvas (desktop only)
    canvas.style.display = 'block';

    // Resize handler
    window.addEventListener('resize', function () {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Continuous render loop — when both groups invisible,
    // alpha:true means canvas is transparent = page shows through
    (function loop() {
      requestAnimationFrame(loop);
      if (cabinetGroup.visible) cabinetGroup.rotation.y += 0.004;
      renderer.render(scene, camera);
    }());

    console.log('[KI] Single Three.js renderer initialised (r' + THREE.REVISION + ')');
    return true;
  }

  // ─── SCROLL-DRIVEN 3D SCENES ─────────────────────────────────
  function initScrollScenes() {
    if (!renderer) return;

    // ── Hero: cabinet dolly ──────────────────────────────────
    // onEnter fires immediately on creation when hero is already in view (scroll:0)
    ScrollTrigger.create({
      trigger: '#s2-hero',
      start: 'top top',
      end: '+=100vh',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onEnter: function () {
        cabinetGroup.visible = true;
        drawerGroup.visible = false;
        camera.position.set(0, 0, 8);
        camera.lookAt(0, 0, 0);
      },
      onLeave: function () {
        cabinetGroup.visible = false;
      },
      onEnterBack: function () {
        cabinetGroup.visible = true;
        drawerGroup.visible = false;
        camera.position.set(0, 0, 8);
        camera.lookAt(0, 0, 0);
      },
      onLeaveBack: function () {
        cabinetGroup.visible = false;
      },
      onUpdate: function (self) {
        // Dolly camera from z=8 to z=3.5 as user scrolls
        camera.position.z = 8 - 4.5 * self.progress;
      },
    });

    // ── Drawer: slide-out effect ─────────────────────────────
    ScrollTrigger.create({
      trigger: '#s4-drawer',
      start: 'top top',
      end: '+=100vh',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onEnter: function () {
        cabinetGroup.visible = false;
        drawerGroup.visible = true;
        camera.position.set(0, 1.5, 7);
        camera.lookAt(0, 0, 0);
        if (drawerFrontGroup) drawerFrontGroup.position.z = 0;
      },
      onLeave: function () {
        drawerGroup.visible = false;
      },
      onEnterBack: function () {
        cabinetGroup.visible = false;
        drawerGroup.visible = true;
        camera.position.set(0, 1.5, 7);
        camera.lookAt(0, 0, 0);
      },
      onLeaveBack: function () {
        drawerGroup.visible = false;
      },
      onUpdate: function (self) {
        // Drawer slides 2.8 units forward toward camera
        if (drawerFrontGroup) drawerFrontGroup.position.z = 2.8 * self.progress;
      },
    });

    console.log('[KI] Scroll scenes registered');
  }

  // ─── CSS 3D DOOR ─────────────────────────────────────────────
  function initDoorScene() {
    var doorPanel  = document.getElementById('door-panel');
    var revealText = document.querySelector('#s3-door .door-reveal-text');
    if (!doorPanel) { console.warn('[KI] door-panel not found'); return; }
    if (typeof ScrollTrigger === 'undefined') return;

    ScrollTrigger.create({
      trigger: '#s3-door',
      start: 'top top',
      end: '+=150vh',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onUpdate: function (self) {
        var deg = self.progress * -110;
        doorPanel.style.transform = 'rotateY(' + deg + 'deg)';
        if (revealText) {
          var t = self.progress > 0.55 ? Math.min(1, (self.progress - 0.55) / 0.35) : 0;
          revealText.style.opacity = t;
        }
      },
    });

    console.log('[KI] Door scene ready');
  }

  // ─── CRAFT SECTION — ScrollTrigger once (no pin) ────────────
  // Use ScrollTrigger with once:true rather than IntersectionObserver.
  // After ScrollTrigger.refresh() fires (post-intro), it knows the exact
  // scroll position of the craft section including GSAP pin-spacer offsets.
  // IntersectionObserver uses raw DOM geometry and misses spacer offsets.
  function initCraftSection() {
    var section  = document.getElementById('s5-craft');
    if (!section || typeof ScrollTrigger === 'undefined') return;

    var headline = section.querySelector('.craft-headline');
    var panels   = ['cp1', 'cp2', 'cp3']
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var finale   = section.querySelector('.craft-finale');

    function revealPanels() {
      if (headline) {
        headline.style.transition = 'opacity 0.55s ease';
        headline.style.opacity = '1';
      }
      panels.forEach(function (p, i) {
        setTimeout(function () {
          p.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          p.style.opacity    = '1';
          p.style.transform  = 'translateY(0) scale(1)';
        }, 100 + i * 200);
      });
      if (finale) {
        setTimeout(function () {
          finale.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          finale.style.opacity    = '1';
          finale.style.transform  = 'translateY(0)';
        }, 100 + panels.length * 200 + 160);
      }
    }

    // Trigger when top of craft section reaches 75% down from viewport top
    ScrollTrigger.create({
      trigger: '#s5-craft',
      start: 'top 75%',
      once: true,
      onEnter: revealPanels,
    });

    console.log('[KI] Craft section ScrollTrigger ready');
  }

  // ─── DESKTOP SCROLL REVEALS ──────────────────────────────────
  function initDesktopReveals() {
    if (typeof ScrollTrigger === 'undefined') return;
    document.querySelectorAll('.reveal').forEach(function (el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: function () { el.classList.add('is-visible'); },
      });
    });
  }

  // ─── MOBILE REVEALS ──────────────────────────────────────────
  function initMobileReveals() {
    document.querySelectorAll('.mobile-fallback').forEach(function (el) {
      el.style.display = 'block';
    });

    // Instantly reveal craft section content (no ScrollTrigger pin)
    ['cp1', 'cp2', 'cp3'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
    });
    var fin = document.querySelector('.craft-finale');
    if (fin) { fin.style.opacity = '1'; fin.style.transform = 'none'; }
    var ch = document.querySelector('.craft-headline');
    if (ch) ch.style.opacity = '1';
    var drt = document.querySelector('.door-reveal-text');
    if (drt) drt.style.opacity = '1';

    // Scroll-reveal for all .reveal elements via IntersectionObserver
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.transition = 'opacity 700ms ease, transform 700ms ease';
          e.target.style.opacity    = '1';
          e.target.style.transform  = 'none';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .craft-panel, .craft-finale, .craft-headline').forEach(function (el) {
      obs.observe(el);
    });
  }

  // ─── INTRO — 1.5 s, skippable by scroll or click ─────────────
  function initIntro() {
    var overlay = document.getElementById('s1-intro');
    if (!overlay) return;
    var line1 = document.getElementById('intro-line-1');
    var line2 = document.getElementById('intro-line-2');

    var dismissed = false;

    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      clearTimeout(autoTimer);
      // Remove event listeners so they don't fire after dismissal
      window.removeEventListener('scroll', dismiss);
      window.removeEventListener('click', dismiss);
      overlay.classList.add('is-exiting');
      setTimeout(function () {
        overlay.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }, 400);
    }

    // Any scroll or click immediately skips the intro
    window.addEventListener('scroll', dismiss, { passive: true });
    window.addEventListener('click', dismiss);
    overlay.addEventListener('click', dismiss);

    // Line 1 in → out
    if (line1) {
      setTimeout(function () { line1.classList.add('is-visible'); }, 80);
      setTimeout(function () { line1.classList.remove('is-visible'); }, 680);
    }
    // Line 2 in
    if (line2) {
      setTimeout(function () { line2.classList.add('is-visible'); }, 860);
    }

    // Auto-dismiss after 1.5 s
    var autoTimer = setTimeout(dismiss, 1500);
  }

  // ─── NAV ─────────────────────────────────────────────────────
  function initNav() {
    var header   = document.querySelector('.site-header');
    var toggle   = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (header) {
      window.addEventListener('scroll', function () {
        header.classList.toggle('is-scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    if (toggle && navLinks) {
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.classList.toggle('is-open', !open);
        navLinks.classList.toggle('is-open', !open);
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.remove('is-open');
          navLinks.classList.remove('is-open');
        });
      });
    }
  }

  // ─── BOOT ────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('js-ready');

    initNav();
    initIntro();

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    } else {
      console.warn('[KI] GSAP or ScrollTrigger missing at boot');
    }

    var mobile = isMobile();
    console.log('[KI] mobile=' + mobile + ' w=' + window.innerWidth + ' webgl=' + hasWebGL());

    if (!mobile) {
      var ok = initThreeJS();
      if (ok && typeof ScrollTrigger !== 'undefined') {
        initScrollScenes();
        initDoorScene();
      }
      initCraftSection();
      initDesktopReveals();
    } else {
      initMobileReveals();
    }

    window.addEventListener('resize', function () {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });

}());
