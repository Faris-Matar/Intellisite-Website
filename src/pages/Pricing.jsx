import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * PRICING — transparent pricing page.
 *
 *   §1  Page Hero        — 50vh, centered, staggered fade-up on load
 *   §2  Pricing Cards    — Starter · Growth (popular) · Premium, 3-col desktop
 *   §3  Extras           — 4 optional add-on cards, 2×2 grid
 *   §4  Payment Terms    — 50/50 split, guarantee note
 *   §5  Closing CTA      — centered, book a call
 */

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

/* ── Pricing tiers ── */
const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "£1,999",
    tagline: "Perfect for well established businesses ready to modernize.",
    popular: false,
    features: [
      "Up to 5 page custom website",
      "Mobile optimised design",
      "SEO Foundation",
      "Contact form and Google Maps integration",
      "Professional copywriting",
      "Stock photography selection",
      "30 day post launch support",
      "2 rounds of revision",
    ],
    bestFor: "Best for: Single location businesses with clear service offerings",
    ctaVariant: "ghost",
  },
  {
    id: "growth",
    name: "Growth",
    price: "£3,499",
    tagline: "For multiple service businesses targeting high value clients.",
    popular: true,
    features: [
      "Up to 10 page website",
      "Content management system with easy self editing",
      "Portfolio and Gallery section with filtering",
      "Blog setup for SEO content",
      "Advanced animations and interactions",
      "Lead capture optimisation",
      "Google Analytics integration",
      "60 days post launch support",
      "3 rounds of revisions",
    ],
    bestFor: "Best for: Multiple service businesses targeting high value clients",
    ctaVariant: "filled",
  },
  {
    id: "premium",
    name: "Premium",
    price: "£4,999",
    tagline: "The complete solution for luxury brands.",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom photography coordination",
      "Third party integrations",
      "Conversion rate optimisation",
      "Competitor analysis and positioning",
      "Priority support queue",
      "90 days post launch support and maintenance plan",
      "Unlimited revisions",
    ],
    bestFor: "Best for: Premium brands charging £30K+ projects",
    ctaVariant: "ghost",
  },
];

