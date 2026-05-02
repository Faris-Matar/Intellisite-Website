import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * PORTFOLIO — four-section showcase.
 *
 *   §1  Page Hero            — 60vh, staggered fade-up on load
 *   §2  Real Transformation  — full-width Before/After toggle + results strip
 *   §3  Demo Grid            — three cards (Innovate scroll ↑ · Hartley · Aura)
 *   §4  Closing CTA          — Book a Call + Get In Touch
 */

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

/* ── Panel crossfade variants ── */
const panelVariants = {
  enter:   { opacity: 0, scale: 1.015 },
  visible: { opacity: 1, scale: 1,    transition: { duration: duration.base,  ease: ease.silk } },
  exit:    { opacity: 0, scale: 0.99, transition: { duration: duration.quick, ease: ease.silk } },
};

/* ── Results strip data ── */
const RESULTS = [
  { label: "First Impression",  desc: "Transformed in 3 seconds" },
  { label: "Conversion Path",   desc: "Clear single CTA vs 9 nav items" },
  { label: "Brand Perception",  desc: "Premium vs generic template" },
];

/* ── Demo card data ── */
const DEMOS = [
  {
    name:    "Innovate Estate Agents",
    tag:     "Real Transformation · Birmingham",
    desc:    "A real Birmingham estate agency rebuilt from the ground up. Before and after.",
    href:    "#transformation",
    btn:     "See Transformation",
    newTab:  false,
    anchor:  true,
  },
  {
    name:    "Hartley Property Group",
    tag:     "Estate Agent · London",
    desc:    "A boutique London property group repositioned as a premium digital brand.",
    href:    "/demos/hartley/index.html",
    btn:     "View Demo",
    newTab:  true,
  },
  {
    name:    "Aura Estates",
    tag:     "Luxury Lettings · Manchester",
    desc:    "A luxury lettings agency built for high-net-worth clients.",
    href:    "/demos/aura/index.html",
    btn:     "View Demo",
    newTab:  true,
  },
];

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export default function Portfolio() {
  const reduced = useReducedMotion();
  const [view, setView]   = useState("before");

  return (
    <>
      <Helmet>
        <title>Our Work — IntelliSite Web Design Portfolio</title>
        <meta name="description" content="See IntelliSite's web design portfolio. Real transformations for UK luxury home improvement businesses including bespoke kitchens, luxury bathrooms, and loft conversions. Before and after website redesigns that convert." />
        <meta name="keywords" content="web design portfolio UK, luxury home improvement business website redesign, bespoke kitchen website design, luxury bathroom website, loft conversion website, before after website design" />
        <link rel="canonical" href="https://www.intellisite.co.uk/portfolio" />
        <meta property="og:title" content="Our Work — IntelliSite Web Design Portfolio" />
        <meta property="og:description" content="Real website transformations for UK luxury home improvement businesses. See the before and after results." />
        <meta property="og:url" content="https://www.intellisite.co.uk/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.intellisite.co.uk/og-image.jpg" />
      </Helmet>

      {/* ══════════════════════════════════════════
          §1  PAGE HERO
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full flex items-center justify-center bg-navy overflow-hidden"
        style={{ minHeight: "60vh", paddingTop: "5rem", paddingBottom: "4rem" }}
      >
        {/* Ambient orb */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "50%", left: "55%", transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: "560px",
              height: "560px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 50%, transparent 70%)",
            }}
            animate={
              reduced
                ? {}
                : { scale: [1, 1.1, 0.95, 1], x: [0, 28, -20, 0], y: [0, -18, 26, 0] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-edge relative text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease: ease.silk, delay: 0.1 }}
              className="flex items-center justify-center mb-8"
            >
              <span className="hairline" />
              <span className="eyebrow">Our Work</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.heroLong, ease: ease.silk, delay: 0.2 }}
              className="font-display text-display-lg text-bone"
              style={{ lineHeight: 1.05 }}
            >
              Websites that win
              <span
                className="block italic"
                style={{ color: "rgba(201,168,76,0.95)" }}
              >
                instructions.
              </span>
            </motion.h1>

            {/* Supporting */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.38 }}
              className="mt-6 text-lg leading-relaxed max-w-lg mx-auto"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Every project is built to convert.
              Here is the proof.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §2  REAL TRANSFORMATION
          ══════════════════════════════════════════ */}
      <section
        id="transformation"
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Background orb */}
        <motion.div
          className="absolute top-1/4 right-0 pointer-events-none"
          style={{
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
          }}
          animate={reduced ? {} : { x: [0, -24, 16, 0], scale: [1, 1.08, 0.94, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          aria-hidden="true"
        />

        <div className="container-edge relative">
          {/* ── Heading row ── */}
          <div className="grid grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            {/* Left — headline */}
            <div className="col-span-12 md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: reduced ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: duration.base, ease: ease.silk }}
                className="flex items-center mb-8"
              >
                <span className="hairline" />
                <span className="eyebrow">Real Transformation</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: reduced ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
                className="font-display text-display-md text-bone"
                style={{ lineHeight: 1.05 }}
              >
                From invisible
                <span
                  className="block italic"
                  style={{ color: "rgba(201,168,76,0.95)" }}
                >
                  to unforgettable.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: duration.slow, ease: ease.silk, delay: 0.18 }}
                className="mt-5 text-base leading-relaxed"
                style={{ color: "rgba(232,228,218,0.6)" }}
              >
                Innovate Estate Agents &middot; Birmingham
              </motion.p>
            </div>

            {/* Right — toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.28 }}
              className="col-span-12 md:col-span-5 flex flex-col items-start md:items-end gap-3"
            >
              <p
                className="font-sans"
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(232,228,218,0.4)",
                }}
              >
                See the difference
              </p>
              <div
                className="flex items-center"
                style={{ border: "1px solid rgba(232,228,218,0.15)", padding: "4px" }}
              >
                {["before", "after"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setView(opt)}
                    className="relative px-6 py-2 font-sans transition-colors duration-300"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
                  >
                    {view === opt && (
                      <motion.span
                        layoutId="portfolio-toggle-pill"
                        className="absolute inset-0 bg-gold"
                        transition={{ duration: duration.base, ease: ease.silk }}
                      />
                    )}
                    <span
                      className="relative font-medium"
                      style={{
                        zIndex: 10,
                        position: "relative",
                        color: view === opt ? "#0D1B2A" : "rgba(232,228,218,0.5)",
                      }}
                    >
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Panel window ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.22 }}
            className="relative w-full overflow-hidden"
            style={{
              border: "1px solid rgba(232,228,218,0.1)",
              minHeight: "600px",
            }}
          >
            <AnimatePresence mode="wait">
              {view === "before" ? (
                <motion.div
                  key="before"
                  variants={panelVariants}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                  className="w-full"
                >
                  <BeforePanel />
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  variants={panelVariants}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                  className="w-full"
                >
                  <AfterPanel />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Panel label */}
          <div
            className="mt-4 flex items-center justify-between font-sans"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(232,228,218,0.35)",
            }}
          >
            <span>Innovate Estate Agents — Birmingham</span>
            <span style={{ color: view === "after" ? "rgba(201,168,76,0.6)" : "rgba(232,228,218,0.35)" }}>
              {view === "after" ? "IntelliSite rebuild" : "Current live site"}
            </span>
          </div>

          {/* ── Results strip ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12"
            style={{ background: "rgba(232,228,218,0.06)" }}
          >
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: duration.base, ease: ease.silk, delay: 0.1 + i * 0.1 }}
                className="flex flex-col"
                style={{
                  background: "#0D1B2A",
                  padding: "1.5rem 1.75rem",
                  borderTop: "1px solid rgba(201,168,76,0.35)",
                }}
              >
                <p
                  className="font-display italic mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(201,168,76,0.9)",
                    lineHeight: 1.2,
                  }}
                >
                  {r.label}
                </p>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(232,228,218,0.6)" }}
                >
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3  DEMO SHOWCASE GRID
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        <div className="container-edge relative">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.base, ease: ease.silk }}
            className="flex items-center mb-8"
          >
            <span className="hairline" />
            <span className="eyebrow">More Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
            className="font-display text-display-md text-bone mb-14 md:mb-16"
            style={{ lineHeight: 1.08 }}
          >
            Built to a standard.
          </motion.h2>

          {/* Cards — 3-col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {DEMOS.map((demo, i) => (
              <DemoCard key={demo.name} demo={demo} index={i} reduced={reduced} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §4  CLOSING CTA
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden text-center"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Gold orb */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: "600px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)",
            }}
            animate={reduced ? {} : { scale: [1, 1.08, 0.96, 1], x: [0, 20, -16, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-edge relative">
          <div className="max-w-2xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.base, ease: ease.silk }}
              className="flex items-center justify-center mb-8"
            >
              <span className="hairline" />
              <span className="eyebrow">Ready?</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: reduced ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
              className="font-display text-display-md text-bone mb-6"
              style={{ lineHeight: 1.08 }}
            >
              Your website could be next.
            </motion.h2>

            {/* Supporting */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.16 }}
              className="font-sans text-base leading-relaxed mb-12"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Book a free discovery call and we will audit your current website
              before we even speak.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary — Calendly */}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 font-sans text-sm font-medium tracking-wide uppercase w-full sm:w-auto transition-colors"
                style={{
                  padding: "1rem 2rem",
                  background: "rgba(201,168,76,1)",
                  color: "#0D1B2A",
                  transitionDuration: "220ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#dcbe5c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,168,76,1)"; }}
              >
                <span>Book a Free Call</span>
                <span aria-hidden="true">→</span>
              </a>

              {/* Ghost — /contact */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 font-sans text-sm font-medium tracking-wide uppercase w-full sm:w-auto transition-all"
                style={{
                  padding: "1rem 2rem",
                  border: "1px solid rgba(232,228,218,0.2)",
                  color: "rgba(232,228,218,0.8)",
                  background: "transparent",
                  transitionDuration: "220ms",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)";
                  e.currentTarget.style.color = "rgba(201,168,76,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,228,218,0.2)";
                  e.currentTarget.style.color = "rgba(232,228,218,0.8)";
                }}
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   BEFORE PANEL — Innovate EA faithful recreation
════════════════════════════════════════════════════ */
function BeforePanel() {
  const NAV_ITEMS = ["About Us", "Sales", "Lettings", "Land", "Commercial", "Mortgages", "News", "Blog", "Contact"];
  return (
    <div className="w-full" style={{ background: "#1a1a1a", fontFamily: "Arial, sans-serif" }}>
      {/* Nav */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: "#111111", borderBottom: "2px solid #cc0000" }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="flex items-center justify-center px-2 py-1 text-white text-xs font-bold"
            style={{ background: "#cc0000", minWidth: "72px" }}
          >
            INNOVATE
          </div>
          <span className="text-white text-[0.55rem] hidden sm:block" style={{ letterSpacing: "0.05em" }}>
            Estate Agents
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3 flex-wrap">
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className="text-white text-[0.55rem] cursor-pointer hover:text-red-400"
              style={{ whiteSpace: "nowrap" }}
            >
              {item}
            </span>
          ))}
        </div>
        <div
          className="text-white text-[0.6rem] px-2 py-1 shrink-0 cursor-pointer"
          style={{ background: "#cc0000", whiteSpace: "nowrap" }}
        >
          Log a Repair
        </div>
      </div>

      {/* Hero area */}
      <div
        className="relative flex flex-col items-center justify-center py-12 md:py-20 text-center px-4"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.62) 0%, rgba(20,20,20,0.85) 100%), linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
          minHeight: "240px",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "repeating-linear-gradient(90deg, #333 0px, #444 60px, #333 60px, #222 120px)",
          }}
        />
        <div className="relative z-10">
          <p className="text-white font-bold text-lg md:text-2xl mb-2" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
            Looking to Buy or Rent?
          </p>
          <p className="text-gray-300 text-xs mb-4" style={{ maxWidth: "360px", margin: "0 auto 12px" }}>
            We offer professional sales, lettings and property management services across Birmingham.
          </p>
          <div
            className="inline-block text-white text-xs px-4 py-1.5 cursor-pointer"
            style={{ background: "#cc0000" }}
          >
            Who are we?
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-2 h-2 rounded-full" style={{ background: i === 0 ? "#cc0000" : "#555" }} />
            ))}
          </div>
        </div>
      </div>

      {/* Search form */}
      <div className="px-4 py-4" style={{ background: "#222" }}>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {["Buy / Rent", "Area / Postcode", "Min Price", "Max Price", "Bedrooms"].map((f) => (
            <div
              key={f}
              className="text-gray-400 text-[0.6rem] px-3 py-1.5"
              style={{ background: "#333", border: "1px solid #444", minWidth: "80px" }}
            >
              {f} ▾
            </div>
          ))}
          <div
            className="text-white text-[0.65rem] px-4 py-1.5 font-bold cursor-pointer"
            style={{ background: "#cc0000" }}
          >
            SEARCH
          </div>
        </div>
      </div>

      {/* Service boxes */}
      <div className="grid grid-cols-4 gap-px px-4 pb-4" style={{ background: "#1a1a1a" }}>
        {["Instant Valuation", "For Sale", "To Let", "Financial Advice"].map((s) => (
          <div
            key={s}
            className="flex flex-col items-center justify-center py-4 gap-2 cursor-pointer"
            style={{ background: "#222", border: "1px solid #333" }}
          >
            <div
              className="w-6 h-6 flex items-center justify-center"
              style={{ border: "1.5px solid #cc0000", borderRadius: "2px" }}
            >
              <span style={{ color: "#cc0000", fontSize: "0.55rem" }}>■</span>
            </div>
            <span className="text-gray-300 text-[0.52rem] text-center leading-tight">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   AFTER PANEL — IntelliSite premium rebuild
════════════════════════════════════════════════════ */
function AfterPanel() {
  const RED    = "#8B1A1A";
  const BG     = "#0d0d0d";
  const BG2    = "#111111";
  const BG3    = "#161616";
  const TEXT   = "#F5F0E8";
  const TEXT50 = "rgba(245,240,232,0.5)";
  const TEXT70 = "rgba(245,240,232,0.7)";
  const SERIF  = "'Cormorant Garamond', Georgia, serif";
  const SANS   = "'Manrope', Arial, sans-serif";

  return (
    <div className="w-full" style={{ background: BG, fontFamily: SANS, color: TEXT }}>

      {/* Nav */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: BG, borderBottom: "1px solid rgba(245,240,232,0.08)" }}
      >
        <span style={{ fontFamily: SERIF, fontSize: "0.95rem", letterSpacing: "0.22em", fontVariant: "small-caps", color: TEXT, fontWeight: 600 }}>
          INNOVATE
        </span>
        <div className="flex items-center gap-5">
          {["Portfolio", "Services", "About"].map((item) => (
            <span key={item} className="hidden sm:block" style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: TEXT70, cursor: "pointer" }}>
              {item}
            </span>
          ))}
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: TEXT, border: `1px solid ${RED}`, padding: "5px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>
            Book Valuation
          </div>
        </div>
      </div>

      {/* Hero — two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "220px" }}>
        <div className="flex flex-col justify-center px-6 py-10 md:py-14" style={{ background: BG }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: TEXT50, marginBottom: "16px", fontFamily: SANS }}>
            Established in Birmingham
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 600, lineHeight: 1.05, color: TEXT, marginBottom: "14px" }}>
            Redefining<br />Birmingham's<br />Finest Residences.
          </p>
          <p style={{ fontSize: "0.72rem", lineHeight: 1.7, color: TEXT70, marginBottom: "20px", maxWidth: "300px" }}>
            Bespoke property advisory for the discerning client. We bridge
            the gap between architectural excellence and strategic investment.
          </p>
          <div style={{ display: "inline-block", background: RED, color: TEXT, fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "9px 20px", cursor: "pointer", alignSelf: "flex-start" }}>
            View Portfolio
          </div>
        </div>

        {/* Right — property photo */}
        <div
          className="relative hidden md:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
          }}
        >
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />
          <div className="absolute bottom-4 left-4" style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TEXT50 }}>
              Sutton Coldfield · Birmingham
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: BG2 }}>
        {[
          { stat: "20+",          sub: "Years",  label: "Local Expertise" },
          { stat: "500+",         sub: "Sales",  label: "Proven Track Record" },
          { stat: "Award Winning", sub: "",       label: "Excellence in Service" },
        ].map((s, i) => (
          <div
            key={s.stat}
            style={{
              borderLeft: `3px solid ${RED}`,
              borderBottom: i < 2 ? "1px solid rgba(245,240,232,0.06)" : "none",
              padding: "18px 20px",
              background: BG2,
            }}
          >
            <p style={{ fontFamily: SERIF, fontSize: s.stat.length > 6 ? "1.3rem" : "1.8rem", fontWeight: 600, color: TEXT, lineHeight: 1.1, marginBottom: "3px" }}>
              {s.stat}
            </p>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: TEXT50 }}>
              {s.sub ? `${s.sub} — ` : ""}{s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Collections */}
      <div style={{ background: BG3, padding: "24px 20px" }}>
        <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: RED, marginBottom: "10px", fontFamily: SANS }}>
          Premium Listings
        </p>
        <p style={{ fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 600, color: TEXT, lineHeight: 1.05, marginBottom: "12px" }}>
          Curated Collections.
        </p>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "0.78rem", color: TEXT70, lineHeight: 1.6, marginBottom: "16px", maxWidth: "340px" }}>
          "Our approach treats every listing as a masterpiece. We specialise
          in properties that define Birmingham's skyline and suburban heritage."
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
          {["Architectural Integrity Check", "Discreet Off-Market Access", "Bespoke Interior Staging"].map((pt) => (
            <div key={pt} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "16px", height: "1px", background: RED, flexShrink: 0 }} />
              <span style={{ fontSize: "0.65rem", color: TEXT70, letterSpacing: "0.04em" }}>{pt}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TEXT, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Explore Assets <span style={{ color: RED }}>→</span>
        </div>
      </div>

      {/* Property strip */}
      <div className="grid grid-cols-2 gap-px" style={{ background: "#222" }}>
        <div
          className="relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "250px",
          }}
        >
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        </div>
        <div
          className="relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "250px",
          }}
        >
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: RED }}>
            <p style={{ fontSize: "0.48rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.7)", marginBottom: "1px" }}>
              Featured Asset
            </p>
            <div className="flex items-center justify-between">
              <p style={{ fontFamily: SERIF, fontSize: "0.75rem", color: TEXT, fontWeight: 600 }}>Sutton Coldfield Manor</p>
              <span style={{ color: TEXT, fontSize: "0.75rem" }}>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 px-4" style={{ background: BG, borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <p style={{ fontFamily: SERIF, fontSize: "1.1rem", fontVariant: "small-caps", letterSpacing: "0.3em", color: TEXT, fontWeight: 600, marginBottom: "6px" }}>
          INNOVATE
        </p>
        <p style={{ fontSize: "0.52rem", color: TEXT50, letterSpacing: "0.06em", marginBottom: "12px" }}>
          Birmingham's Bespoke Architectural Estate Agency
        </p>
        <div className="flex items-center justify-center gap-6">
          {["Portfolio", "Services", "Contact"].map((l) => (
            <span key={l} style={{ fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TEXT50, cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   DEMO CARD — used in §3
════════════════════════════════════════════════════ */
function DemoCard({ demo, index, reduced }) {
  const isAnchor = demo.anchor;

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.08 + index * 0.12,
      }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
      style={{ transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}
    >
      {/* Gold top border — brightens on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-all duration-500"
        style={{ background: "rgba(201,168,76,0.35)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(201,168,76,0.9)" }}
        aria-hidden="true"
      />

      {/* Card body */}
      <div
        className="relative h-full p-8 md:p-10 transition-colors duration-400"
        style={{
          background: "rgba(6,13,23,0.9)",
          border: "1px solid rgba(232,228,218,0.08)",
          borderTop: "none",
        }}
      >
        {/* Hover background lift */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: "rgba(255,255,255,0.018)" }}
          aria-hidden="true"
        />

        <div className="relative">
          {/* Tag */}
          <p
            className="font-sans mb-4"
            style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)" }}
          >
            {demo.tag}
          </p>

          {/* Name */}
          <h3 className="font-display text-2xl md:text-3xl text-bone leading-tight mb-4">
            {demo.name}
          </h3>

          {/* Gold hairline */}
          <div
            className="h-[1px] mb-5 origin-left transition-all duration-500"
            style={{
              width: "2.5rem",
              background: "rgba(201,168,76,0.5)",
            }}
            aria-hidden="true"
          />

          {/* Description */}
          <p
            className="font-sans text-sm leading-relaxed mb-8"
            style={{ color: "rgba(232,228,218,0.6)" }}
          >
            {demo.desc}
          </p>

          {/* CTA */}
          <span
            className="inline-flex items-center gap-3 font-sans text-sm transition-all duration-300"
            style={{
              padding: "0.6rem 1.25rem",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "rgba(201,168,76,0.8)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "0.72rem",
            }}
          >
            {demo.btn}
            <span aria-hidden="true">{demo.newTab ? "↗" : "↑"}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (isAnchor) {
    return (
      <a href={demo.href} className="block h-full" style={{ textDecoration: "none" }}>
        {cardContent}
      </a>
    );
  }

  return (
    <a
      href={demo.href}
      target="_blank"
      rel="noreferrer"
      className="block h-full"
      style={{ textDecoration: "none" }}
    >
      {cardContent}
    </a>
  );
}
