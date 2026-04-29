import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * SERVICES — five-section premium offering page.
 *
 *   §1  Page Hero          — 60vh, staggered fade-up on load
 *   §2  Core Offering      — inclusions list + four client type cards
 *   §3  Process Preview    — three steps + link to homepage process
 *   §4  Investment         — single card, features, pricing note, CTA
 *   §5  Closing Statement  — single serif headline, no CTA
 */

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

/* ── Inclusion items ── */
const INCLUSIONS = [
  "Cinematic hero section with motion",
  "Full narrative homepage flow",
  "Premium mobile experience",
  "Framer Motion animations throughout",
  "Conversion-optimised copy structure",
  "Contact and booking integration",
  "Performance optimised build",
  "30 days post-launch support",
];

/* ── Client type cards ── */
const CLIENT_TYPES = [
  {
    title: "Estate Agents",
    desc:  "Independent and boutique agents who need to stand apart from Rightmove and the high street chains.",
  },
  {
    title: "Property Developers",
    desc:  "Development companies launching new schemes who need a site that sells the vision before the build is complete.",
  },
  {
    title: "Luxury Service Businesses",
    desc:  "Consultants, advisors, and premium service providers where perception and trust determine whether someone picks up the phone.",
  },
  {
    title: "High Ticket Professionals",
    desc:  "Any business where the website is the first impression and a poor one costs real revenue.",
  },
];

/* ── Process steps ── */
const STEPS = [
  {
    n:     "01",
    title: "Discovery Call",
    body:  "We review your current website before we even speak.",
  },
  {
    n:     "02",
    title: "Design and Build",
    body:  "Section by section. Approved at every stage.",
  },
  {
    n:     "03",
    title: "Launch",
    body:  "Live, fast, and ready to convert.",
  },
];

