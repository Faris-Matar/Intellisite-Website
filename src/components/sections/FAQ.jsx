import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * FAQ — Frequently Asked Questions
 *
 * Accordion layout. One item open at a time. First item open by default.
 * Removes doubt and friction before the prospect books a call.
 *
 * Motion:
 *   - Heading fades up on scroll
 *   - Items stagger in with 0.08s delay each
 *   - Answer panel expands/collapses with height + opacity via AnimatePresence
 *   - Plus icon rotates 45° to form an × when open
 */

const FAQS = [
  {
    q: "How long would my website take?",
    a: "Most projects are completed within 3 to 4 weeks from the moment we receive your brief and deposit. Timelines depend on how quickly content and feedback are provided — the faster you move, the faster we do.",
  },
  {
    q: "Do I need to provide content?",
    a: "We handle professional copywriting as part of every project so you do not need to write a single word. If you have existing content you love we will work with it. Photography and video guidance is included and we can recommend trusted suppliers if needed.",
  },
  {
    q: "What if I don't like the first design?",
    a: "Every project includes revision rounds built into the package. We present the design direction before building anything so you approve the look and feel upfront. No surprises, no wasted time.",
  },
  {
    q: "Can you update my existing site?",
    a: "If your current site is worth saving we can assess it on the discovery call. In most cases a fresh build performs significantly better than patching an outdated foundation — but we will always give you an honest recommendation.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Every package includes post-launch support as standard. Beyond that we offer monthly maintenance, SEO content, and ongoing update plans. Your website should grow with your business — we make sure it does.",
  },
];

function FAQItem({ item, index, isOpen, onToggle, reduced }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.08 + index * 0.08,
      }}
      style={{ borderBottom: "1px solid rgba(232,228,218,0.1)" }}
    >
      {/* Question row — clickable */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 text-left py-6"
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        <span
          className="font-display leading-snug"
          style={{
            fontSize: "1.1rem",
            color: isOpen ? "rgba(201,168,76,0.95)" : "rgba(232,228,218,1)",
            transition: "color 200ms ease",
          }}
        >
          {item.q}
        </span>

        {/* Plus / × icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: ease.silk }}
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "20px",
            height: "20px",
            color: "rgba(201,168,76,0.8)",
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ width: "16px", height: "16px" }}
          >
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
        </motion.span>
      </button>

      {/* Answer panel — AnimatePresence height expand */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : duration.base, ease: ease.silk }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-sans pb-6"
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(232,228,218,0.6)",
                maxWidth: "68ch",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const reduced = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  function handleToggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section
      id="faq"
      className="relative w-full py-scene-y overflow-hidden border-t border-bone/5"
      style={{ background: "rgba(255,255,255,0.02)", backgroundColor: "#0D1B2A" }}
    >
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -right-24 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
        animate={
          reduced
            ? {}
            : { x: [0, -20, 14, 0], y: [0, 22, -18, 0], scale: [1, 1.08, 0.94, 1] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/4 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.014) 0%, transparent 65%)",
        }}
        animate={reduced ? {} : { x: [0, 18, -12, 0], y: [0, -16, 22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      <div className="container-edge relative">
        {/* ── Heading ── */}
        <div className="mb-14 md:mb-16 max-w-3xl">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">FAQ</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            Questions
            <span className="block italic text-bone/50">worth asking.</span>
          </motion.h2>
        </div>

        {/* ── Accordion ── */}
        <div className="max-w-3xl">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
