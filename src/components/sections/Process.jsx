import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * PROCESS — How It Works
 *
 * Six steps from first call to launch. Removes the fear of the unknown.
 * Editorial numbered grid — large decorative numerals, spacious cells,
 * gold accent on hover. No icons. Just clarity and authority.
 */

const STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    body: "We learn your business, your goals, and your vision. Before we even speak, we have already analysed your current website and identified exactly what is holding it back.",
  },
  {
    n: "02",
    title: "Your Brief",
    body: "You complete a short structured brief. This captures your brand, your audience, your competitors, and what success looks like for you.",
  },
  {
    n: "03",
    title: "Design Direction",
    body: "We define your visual identity, section structure, and conversion strategy. You approve the direction before a single line of code is written.",
  },
  {
    n: "04",
    title: "Build",
    body: "Your website is built section by section. Premium motion, conversion-led layout, and cinematic design delivered at pace.",
  },
  {
    n: "05",
    title: "Review & Refine",
    body: "You review the full build. We refine based on your feedback until it is exactly right.",
  },
  {
    n: "06",
    title: "Launch",
    body: "Your new website goes live. Fast, optimised, and ready to convert visitors into clients from day one.",
  },
];

export default function Process() {
  const reduced = useReducedMotion();

  return (
    <section
      id="process"
      className="relative w-full py-scene-y bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 right-0 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.016) 0%, transparent 65%)",
        }}
        animate={
          reduced
            ? {}
            : { x: [0, -30, 18, 0], y: [0, 24, -18, 0], scale: [1, 1.08, 0.94, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.055) 0%, transparent 65%)",
        }}
        animate={reduced ? {} : { x: [0, 22, -14, 0], y: [0, -18, 24, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      <div className="container-edge relative">
        {/* ─── Heading ─── */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">How It Works</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            A clear process.
            <span className="block italic text-bone/50">A premium result.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.15 }}
            className="mt-6 text-bone/60 text-lg leading-relaxed max-w-xl"
          >
            Every IntelliSite project follows the same proven path — from first
            conversation to final launch.
          </motion.p>
        </div>

        {/* ─── Step grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/8">
          {STEPS.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, reduced }) {
  const isLastRow = index >= 3; // bottom row gets no bottom border on desktop

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.1 + index * 0.1,
      }}
      whileHover="hover"
      className="group relative bg-navy p-8 md:p-10 overflow-hidden"
    >
      {/* Gold left border — draws in on hover */}
      <motion.span
        variants={{ hover: { scaleY: 1, opacity: 1 } }}
        initial={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: duration.base, ease: ease.authority }}
        className="absolute top-0 left-0 bottom-0 w-[2px] bg-gold origin-top"
        aria-hidden="true"
      />

      {/* Subtle background lift on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: duration.base, ease: ease.silk }}
        className="absolute inset-0 bg-white/[0.018] pointer-events-none"
        aria-hidden="true"
      />

      {/* Large decorative numeral */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{
          duration: duration.heroLong,
          ease: ease.silk,
          delay: 0.15 + index * 0.1,
        }}
        className="absolute -top-4 right-6 font-display text-[7rem] leading-none text-bone/[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >
        {step.n}
      </motion.span>

      {/* Content */}
      <div className="relative">
        {/* Step numeral — small, gold */}
        <p className="font-display italic text-gold/70 text-xl mb-6">{step.n}</p>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-bone leading-tight mb-4">
          {step.title}
        </h3>

        {/* Gold accent line — always visible, subtle */}
        <motion.span
          variants={{ hover: { scaleX: 1, opacity: 1 } }}
          initial={{ scaleX: 0.4, opacity: 0.4 }}
          transition={{ duration: duration.base, ease: ease.silk }}
          className="block h-[1px] w-8 bg-gold mb-5 origin-left"
          aria-hidden="true"
        />

        {/* Body */}
        <p className="text-bone/60 text-sm leading-relaxed">{step.body}</p>
      </div>
    </motion.div>
  );
}
