import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/Button";

/**
 * ACT 6 — FINAL CTA
 *
 * Calm. Focused. A single invitation — the whole narrative compresses
 * into one line and one decision.
 */
export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative w-full py-scene-y bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.022) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.2, 0.9, 1], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Backdrop — soft gold glow, low-opacity, pulled to the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 70% 55%, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0) 70%)",
        }}
        aria-hidden="true"
      />
      {/* Hairline frame */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: duration.heroLong, ease: ease.authority }}
        className="absolute left-1/2 -translate-x-1/2 top-16 h-[1px] w-24 bg-gold origin-center"
        aria-hidden="true"
      />

      <div className="container-edge relative text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center mb-10">
            <span className="eyebrow text-bone/50">The Invitation</span>
          </div>
        </FadeIn>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.heroLong, ease: ease.silk }}
          className="font-display text-display-lg text-bone leading-[1.02] max-w-5xl mx-auto"
        >
          When your website finally
          <span className="block italic text-gold">looks the part.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
          className="mt-10 max-w-xl mx-auto text-bone/60 text-lg leading-relaxed"
        >
          Fifteen minutes. No pitch — we'll talk about your market,
          your goals, and whether we're the right fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.35 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <Button
            href="https://calendly.com/kiran-intelisite/15-min-discovery-call"
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Book a discovery call
          </Button>
          <Button as={Link} to="/contact" variant="ghost">
            Send a brief instead
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.6 }}
          className="mt-14 text-[0.7rem] tracking-[0.3em] uppercase text-bone/35"
        >
          IntelliSite · Designed in the UK
        </motion.p>
      </div>
    </section>
  );
}
