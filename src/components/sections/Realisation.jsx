import { motion } from "framer-motion";
import { duration, ease, stagger, staggerItem, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * ACT 2.5 — REALISATION
 *
 * The gap between average and premium — made visible.
 * Two-column contrast: left shows what most agency sites are,
 * right shows what IntelliSite builds. The "I need this" moment.
 * No sales pitch. Just a quiet, confident comparison.
 */

const AVERAGE = [
  "Generic template layouts",
  "Slow load times",
  "No clear call to action",
  "Looks like every competitor",
  "Builds zero trust",
];

const STANDARD = [
  "Cinematic, conversion-led design",
  "Premium first impression in under 3 seconds",
  "Clear authority and trust signals",
  "Stands apart from every competitor",
  "Turns visitors into booked calls",
];

export default function Realisation() {
  const reduced = useReducedMotion();

  /* Column slide variants — respect reduced motion */
  const slideLeft = {
    hidden: { opacity: 0, x: reduced ? 0 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: duration.slow, ease: ease.silk },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: reduced ? 0 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: duration.slow, ease: ease.silk },
    },
  };

  return (
    <section
      id="realisation"
      className="relative w-full py-scene-y bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 65%)",
        }}
        animate={reduced ? {} : {
          x: [0, 24, -16, 0],
          y: [0, -20, 28, 0],
          scale: [1, 1.1, 0.93, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/3 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
        animate={reduced ? {} : { x: [0, -20, 30, 0], y: [0, 18, -22, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      <div className="container-edge relative">
        {/* ─── Heading ─── */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">The Gap</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            Most websites blend in.
            <span className="block italic text-bone/50">
              Yours should stand out.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.15 }}
            className="mt-6 text-bone/60 text-lg leading-relaxed max-w-xl"
          >
            The difference between a website that loses clients and one that wins
            them is not price. It is perception.
          </motion.p>
        </div>

        {/* ─── Two-column comparison ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/8">

          {/* Left — The average */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-navy p-8 md:p-12"
          >
            {/* Column header */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-bone/10">
              <span className="inline-flex items-center justify-center w-5 h-5 border border-bone/20 text-bone/30 text-[0.6rem] font-display">
                ✕
              </span>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-bone/40">
                The average agency website
              </p>
            </div>

            {/* Points */}
            <motion.ul
              variants={stagger(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-4"
            >
              {AVERAGE.map((point) => (
                <motion.li
                  key={point}
                  variants={staggerItem}
                  className="flex items-start gap-4 text-bone/45"
                >
                  <span className="mt-[0.6em] block w-3 h-[1px] bg-bone/25 shrink-0" />
                  <span className="text-[0.95rem] leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom label */}
            <p className="mt-10 text-[0.65rem] tracking-[0.25em] uppercase text-bone/25 italic">
              Every agency. Every postcode.
            </p>
          </motion.div>

          {/* Right — The IntelliSite standard */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-navy-900 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Subtle gold glow — premium side only */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(201,168,76,0.07) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Animated gold top border */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: duration.heroLong, ease: ease.authority, delay: 0.2 }}
              className="absolute top-0 left-0 right-0 h-[1px] bg-gold origin-left"
              aria-hidden="true"
            />

            {/* Column header */}
            <div className="relative flex items-center gap-3 mb-8 pb-6 border-b border-bone/10">
              <span className="inline-flex items-center justify-center w-5 h-5 border border-gold/50 text-gold text-[0.6rem] font-display italic">
                I
              </span>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-gold/80">
                The IntelliSite standard
              </p>
            </div>

            {/* Points */}
            <motion.ul
              variants={stagger(0.08, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative space-y-4"
            >
              {STANDARD.map((point) => (
                <motion.li
                  key={point}
                  variants={staggerItem}
                  className="flex items-start gap-4 text-bone/85"
                >
                  <span className="mt-[0.6em] block w-3 h-[1px] bg-gold/60 shrink-0" />
                  <span className="text-[0.95rem] leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom label */}
            <p className="relative mt-10 text-[0.65rem] tracking-[0.25em] uppercase text-gold/50 italic">
              Built for you. Looks like no one else.
            </p>
          </motion.div>

        </div>

        {/* Divider caption — sits between the columns on the border line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.base, ease: ease.silk, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4 text-[0.65rem] tracking-[0.28em] uppercase text-bone/30"
        >
          <span className="block h-[1px] w-12 bg-bone/15" />
          The choice is the brief
          <span className="block h-[1px] w-12 bg-bone/15" />
        </motion.div>
      </div>
    </section>
  );
}
