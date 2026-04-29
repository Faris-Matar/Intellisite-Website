import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * PROOF + PORTFOLIO — Combined trust and showcase section.
 *
 * Part A · Metrics strip     — three proof numbers
 * Part B · Before / After    — Innovate EA real transformation demo
 * Part C · Supporting demos  — Hartley + Aura demo cards
 */

/* ─── Data ─── */
const METRICS = [
  { value: "100%", label: "Conversion-focused builds" },
  { value: "3s",   label: "Average first impression window" },
  { value: "UK",   label: "Estate agents and premium services" },
];

const DEMOS = [
  {
    name: "Hartley Property Group",
    type: "Estate Agent · London",
    desc: "A boutique London property group repositioned as a premium brand.",
    href: "/demos/hartley/index.html",
  },
  {
    name: "Aura Estates",
    type: "Luxury Lettings · Manchester",
    desc: "A luxury lettings agency built for high-net-worth clients.",
    href: "/demos/aura/index.html",
  },
];

/* ─── Panel transition variants ─── */
const panelVariants = {
  enter: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: ease.silk },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: { duration: duration.quick, ease: ease.silk },
  },
};

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export default function ProofPortfolio() {
  const reduced = useReducedMotion();
  const [view, setView] = useState("before");

  return (
    <section
      id="proof-portfolio"
      className="relative w-full bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* Ambient orb */}
      <motion.div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
        animate={reduced ? {} : { x: [0, -30, 20, 0], scale: [1, 1.1, 0.93, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── PART A — METRICS ── */}
      <PartA reduced={reduced} />

      {/* Divider */}
      <div className="border-t border-bone/8" />

      {/* ── PART B — BEFORE / AFTER ── */}
      <PartB view={view} setView={setView} reduced={reduced} />

      {/* Divider */}
      <div className="border-t border-bone/8" />

      {/* ── PART C — DEMO CARDS ── */}
      <PartC reduced={reduced} />
    </section>
  );
}

/* ════════════════════════════════════════════════════
   PART A — PROOF METRICS
════════════════════════════════════════════════════ */
function PartA({ reduced }) {
  return (
    <div className="container-edge py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-bone/10">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.value}
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{
              duration: duration.slow,
              ease: ease.silk,
              delay: 0.1 + i * 0.15,
            }}
            className="flex flex-col items-center text-center px-8 py-8 md:py-4"
          >
            <p className="font-display text-5xl md:text-6xl text-gold leading-none mb-3">
              {m.value}
            </p>
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-bone/60">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   PART B — BEFORE / AFTER
════════════════════════════════════════════════════ */
function PartB({ view, setView, reduced }) {
  return (
    <div className="container-edge py-16 md:py-24">
      {/* Heading */}
      <div className="grid grid-cols-12 gap-8 items-end mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-7">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Real Transformation</span>
            </div>
          </FadeIn>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            From invisible
            <span className="block italic text-gold">to unforgettable.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.15 }}
            className="mt-6 text-bone/60 text-lg leading-relaxed"
          >
            A real Birmingham estate agency. A real result.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.25 }}
          className="col-span-12 md:col-span-5 flex flex-col items-start md:items-end gap-3"
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-bone/40">
            See the difference
          </p>
          <div className="flex items-center gap-0 border border-bone/15 p-1">
            {["before", "after"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setView(opt)}
                className="relative px-6 py-2 text-[0.72rem] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                {view === opt && (
                  <motion.span
                    layoutId="toggle-pill"
                    className="absolute inset-0 bg-gold"
                    transition={{ duration: duration.base, ease: ease.silk }}
                  />
                )}
                <span
                  className={`relative z-10 font-medium ${
                    view === opt ? "text-navy" : "text-bone/50"
                  }`}
                >
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Panel window */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
        className="relative w-full overflow-hidden border border-bone/10"
        style={{ minHeight: "520px" }}
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
      <div className="mt-4 flex items-center justify-between text-[0.65rem] tracking-[0.22em] uppercase text-bone/35">
        <span>Innovate Estate Agents — Birmingham</span>
        <span className={view === "after" ? "text-gold/60" : "text-bone/35"}>
          {view === "after" ? "IntelliSite rebuild" : "Current live site"}
        </span>
      </div>
    </div>
  );
}

