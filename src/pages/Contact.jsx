import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * CONTACT — premium four-section layout.
 *
 *   §1  Page Hero      — full viewport, centered, staggered fade-up on load
 *   §2  Two Column     — Book a Call (left) + Send a Message form (right)
 *   §3  Details Strip  — Discovery Call · Email · Based In
 *   §4  Closing Line   — single serif headline, no CTA
 */

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

const BULLETS = [
  "Free website audit before the call",
  "Clear pricing discussed upfront",
  "No obligation to proceed",
];

/* ─────────────────────────────────────────── */

export default function Contact() {
  const reduced = useReducedMotion();
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Helmet>
        <title>Get In Touch — IntelliSite Web Design</title>
        <meta name="description" content="Book a free 15-minute discovery call with IntelliSite. We will audit your current website before we speak and come prepared with specific recommendations." />
        <meta name="keywords" content="contact web design agency UK, book web design consultation, free website audit UK" />
        <link rel="canonical" href="https://www.intellisite.co.uk/contact" />
        <meta property="og:title" content="Get In Touch — IntelliSite Web Design" />
        <meta property="og:description" content="Book a free 15-minute discovery call. We audit your website before we even speak." />
        <meta property="og:url" content="https://www.intellisite.co.uk/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.intellisite.co.uk/og-image.jpg" />
      </Helmet>

      {/* ══════════════════════════════════════════
          §1  PAGE HERO
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center bg-navy overflow-hidden"
        style={{ paddingTop: "5rem" }} /* clear fixed navbar */
      >
        {/* Ambient gold orb */}
        <div
          className="absolute pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: "680px",
              height: "680px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 45%, transparent 70%)",
            }}
            animate={
              reduced
                ? {}
                : {
                    scale: [1, 1.14, 0.93, 1.05, 1],
                    x: [0, 36, -28, 18, 0],
                    y: [0, -22, 32, -16, 0],
                  }
            }
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Secondary accent orb — upper right */}
        <motion.div
          className="absolute top-16 right-12 pointer-events-none"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.012) 0%, transparent 65%)",
          }}
          animate={reduced ? {} : { x: [0, -18, 14, 0], y: [0, 22, -16, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="container-edge relative text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease: ease.silk, delay: 0.12 }}
              className="flex items-center justify-center mb-8"
            >
              <span className="hairline" />
              <span className="eyebrow">Get In Touch</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.heroLong, ease: ease.silk, delay: 0.22 }}
              className="font-display text-display-lg text-bone"
              style={{ lineHeight: 1.05 }}
            >
              Let&rsquo;s build something
              <span className="block italic" style={{ color: "rgba(201,168,76,0.95)" }}>
                worth talking about.
              </span>
            </motion.h1>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.42 }}
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(232,228,218,0.6)" }}
            >
              Book a free 15-minute discovery call or send us a message.
              We respond within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §2  TWO COLUMN — BOOK + FORM
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full py-scene-y bg-navy overflow-hidden"
        style={{ borderTop: "1px solid rgba(232,228,218,0.05)" }}
      >
        {/* Faint background orb */}
        <motion.div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
          }}
          animate={reduced ? {} : { x: [0, 24, -16, 0], y: [0, -20, 28, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          aria-hidden="true"
        />

        <div className="container-edge relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">

            {/* ── LEFT: Book a Call ── */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk }}
            >
              <div className="flex items-center mb-8">
                <span className="hairline" />
                <span className="eyebrow">Fastest Route</span>
              </div>

              <h2
                className="font-display text-bone leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
              >
                Book a discovery call
              </h2>

              <p
                className="leading-relaxed mb-8"
                style={{ color: "rgba(232,228,218,0.6)" }}
              >
                15 minutes. No pressure. We will review your current website
                before the call and come prepared with specific recommendations.
              </p>

              {/* Bullet list */}
              <ul className="space-y-4 mb-10" role="list">
                {BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
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
                      style={{ color: "rgba(232,228,218,0.75)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Calendly CTA — gold ghost, full width on mobile */}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 font-sans text-sm font-medium tracking-wide uppercase w-full sm:w-auto transition-all"
                style={{
                  padding: "1rem 1.75rem",
                  border: "1px solid rgba(201,168,76,0.6)",
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
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
                  e.currentTarget.style.color = "rgba(201,168,76,0.9)";
                }}
              >
                <span>Book Your Free Call</span>
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* ── RIGHT: Send a Message ── */}
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk, delay: 0.14 }}
            >
              <div className="flex items-center mb-8">
                <span className="hairline" />
                <span className="eyebrow">Prefer To Write?</span>
              </div>

              <h2
                className="font-display text-bone leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
              >
                Send us a message
              </h2>

              {sent ? (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration.base, ease: ease.silk }}
                  style={{ paddingTop: "2rem" }}
                >
                  <p
                    className="font-display italic leading-snug"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "rgba(201,168,76,0.9)",
                    }}
                  >
                    Thank you. We will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate>
                  <ContactField
                    id="cf-name"
                    label="Full Name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <ContactField
                    id="cf-business"
                    label="Business Name"
                    name="business"
                    placeholder="Your business"
                  />
                  <ContactField
                    id="cf-email"
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                  <ContactField
                    id="cf-website"
                    label="Website URL"
                    name="website"
                    placeholder="your current website"
                  />
                  <ContactField
                    id="cf-message"
                    label="Message"
                    name="message"
                    placeholder="Tell us about your business and what you are looking to achieve"
                    textarea
                    rows={4}
                  />

                  {/* Submit */}
                  <div style={{ marginTop: "2rem" }}>
                    <button
                      type="submit"
                      className="w-full font-sans text-sm font-medium tracking-wide uppercase transition-colors"
                      style={{
                        padding: "1rem 1.75rem",
                        background: "rgba(201,168,76,1)",
                        color: "#0D1B2A",
                        border: "none",
                        cursor: "pointer",
                        transitionDuration: "220ms",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#dcbe5c";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(201,168,76,1)";
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3  CONTACT DETAILS STRIP
          ══════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: reduced ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease: ease.silk }}
        className="relative w-full"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(232,228,218,0.07)",
          borderBottom: "1px solid rgba(232,228,218,0.07)",
        }}
      >
        <div className="container-edge">
          <div
            className="flex flex-col md:flex-row md:items-stretch"
            style={{ minHeight: "6rem" }}
          >
            <StripItem
              label="Discovery Call"
              value="15 min · Free · No obligation"
              href={CALENDLY}
              newTab
            />
            {/* Divider */}
            <div
              aria-hidden="true"
              className="hidden md:block self-stretch"
              style={{ width: "1px", background: "rgba(232,228,218,0.08)", flexShrink: 0 }}
            />
            <StripItem
              label="Email"
              value="hello@intellisite.co.uk"
              href="mailto:hello@intellisite.co.uk"
            />
            {/* Divider */}
            <div
              aria-hidden="true"
              className="hidden md:block self-stretch"
              style={{ width: "1px", background: "rgba(232,228,218,0.08)", flexShrink: 0 }}
            />
            <StripItem
              label="Based In"
              value="United Kingdom"
            />
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          §4  CLOSING LINE
          ══════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease: ease.silk }}
        className="relative w-full py-scene-y bg-navy text-center overflow-hidden"
      >
        {/* Very faint centered orb */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            style={{
              width: "600px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-edge relative">
          <div className="max-w-2xl mx-auto">
            <h2
              className="font-display text-bone leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Your website should be working as hard as you do.
            </h2>
            <p
              className="font-sans text-base"
              style={{ color: "rgba(232,228,218,0.5)" }}
            >
              Most are not. Let us change that.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}

/* ─────────────────────────────────────────── */
/*  Sub-components                              */
/* ─────────────────────────────────────────── */

/**
 * ContactField — minimal underline-only input / textarea.
 * Focus transitions bottom border from bone/20 → gold.
 * No border-radius. Generous vertical spacing between fields.
 */
function ContactField({
  id,
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
  rows = 4,
  required = false,
}) {
  const fieldStyle = {
    display: "block",
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(232,228,218,0.2)",
    borderRadius: 0,
    outline: "none",
    padding: "0.65rem 0",
    fontSize: "0.92rem",
    color: "rgba(232,228,218,0.85)",
    fontFamily: "inherit",
    transitionProperty: "border-color",
    transitionDuration: "220ms",
    resize: textarea ? "none" : undefined,
  };

  const handleFocus = (e) => {
    e.target.style.borderBottomColor = "rgba(201,168,76,0.8)";
  };
  const handleBlur = (e) => {
    e.target.style.borderBottomColor = "rgba(232,228,218,0.2)";
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: '"Manrope", sans-serif',
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(232,228,218,0.5)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
        {required && (
          <span
            aria-hidden="true"
            style={{ color: "rgba(201,168,76,0.6)", marginLeft: "0.25rem" }}
          >
            *
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          style={fieldStyle}
          className="placeholder:text-bone/25"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          style={fieldStyle}
          className="placeholder:text-bone/25"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
}

/**
 * StripItem — one cell in the contact details strip.
 * Centered content, optionally linkable.
 */
function StripItem({ label, value, href, newTab = false }) {
  const inner = (
    <div
      className="flex flex-col items-center justify-center gap-2 text-center w-full"
      style={{ padding: "1.75rem 2rem" }}
    >
      <span
        style={{
          fontFamily: '"Manrope", sans-serif',
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.6)",
        }}
      >
        {label}
      </span>
      <span
        className="font-sans text-sm"
        style={{ color: "rgba(232,228,218,0.8)" }}
      >
        {value}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        className="flex-1 transition-colors"
        style={{ textDecoration: "none" }}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector("span:last-child").style.color =
            "rgba(201,168,76,0.9)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector("span:last-child").style.color =
            "rgba(232,228,218,0.8)";
        }}
      >
        {inner}
      </a>
    );
  }

  return <div className="flex-1">{inner}</div>;
}
