import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * PROOF + PORTFOLIO — Combined trust and showcase section.
 *
 * Part A · Metrics strip     — three proof numbers
 * Part C · Supporting demos  — Hartley + Aura demo cards
 */

/* ─── Data ─── */
const METRICS = [
  { value: "100%", label: "Of our builds are conversion focused" },
  { value: "3s",   label: "To make or break a first impression" },
  { value: "UK",   label: "UK luxury home improvement businesses served" },
];

const DEMOS = [
  {
    name: "Hartley & Co Kitchens",
    type: "BESPOKE KITCHENS · LONDON",
    desc: "Hartley's £40K kitchen projects were invisible online. Now their website generates consultation requests before the phone rings.",
    href: "/demos/hartley/index.html",
  },
  {
    name: "Aura Bathrooms",
    type: "LUXURY BATHROOMS · MANCHESTER",
    desc: "Aura's clients expect luxury at every touchpoint. Their old website was letting them down at the first one. Not anymore.",
    href: "/demos/aura/index.html",
  },
];

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export default function ProofPortfolio() {
  const reduced = useReducedMotion();

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
      <FadeIn>
        <div className="flex items-center mb-10">
          <span className="hairline" />
          <span className="eyebrow">Proof</span>
        </div>
      </FadeIn>
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
