import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function createGlassPanel(width, height, depth, color) {
  const group = new THREE.Group();

  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshPhysicalMaterial({
      color,
      transparent: true,
      opacity: 0.18,
      roughness: 0.14,
      metalness: 0.08,
      transmission: 0.88,
      thickness: 1,
      clearcoat: 0.7,
      clearcoatRoughness: 0.1,
    })
  );

  const outline = new THREE.LineSegments(
    new THREE.EdgesGeometry(panel.geometry),
    new THREE.LineBasicMaterial({
      color: 0xd7dfef,
      transparent: true,
      opacity: 0.34,
    })
  );

  group.add(panel);
  group.add(outline);
  return group;
}

function buildHomeScene(scene) {
  const root = new THREE.Group();
  scene.add(root);

  const panels = [
    createGlassPanel(3.4, 1.9, 0.12, 0x244979),
    createGlassPanel(2.4, 1.45, 0.12, 0x1e3861),
    createGlassPanel(1.9, 1.2, 0.12, 0x183457),
  ];

  panels[0].position.set(-1.45, 1.1, -0.3);
  panels[0].rotation.set(0.26, -0.58, -0.12);

  panels[1].position.set(2.05, 0.1, -0.85);
  panels[1].rotation.set(-0.14, 0.34, 0.08);

  panels[2].position.set(0.4, -1.5, -1.4);
  panels[2].rotation.set(-0.44, 0.08, 0.12);

  panels.forEach((panel) => root.add(panel));

  const orb = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.9, 1),
    new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0xa3842c,
      emissiveIntensity: 0.18,
      metalness: 0.68,
      roughness: 0.24,
    })
  );
  orb.position.set(0.3, 0.55, 0.95);
  root.add(orb);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.04, 20, 140),
    new THREE.MeshStandardMaterial({
      color: 0xe3ca78,
      emissive: 0x846d2f,
      emissiveIntensity: 0.18,
      metalness: 0.82,
      roughness: 0.24,
    })
  );
  ring.position.copy(orb.position);
  ring.rotation.x = Math.PI / 2.45;
  root.add(ring);

  const grid = new THREE.GridHelper(16, 14, 0x34557f, 0x142b48);
  grid.position.set(0, -2.65, -2.3);
  grid.rotation.x = Math.PI / 2.56;
  grid.material.transparent = true;
  grid.material.opacity = 0.18;
  root.add(grid);

  const stars = [];
  for (let index = 0; index < 44; index += 1) {
    stars.push((Math.random() - 0.5) * 14, (Math.random() - 0.22) * 9, (Math.random() - 0.5) * 8);
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(stars, 3));
  const starMaterial = new THREE.PointsMaterial({
    color: 0xf2e0a2,
    size: 0.055,
    transparent: true,
    opacity: 0.64,
  });
  const starField = new THREE.Points(starGeometry, starMaterial);
  scene.add(starField);

  return {
    root,
    orb,
    ring,
    panels,
  };
}

export function initHomeHeroScene(host) {
  if (!host || prefersReducedMotion.matches || !canUseWebGL()) {
    host?.classList.add("is-fallback");
    return;
  }

  const canvasHost = host.querySelector("[data-home-hero-canvas]");
  if (!canvasHost) {
    host.classList.add("is-fallback");
    return;
  }

  let renderer;

  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    host.classList.add("is-fallback");
    return;
  }

  host.classList.add("has-webgl");

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  canvasHost.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.15, 8.4);

  const rig = new THREE.Group();
  rig.add(camera);
  scene.add(rig);

  scene.add(new THREE.AmbientLight(0xd5e4ff, 0.82));

  const keyLight = new THREE.PointLight(0xd4af37, 18, 26);
  keyLight.position.set(3.8, 4.2, 5.5);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0x5178bd, 10, 22);
  fillLight.position.set(-4.8, 1.6, 4.2);
  scene.add(fillLight);

  const built = buildHomeScene(scene);
  const target = { x: 0, y: 0 };
  let currentX = 0;
  let currentY = 0;
  let isVisible = true;

  const resize = () => {
    const width = canvasHost.clientWidth;
    const height = canvasHost.clientHeight;

    if (!width || !height) {
      return;
    }

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvasHost);

  host.addEventListener("pointermove", (event) => {
    const rect = host.getBoundingClientRect();
    target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.85;
    target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.7;
  });

  host.addEventListener("pointerleave", () => {
    target.x = 0;
    target.y = 0;
  });

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    },
    { threshold: 0.08 }
  );
  visibilityObserver.observe(host);

  const clock = new THREE.Clock();

  const render = () => {
    requestAnimationFrame(render);

    if (document.hidden || !isVisible) {
      return;
    }

    const elapsed = clock.getElapsedTime();

    currentX += (target.x - currentX) * 0.05;
    currentY += (target.y - currentY) * 0.05;

    rig.rotation.y = currentX * 0.24;
    rig.rotation.x = currentY * 0.12;
    rig.position.x = currentX * 0.4;
    rig.position.y = currentY * 0.22;

    built.root.rotation.y = elapsed * 0.09;
    built.orb.rotation.y = elapsed * 0.28;
    built.orb.position.y = Math.sin(elapsed * 1.08) * 0.16 + 0.55;
    built.ring.rotation.z = elapsed * 0.16;

    built.panels.forEach((panel, index) => {
      panel.position.y += Math.sin(elapsed * 0.7 + index * 0.85) * 0.0013;
      panel.rotation.z += 0.00045 * (index + 1);
    });

    renderer.render(scene, camera);
  };

  render();
}
