/* ============================================================
   IntelliSite — Global Motion System
   One source of truth for every transition, variant, and easing.
   Philosophy: smooth · minimal · controlled · editorial.
   No bounce. No chaos. No excess.
   ============================================================ */

/* ─── 1. TIMING ─── */
export const duration = {
  fast: 0.22, // micro-interactions: hover, tap, link colour shift
  quick: 0.32, // UI state changes: menu open, dropdown
  base: 0.52, // standard section transitions, card reveals
  slow: 0.7, // layered multi-element reveals
  hero: 1.0, // hero headline + tagline cinematic entry
  heroLong: 1.2, // hero background / video overlay fade
};

/* ─── 2. EASING ─── */
// Soft cubic beziers — every value hand-picked. Zero bounce, zero back.
export const ease = {
  silk: [0.22, 1, 0.36, 1], // primary — ease-out-quint feel, luxurious
  editorial: [0.65, 0, 0.35, 1], // symmetric, used for transitions that both enter + exit
  authority: [0.83, 0, 0.17, 1], // confident, near-linear-middle, used for reveals
  gentle: [0.16, 1, 0.3, 1], // very soft landings
  linearOut: [0.33, 1, 0.68, 1], // fast-start, soft-land micro interactions
};

/* ─── 3. VARIANTS — Framer Motion ─── */
// Use these as `variants={...}` with initial="hidden" animate/whileInView="visible".

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: ease.silk },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.silk },
  },
};

export const fadeUpLarge = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.silk },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.silk },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.silk },
  },
};

/* Hero-specific: longer, more deliberate */
export const heroRise = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.hero, ease: ease.silk },
  },
};

/* Stagger parent — children reveal sequentially */
export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: gap,
      delayChildren: delay,
    },
  },
});

/* Stagger child — pair with `stagger` parent */
export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.silk },
  },
};

/* Reveal mask — a bar that wipes off the content */
export const revealMask = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: duration.slow, ease: ease.editorial },
  },
};

/* Scale-in, used sparingly for panels emerging from nothing */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.silk },
  },
};

/* ─── 4. PAGE TRANSITIONS ─── */
// Overlay sweep + fade — used inside AnimatePresence in PageTransition.jsx
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.silk },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: duration.quick, ease: ease.silk },
  },
};

export const pageOverlay = {
  initial: { scaleY: 0, originY: 0 },
  animate: {
    scaleY: [0, 1, 1, 0],
    originY: [0, 0, 1, 1],
    transition: {
      duration: 1.0,
      times: [0, 0.4, 0.6, 1],
      ease: ease.authority,
    },
  },
};

/* ─── 5. VIEWPORT defaults for whileInView ─── */
export const viewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -10% 0px",
};

export const viewportEarly = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -5% 0px",
};

/* ─── 6. MICRO-INTERACTIONS ─── */
// Button hover / tap — never scale > 1.03, never translate > 2px
export const buttonHover = {
  whileHover: {
    scale: 1.02,
    transition: { duration: duration.fast, ease: ease.silk },
  },
  whileTap: {
    scale: 0.985,
    transition: { duration: 0.12, ease: ease.silk },
  },
};

/* Card lift — elegant, not playful */
export const cardLift = {
  whileHover: {
    y: -4,
    transition: { duration: duration.base, ease: ease.silk },
  },
};