/* ── Extras ── */
const EXTRAS = [
  {
    title: "Website Maintenance",
    price: "£150/month",
    desc: "Ongoing updates, security checks, and performance monitoring.",
  },
  {
    title: "SEO Content",
    price: "£300/month",
    desc: "One optimised blog post per month to build your search rankings.",
  },
  {
    title: "Video Production",
    price: "£1,199",
    desc: "30 to 60 second cinematic brand video for your hero section.",
  },
  {
    title: "Paid Advertising",
    price: "£500/month + ad spend",
    desc: "Managed Google or Meta campaigns driving leads to your new site.",
  },
];

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export default function Pricing() {
  const reduced = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Pricing — IntelliSite Web Design</title>
        <meta
          name="description"
          content="Transparent web design pricing for UK luxury home improvement businesses. Packages from £1,999. Custom websites for bespoke kitchens, bathrooms, loft conversions and premium home services."
        />
        <meta
          name="keywords"
          content="web design pricing UK, luxury home improvement website cost, bespoke kitchen website price, bathroom website design cost, loft conversion website pricing, premium web design packages UK"
        />
        <link rel="canonical" href="https://www.intellisite.co.uk/pricing" />
        <meta property="og:title" content="Pricing — IntelliSite Web Design" />
        <meta
          property="og:description"
          content="Transparent web design pricing for UK luxury home improvement businesses. Packages from £1,999."
        />
        <meta property="og:url" content="https://www.intellisite.co.uk/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.intellisite.co.uk/og-image.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ══════════════════════════════════════════
          §1  PAGE HERO
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full flex items-center justify-center bg-navy overflow-hidden"
        style={{ minHeight: "50vh", paddingTop: "5rem", paddingBottom: "4rem" }}
      >
        {/* Ambient gold orb */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: "580px",
              height: "580px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 50%, transparent 70%)",
            }}
            animate={
              reduced
                ? {}
                : { scale: [1, 1.1, 0.95, 1], x: [0, -28, 20, 0], y: [0, 18, -22, 0] }
            }
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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
              <span className="eyebrow">Investment</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.heroLong, ease: ease.silk, delay: 0.2 }}
              className="font-display text-display-lg text-bone"
              style={{ lineHeight: 1.05 }}
            >
              Transparent pricing for
              <span className="block italic" style={{ color: "rgba(232,228,218,0.85)" }}>
                premium businesses.
              </span>
            </motion.h1>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.38 }}
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Choose the package that fits your growth goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §2  PRICING CARDS
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Background orb */}
        <motion.div
          className="absolute -top-24 right-0 pointer-events-none"
          style={{
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
          }}
          animate={reduced ? {} : { x: [0, -22, 16, 0], y: [0, 28, -18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          aria-hidden="true"
        />

        <div className="container-edge relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-start">
            {TIERS.map((tier, i) => (
              <PricingCard key={tier.id} tier={tier} index={i} reduced={reduced} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3  EXTRAS
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        <div className="container-edge relative">
          {/* Heading */}
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Optional Add-Ons</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
            className="font-display text-display-md text-bone mb-14 md:mb-16"
            style={{ lineHeight: 1.08 }}
          >
            Extend your package.
          </motion.h2>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {EXTRAS.map((extra, i) => (
              <ExtraCard key={extra.title} extra={extra} index={i} reduced={reduced} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §4  PAYMENT TERMS
          ══════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease: ease.silk }}
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Faint centered glow */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            style={{
              width: "700px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="container-edge relative text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center mb-10">
            <span className="hairline" />
            <span className="eyebrow">Payment Terms</span>
          </div>

          {/* Two terms */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mb-12">
            <div className="md:px-16">
              <p
                className="font-display italic text-bone"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.2 }}
              >
                50% deposit to begin
              </p>
            </div>

            {/* Divider — desktop only */}
            <span
              aria-hidden="true"
              className="hidden md:block h-14 w-px shrink-0"
              style={{ background: "rgba(201,168,76,0.2)" }}
            />

            <div className="md:px-16">
              <p
                className="font-display italic text-bone"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.2 }}
              >
                50% on completion
              </p>
            </div>
          </div>

          {/* Guarantee note */}
          <p
            className="font-sans max-w-md mx-auto"
            style={{ fontSize: "0.82rem", color: "rgba(232,228,218,0.4)", lineHeight: 1.6 }}
          >
            All projects include a 14 day money back guarantee if design work has not started.
          </p>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          §5  CLOSING CTA
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
              width: "600px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%)",
            }}
            animate={reduced ? {} : { scale: [1, 1.06, 0.97, 1], x: [0, 14, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-edge relative">
          <div className="max-w-2xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center justify-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Not Sure Which Package?</span>
            </div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.08 }}
              className="font-display text-bone mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              Let&rsquo;s figure it out together.
            </motion.h2>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.16 }}
              className="font-sans text-base leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Book a free 15 minute discovery call. We will review your current site,
              discuss your goals, and recommend the best fit. No pressure, no obligation.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.24 }}
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
        </div>
      </motion.section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   PRICING CARD — §2
════════════════════════════════════════════════════ */
function PricingCard({ tier, index, reduced }) {
  const isPopular = tier.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.08 + index * 0.12,
      }}
      className="relative flex flex-col"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: isPopular
          ? "1px solid rgba(201,168,76,0.4)"
          : "1px solid rgba(201,168,76,0.12)",
        borderRadius: "2px",
        padding: "2.5rem",
        boxShadow: isPopular ? "0 0 60px rgba(201,168,76,0.06)" : "none",
      }}
    >
      {/* Most Popular badge */}
      {isPopular && (
        <div
          className="absolute left-1/2 font-sans font-medium uppercase tracking-wide"
          style={{
            top: "-13px",
            transform: "translateX(-50%)",
            background: "rgba(201,168,76,1)",
            color: "#0D1B2A",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            padding: "3px 12px",
            borderRadius: "20px",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Package name */}
      <p
        className="font-display text-bone mb-3"
        style={{ fontSize: "1.5rem", lineHeight: 1.1 }}
      >
        {tier.name}
      </p>

      {/* Price */}
      <p
        className="font-display mb-4"
        style={{ fontSize: "2.5rem", lineHeight: 1, color: "rgba(201,168,76,0.95)" }}
      >
        {tier.price}
      </p>

      {/* Tagline */}
      <p
        className="font-sans mb-8"
        style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(232,228,218,0.6)" }}
      >
        {tier.tagline}
      </p>

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(201,168,76,0.1)",
          marginBottom: "1.75rem",
        }}
      />

      {/* Features list */}
      <ul className="space-y-3 flex-1 mb-8" role="list">
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              style={{
                display: "block",
                flexShrink: 0,
                marginTop: "0.58em",
                width: "1rem",
                height: "1px",
                background: "rgba(201,168,76,0.7)",
              }}
            />
            <span
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(232,228,218,0.75)" }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* Best for note */}
      <p
        className="font-sans italic mb-8"
        style={{ fontSize: "0.78rem", lineHeight: 1.5, color: "rgba(232,228,218,0.4)" }}
      >
        {tier.bestFor}
      </p>

      {/* CTA button — full width */}
      {tier.ctaVariant === "filled" ? (
        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide uppercase transition-all"
          style={{
            padding: "0.9rem 1.5rem",
            background: "rgba(201,168,76,1)",
            color: "#0D1B2A",
            border: "1px solid rgba(201,168,76,1)",
            transitionDuration: "220ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#dcbe5c";
            e.currentTarget.style.borderColor = "#dcbe5c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(201,168,76,1)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,1)";
          }}
        >
          Book a Discovery Call
        </a>
      ) : (
        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide uppercase transition-all"
          style={{
            padding: "0.9rem 1.5rem",
            background: "transparent",
            color: "rgba(201,168,76,0.9)",
            border: "1px solid rgba(201,168,76,0.5)",
            transitionDuration: "220ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(201,168,76,0.07)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,1)";
            e.currentTarget.style.color = "rgba(201,168,76,1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
            e.currentTarget.style.color = "rgba(201,168,76,0.9)";
          }}
        >
          Book a Discovery Call
        </a>
      )}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════
   EXTRA CARD — §3
════════════════════════════════════════════════════ */
function ExtraCard({ extra, index, reduced }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.08 + index * 0.1,
      }}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(201,168,76,0.08)",
        padding: "1.75rem 2rem",
        transitionProperty: "border-color",
        transitionDuration: "250ms",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)";
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className="font-display text-bone"
          style={{ fontSize: "1.15rem", lineHeight: 1.2 }}
        >
          {extra.title}
        </h3>
        <span
          className="font-sans font-medium shrink-0"
          style={{ fontSize: "0.9rem", color: "rgba(201,168,76,0.9)" }}
        >
          {extra.price}
        </span>
      </div>
      <p
        className="font-sans leading-relaxed"
        style={{ fontSize: "0.85rem", color: "rgba(232,228,218,0.5)" }}
      >
        {extra.desc}
      </p>
    </motion.div>
  );
}