/* ── Investment feature columns ── */
const FEATURES = [
  ["Custom design", "Full homepage build", "Mobile optimised"],
  ["Framer Motion animations", "Booking integration", "Performance optimised"],
  ["30 day support", "Launch ready", "Built to convert"],
];

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export default function Services() {
  const reduced = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Web Design Services — IntelliSite</title>
        <meta name="description" content="Premium web design services for UK estate agents and luxury service businesses. Cinematic, conversion-led websites built to win instructions and generate enquiries." />
        <meta name="keywords" content="web design services UK, estate agent website design, premium web design agency UK, luxury website design" />
        <link rel="canonical" href="https://www.intellisite.co.uk/services" />
        <meta property="og:title" content="Web Design Services — IntelliSite" />
        <meta property="og:description" content="Premium web design services for UK estate agents. Cinematic, conversion-led websites built to win instructions." />
        <meta property="og:url" content="https://www.intellisite.co.uk/services" />
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
        {/* Ambient gold orb */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: "620px",
              height: "620px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 50%, transparent 70%)",
            }}
            animate={
              reduced
                ? {}
                : { scale: [1, 1.12, 0.94, 1], x: [0, -30, 22, 0], y: [0, 20, -24, 0] }
            }
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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
              <span className="eyebrow">What We Build</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.heroLong, ease: ease.silk, delay: 0.2 }}
              className="font-display text-display-lg text-bone"
              style={{ lineHeight: 1.05 }}
            >
              Premium websites that
              <span
                className="block italic"
                style={{ color: "rgba(201,168,76,0.95)" }}
              >
                convert.
              </span>
            </motion.h1>

            {/* Supporting */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.38 }}
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Every IntelliSite project is cinematic, conversion-led, and built
              specifically for businesses that rely on trust and first impressions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §2  CORE OFFERING
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Background orb — bottom left */}
        <motion.div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.045) 0%, transparent 65%)",
          }}
          animate={reduced ? {} : { x: [0, 28, -18, 0], y: [0, -22, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          aria-hidden="true"
        />

        <div className="container-edge relative">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.base, ease: ease.silk }}
            className="flex items-center mb-8"
          >
            <span className="hairline" />
            <span className="eyebrow">The Signature Site</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
            className="font-display text-display-md text-bone mb-6"
            style={{ lineHeight: 1.08 }}
          >
            One product. Done properly.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.16 }}
            className="font-sans text-lg leading-relaxed mb-16 md:mb-20"
            style={{ color: "rgba(232,228,218,0.6)", maxWidth: "48rem" }}
          >
            We do not offer ten different packages. We build one thing — a premium,
            conversion-led website — and we build it to a standard most agencies
            cannot match.
          </motion.p>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">

            {/* LEFT — What is included */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk }}
            >
              <p
                className="font-sans mb-8"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(232,228,218,0.4)",
                }}
              >
                What is included
              </p>

              <ul className="space-y-5" role="list">
                {INCLUSIONS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: reduced ? 0 : -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: duration.base,
                      ease: ease.silk,
                      delay: 0.05 + i * 0.06,
                    }}
                    className="flex items-start gap-4"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: "block",
                        flexShrink: 0,
                        marginTop: "0.6em",
                        width: "1.5rem",
                        height: "1px",
                        background: "rgba(201,168,76,0.65)",
                      }}
                    />
                    <span
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(232,228,218,0.78)" }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT — Who it is for */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.12 }}
            >
              <div className="flex items-center mb-8">
                <span className="hairline" />
                <span className="eyebrow">Built For</span>
              </div>

              <div className="space-y-4">
                {CLIENT_TYPES.map((card, i) => (
                  <ClientCard key={card.title} card={card} index={i} reduced={reduced} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3  PROCESS PREVIEW
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Accent orb — top right */}
        <motion.div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
          }}
          animate={reduced ? {} : { x: [0, -20, 14, 0], y: [0, 24, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          aria-hidden="true"
        />

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
            <span className="eyebrow">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
            className="font-display text-display-md text-bone mb-5"
            style={{ lineHeight: 1.08 }}
          >
            Simple. Structured. Premium.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.16 }}
            className="font-sans text-base leading-relaxed mb-14 md:mb-16"
            style={{ color: "rgba(232,228,218,0.6)", maxWidth: "36rem" }}
          >
            Six steps from first call to live website.
            No surprises, no scope creep, no delays.
          </motion.p>

          {/* Three-step strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(232,228,218,0.06)" }}>
            {STEPS.map((step, i) => (
              <ProcessStep key={step.n} step={step} index={i} reduced={reduced} />
            ))}
          </div>

          {/* See full process link */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.base, ease: ease.silk, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/#process"
              className="font-sans inline-flex items-center gap-2 transition-colors"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
                textDecoration: "none",
                transitionDuration: "200ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(201,168,76,1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(201,168,76,0.7)"; }}
            >
              See the full process
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §4  INVESTMENT
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        <div className="container-edge relative">
          {/* Heading */}
          <div className="text-center mb-14 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.base, ease: ease.silk }}
              className="flex items-center justify-center mb-8"
            >
              <span className="hairline" />
              <span className="eyebrow">Investment</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: reduced ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
              className="font-display text-display-md text-bone mb-6"
              style={{ lineHeight: 1.08 }}
            >
              Priced for businesses serious about growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.16 }}
              className="font-sans text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Every project is scoped individually based on your business and your
              goals. We discuss investment openly on the discovery call — no hidden
              costs, no surprises.
            </motion.p>
          </div>

          {/* ── Investment card ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.12 }}
            className="max-w-3xl mx-auto"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(201,168,76,0.15)",
              padding: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            {/* Product name */}
            <p
              className="font-display text-bone text-center mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}
            >
              Signature Site
            </p>

            {/* Subtle divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(201,168,76,0.12)",
                marginBottom: "2.5rem",
              }}
              aria-hidden="true"
            />

            {/* Feature columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10">
              {FEATURES.map((col, ci) => (
                <ul key={ci} className="space-y-3" role="list">
                  {col.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        style={{
                          display: "block",
                          flexShrink: 0,
                          marginTop: "0.6em",
                          width: "1rem",
                          height: "1px",
                          background: "rgba(201,168,76,0.6)",
                        }}
                      />
                      <span
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: "rgba(232,228,218,0.7)" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Subtle divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(201,168,76,0.1)",
                marginBottom: "2rem",
              }}
              aria-hidden="true"
            />

            {/* Pricing note */}
            <div className="text-center">
              <p
                className="font-display italic mb-2"
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(201,168,76,0.85)",
                  lineHeight: 1.4,
                }}
              >
                Priced per project. Discussed openly on the discovery call.
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "rgba(232,228,218,0.4)",
                }}
              >
                No hidden costs &middot; No surprises
              </p>
            </div>
          </motion.div>

          {/* CTA below card */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.22 }}
            className="flex justify-center mt-10"
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide uppercase transition-all"
              style={{
                padding: "1rem 2rem",
                border: "1px solid rgba(201,168,76,0.55)",
                color: "rgba(201,168,76,0.9)",
                background: "transparent",
                transitionDuration: "220ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.07)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,1)";
                e.currentTarget.style.color = "rgba(201,168,76,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)";
                e.currentTarget.style.color = "rgba(201,168,76,0.9)";
              }}
            >
              <span>Book a Free Discovery Call</span>
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §5  CLOSING STATEMENT
          ══════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease: ease.silk }}
        className="relative w-full py-scene-y bg-navy text-center overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Faint centered glow */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: "700px",
              height: "350px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%)",
            }}
            animate={reduced ? {} : { scale: [1, 1.06, 0.97, 1], x: [0, 16, -12, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-edge relative">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
              className="font-display text-bone mb-5"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.75rem)",
                lineHeight: 1.15,
              }}
            >
              The website is the first conversation
              <span className="block">your business has with every new client.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
              className="font-sans text-base"
              style={{ color: "rgba(232,228,218,0.5)" }}
            >
              Make it count.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   CLIENT TYPE CARD — §2 right column
