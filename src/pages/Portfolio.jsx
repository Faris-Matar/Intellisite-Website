import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * PORTFOLIO — three-section showcase.
 *
 *   §1  Page Hero      — 60vh, staggered fade-up on load
 *   §2  Demo Grid      — three cards (Hartley · Aura · The Loft Converter)
 *   §3  Closing CTA    — Book a Call + Get In Touch
 */

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

/* ── Demo card data ── */
const DEMOS = [
  {
    name:   "Hartley & Co Kitchens",
    tag:    "BESPOKE KITCHENS · SOUTH LONDON",
    desc:   "A bespoke kitchen company repositioned as a premium digital brand.",
    href:   "/demos/hartley/index.html",
    btn:    "View Demo",
    newTab: true,
  },
  {
    name:   "Aura Bathrooms",
    tag:    "LUXURY BATHROOMS · MANCHESTER",
    desc:   "A luxury bathroom design company built for high-end residential clients.",
    href:   "/demos/aura/index.html",
    btn:    "View Demo",
    newTab: true,
  },
  {
    name:   "The Loft Converter",
    tag:    "LOFT CONVERSIONS · BIRMINGHAM",
    desc:   "A specialist loft conversion company showcasing £30K to £60K transformations.",
    href:   "/demos/loft-converter/index.html",
    btn:    "View Demo",
    newTab: true,
  },
];

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export default function Portfolio() {
  const reduced = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Our Work — InteliSite Web Design Portfolio</title>
        <meta name="description" content="See InteliSite's web design portfolio. Real transformations for UK luxury home improvement businesses including bespoke kitchens, luxury bathrooms, and loft conversions. Before and after website redesigns that convert." />
        <meta name="keywords" content="web design portfolio UK, luxury home improvement business website redesign, bespoke kitchen website design, luxury bathroom website, loft conversion website, before after website design" />
        <link rel="canonical" href="https://www.intelisite.co.uk/portfolio" />
        <meta property="og:title" content="Our Work — InteliSite Web Design Portfolio" />
        <meta property="og:description" content="Real website transformations for UK luxury home improvement businesses. See the before and after results." />
        <meta property="og:url" content="https://www.intelisite.co.uk/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.intelisite.co.uk/og-image.jpg" />
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
                consultations.
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
          §2  DEMO SHOWCASE GRID
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
          §3  CLOSING CTA
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
   DEMO CARD — used in §2
════════════════════════════════════════════════════ */
function DemoCard({ demo, index, reduced }) {
  return (
    <a
      href={demo.href}
      target={demo.newTab ? "_blank" : undefined}
      rel={demo.newTab ? "noreferrer" : undefined}
      className="block h-full"
      style={{ textDecoration: "none" }}
    >
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
              <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