/* ─── BEFORE — Innovate EA faithful recreation ─── */
function BeforePanel() {
  const NAV_ITEMS = ["About Us", "Sales", "Lettings", "Land", "Commercial", "Mortgages", "News", "Blog", "Contact"];
  return (
    <div className="w-full" style={{ background: "#1a1a1a", fontFamily: "Arial, sans-serif" }}>
      {/* Nav bar */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: "#111111", borderBottom: "2px solid #cc0000" }}
      >
        {/* Logo */}
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
        {/* Nav links */}
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
        {/* CTA */}
        <div
          className="text-white text-[0.6rem] px-2 py-1 shrink-0 cursor-pointer"
          style={{ background: "#cc0000", whiteSpace: "nowrap" }}
        >
          Log a Repair
        </div>
      </div>

      {/* Hero image area */}
      <div
        className="relative flex flex-col items-center justify-center py-12 md:py-16 text-center px-4"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.62) 0%, rgba(20,20,20,0.85) 100%), linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
          minHeight: "200px",
        }}
      >
        {/* Simulated building photo strip */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(90deg, #333 0px, #444 60px, #333 60px, #222 120px)",
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
          {/* Slide dots */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-2 h-2 rounded-full"
                style={{ background: i === 0 ? "#cc0000" : "#555" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Property search form */}
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

      {/* 4 service boxes */}
      <div className="grid grid-cols-4 gap-px px-4 pb-4" style={{ background: "#1a1a1a" }}>
        {["Instant Valuation", "For Sale", "To Let", "Financial Advice"].map((s) => (
          <div
            key={s}
            className="flex flex-col items-center justify-center py-4 gap-2 cursor-pointer"
            style={{ background: "#222", border: "1px solid #333" }}
          >
            {/* Generic outline icon */}
            <div
              className="w-6 h-6 flex items-center justify-center"
              style={{ border: "1.5px solid #cc0000", borderRadius: "2px" }}
            >
              <span style={{ color: "#cc0000", fontSize: "0.55rem" }}>■</span>
            </div>
            <span className="text-gray-300 text-[0.52rem] text-center leading-tight">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── AFTER — IntelliSite premium rebuild (Stitch design) ─── */
function AfterPanel() {
  const RED   = "#8B1A1A";
  const BG    = "#0d0d0d";
  const BG2   = "#111111";
  const BG3   = "#161616";
  const TEXT  = "#F5F0E8";
  const TEXT50 = "rgba(245,240,232,0.5)";
  const TEXT70 = "rgba(245,240,232,0.7)";
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  const SANS  = "'Manrope', Arial, sans-serif";

  return (
    <div className="w-full" style={{ background: BG, fontFamily: SANS, color: TEXT }}>

      {/* ── NAV ── */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: BG, borderBottom: `1px solid rgba(245,240,232,0.08)` }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: SERIF,
            fontSize: "0.95rem",
            letterSpacing: "0.22em",
            fontVariant: "small-caps",
            color: TEXT,
            fontWeight: 600,
          }}
        >
          INNOVATE
        </span>

        {/* Right nav */}
        <div className="flex items-center gap-5">
          {["Portfolio", "Services", "About"].map((item) => (
            <span
              key={item}
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: TEXT70,
                cursor: "pointer",
              }}
              className="hidden sm:block"
            >
              {item}
            </span>
          ))}
          <div
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: TEXT,
              border: `1px solid ${RED}`,
              padding: "5px 14px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Book Valuation
          </div>
        </div>
      </div>

      {/* ── HERO — two columns ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "200px" }}
      >
        {/* Left — copy */}
        <div
          className="flex flex-col justify-center px-6 py-10 md:py-14"
          style={{ background: BG }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: TEXT50,
              marginBottom: "16px",
              fontFamily: SANS,
            }}
          >
            Established in Birmingham
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: TEXT,
              marginBottom: "14px",
            }}
          >
            Redefining<br />
            Birmingham's<br />
            Finest Residences.
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              lineHeight: 1.7,
              color: TEXT70,
              marginBottom: "20px",
              maxWidth: "300px",
            }}
          >
            Bespoke property advisory for the discerning client. We bridge
            the gap between architectural excellence and strategic investment.
          </p>
          <div
            style={{
              display: "inline-block",
              background: RED,
              color: TEXT,
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "9px 20px",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            View Portfolio
          </div>
        </div>

        {/* Right — real property photo */}
        <div
          className="relative hidden md:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
          }}
        >
          {/* Dark cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.38)" }}
          />
          <div
            className="absolute bottom-4 left-4"
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: TEXT50,
              position: "relative",
              zIndex: 1,
            }}
          >
            Sutton Coldfield · Birmingham
          </div>
        </div>
      </div>

      {/* ── STATS — stacked cards with red left border ── */}
      <div style={{ background: BG2 }}>
        {[
          { stat: "20+",          sub: "Years",         label: "Local Expertise" },
          { stat: "500+",         sub: "Sales",         label: "Proven Track Record" },
          { stat: "Award Winning", sub: "",              label: "Excellence in Service" },
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
            <p
              style={{
                fontFamily: SERIF,
                fontSize: s.stat.length > 6 ? "1.3rem" : "1.8rem",
                fontWeight: 600,
                color: TEXT,
                lineHeight: 1.1,
                marginBottom: "3px",
              }}
            >
              {s.stat}
            </p>
            <p
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: TEXT50,
              }}
            >
              {s.sub ? `${s.sub} — ` : ""}{s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── COLLECTIONS ── */}
      <div
        style={{ background: BG3, padding: "24px 20px" }}
      >
        <p
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: RED,
            marginBottom: "10px",
            fontFamily: SANS,
          }}
        >
          Premium Listings
        </p>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.6rem",
            fontWeight: 600,
            color: TEXT,
            lineHeight: 1.05,
            marginBottom: "12px",
          }}
        >
          Curated Collections.
        </p>
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "0.78rem",
            color: TEXT70,
            lineHeight: 1.6,
            marginBottom: "16px",
            maxWidth: "340px",
          }}
        >
          "Our approach treats every listing as a masterpiece. We specialise
          in properties that define Birmingham's skyline and suburban heritage."
        </p>
        {/* Feature points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
          {[
            "Architectural Integrity Check",
            "Discreet Off-Market Access",
            "Bespoke Interior Staging",
          ].map((pt) => (
            <div key={pt} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "16px",
                  height: "1px",
                  background: RED,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.65rem", color: TEXT70, letterSpacing: "0.04em" }}>
                {pt}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: TEXT,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Explore Assets
          <span style={{ color: RED }}>→</span>
        </div>
      </div>

      {/* ── PROPERTY IMAGE STRIP ── */}
      <div className="grid grid-cols-2 gap-px" style={{ background: "#222" }}>
        {/* Image 1 — interior */}
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

        {/* Image 2 — exterior, with featured tag */}
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
          {/* Featured label */}
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-2"
            style={{ background: RED }}
          >
            <p
              style={{
                fontSize: "0.48rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.7)",
                marginBottom: "1px",
              }}
            >
              Featured Asset
            </p>
            <div className="flex items-center justify-between">
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: "0.75rem",
                  color: TEXT,
                  fontWeight: 600,
                }}
              >
                Sutton Coldfield Manor
              </p>
              <span style={{ color: TEXT, fontSize: "0.75rem" }}>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div
        className="text-center py-6 px-4"
        style={{ background: BG, borderTop: "1px solid rgba(245,240,232,0.06)" }}
      >
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.1rem",
            fontVariant: "small-caps",
            letterSpacing: "0.3em",
            color: TEXT,
            fontWeight: 600,
            marginBottom: "6px",
          }}
        >
          INNOVATE
        </p>
        <p
          style={{
            fontSize: "0.52rem",
            color: TEXT50,
            letterSpacing: "0.06em",
            marginBottom: "12px",
          }}
        >
          Birmingham's Bespoke Architectural Estate Agency
        </p>
        <div className="flex items-center justify-center gap-6">
          {["Portfolio", "Services", "Contact"].map((l) => (
            <span
              key={l}
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: TEXT50,
                cursor: "pointer",
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════
   PART C — SUPPORTING DEMOS
════════════════════════════════════════════════════ */
function PartC({ reduced }) {
  return (
    <div className="container-edge py-16 md:py-20">
      <FadeIn className="mb-12">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-bone/40">
          More live builds
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {DEMOS.map((demo, i) => (
          <DemoCard key={demo.name} demo={demo} index={i} reduced={reduced} />
        ))}
      </div>
    </div>
  );
}

function DemoCard({ demo, index, reduced }) {
  return (
    <motion.a
      href={demo.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.1 + index * 0.1,
      }}
      whileHover="hover"
      className="group relative block"
    >
      {/* Gold top border — brightens on hover */}
      <motion.span
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0.4 }}
        transition={{ duration: duration.base, ease: ease.silk }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gold"
        aria-hidden="true"
      />

      <div
        className="relative p-8 md:p-10 border border-t-0 border-bone/10 transition-colors duration-300"
        style={{ background: "rgba(13,27,42,0.8)" }}
      >
        {/* Hover background lift */}
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: duration.base, ease: ease.silk }}
          className="absolute inset-0 bg-white/[0.02] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative">
          {/* Type tag */}
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold/70 mb-4">
            {demo.type}
          </p>
          {/* Name */}
          <h3 className="font-display text-2xl md:text-3xl text-bone leading-tight mb-4">
            {demo.name}
          </h3>
          {/* Gold hairline */}
          <motion.span
            variants={{ hover: { scaleX: 1, opacity: 1 } }}
            initial={{ scaleX: 0.5, opacity: 0.4 }}
            transition={{ duration: duration.base, ease: ease.silk }}
            className="block h-[1px] w-10 bg-gold mb-5 origin-left"
            aria-hidden="true"
          />
          {/* Description */}
          <p className="text-bone/60 text-sm leading-relaxed mb-8">{demo.desc}</p>
          {/* Ghost CTA */}
          <span className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.2em] uppercase border border-gold/40 text-gold/80 group-hover:border-gold group-hover:text-gold px-5 py-2.5 transition-colors duration-300">
            View Demo <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>

      {/* Card lift on hover */}
      <motion.div
        variants={{ hover: { y: -4 } }}
        transition={{ duration: duration.base, ease: ease.silk }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
    </motion.a>
  );
}