════════════════════════════════════════════════════ */
function ClientCard({ card, index, reduced }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.base,
        ease: ease.silk,
        delay: 0.08 + index * 0.1,
      }}
      className="group relative transition-all"
      style={{
        paddingLeft: "1.25rem",
        paddingTop: "0.85rem",
        paddingBottom: "0.85rem",
        paddingRight: "0.5rem",
        borderLeft: "1px solid rgba(232,228,218,0.18)",
        transitionDuration: "300ms",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = "rgba(201,168,76,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = "rgba(232,228,218,0.18)";
      }}
    >
      <h3
        className="font-display text-bone mb-1.5"
        style={{ fontSize: "1.1rem", lineHeight: 1.2 }}
      >
        {card.title}
      </h3>
      <p
        className="font-sans leading-relaxed"
        style={{ fontSize: "0.85rem", color: "rgba(232,228,218,0.6)" }}
      >
        {card.desc}
      </p>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════
   PROCESS STEP — §3 three-step strip
════════════════════════════════════════════════════ */
function ProcessStep({ step, index, reduced }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.1 + index * 0.12,
      }}
      className="relative overflow-hidden"
      style={{
        background: "#0D1B2A",
        padding: "2rem 2.25rem",
        borderTop: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      {/* Decorative large numeral — gold/10 */}
      <span
        className="absolute font-display select-none pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-0.75rem",
          right: "1rem",
          fontSize: "5.5rem",
          lineHeight: 1,
          color: "rgba(201,168,76,0.07)",
          fontWeight: 600,
        }}
      >
        {step.n}
      </span>

      {/* Gold italic number — foreground */}
      <p
        className="font-display italic mb-5"
        style={{ fontSize: "1.15rem", color: "rgba(201,168,76,0.75)" }}
      >
        {step.n}
      </p>

      {/* Title */}
      <h3
        className="font-display text-bone mb-3"
        style={{ fontSize: "1.5rem", lineHeight: 1.15 }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="font-sans leading-relaxed"
        style={{ fontSize: "0.875rem", color: "rgba(232,228,218,0.6)" }}
      >
        {step.body}
      </p>
    </motion.div>
  );
}
