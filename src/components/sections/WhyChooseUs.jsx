import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * WHY CHOOSE US
 *
 * Five feature cards explaining why premium businesses choose IntelliSite.
 * The one section that talks about us — everything else on the site is
 * about them.
 *
 * Layout: 2-column grid on desktop, single column on mobile.
 * Cards: gold left border brightens on hover. No box shadow, no fill.
 */

const CARDS = [
  {
    title: "Portfolio First Design",
    desc:  "We build websites that showcase your £20K+ projects like the masterpieces that they are.",
  },
  {
    title: "Conversion Optimisation",
    desc:  "Every element carefully designed to turn casual browsers into future clients ready to invade your schedule.",
  },
  {
    title: "SEO Foundation",
    desc:  "Quickly boost yourself up the ranks within your city from day one.",
  },
  {
    title: "Mobile First",
    desc:  "70% of high-end clients always browse on phones. Your site will bridge every gap.",
  },
  {
    title: "No Templates",
    desc:  "Your work, your clients, your brand, your say-so. Custom built websites around your every whim.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-gold"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FeatureCard({ card, index, reduced }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.1 + index * 0.1,
      }}
      className="group relative transition-all"
      style={{
        padding: "1.75rem 1.5rem 1.75rem 1.5rem",
        borderLeft: "1px solid rgba(232,228,218,0.2)",
        transitionDuration: "300ms",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = "rgba(201,168,76,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = "rgba(232,228,218,0.2)";
      }}
    >
      {/* Gold checkmark */}
      <div className="mb-4">
        <CheckIcon />
      </div>

      {/* Title */}
      <h3 className="font-display text-bone mb-3" style={{ fontSize: "1.25rem", lineHeight: 1.2 }}>
        {card.title}
      </h3>

      {/* Description */}
      <p
        className="font-sans leading-relaxed"
        style={{ fontSize: "0.9rem", color: "rgba(232,228,218,0.6)" }}
      >
        {card.desc}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const reduced = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className="relative w-full py-scene-y bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* Ambient orbs */}
      <motion.div
        className="absolute -top-32 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.055) 0%, transparent 65%)",
        }}
        animate={
          reduced
            ? {}
            : { x: [0, -24, 18, 0], y: [0, 22, -16, 0], scale: [1, 1.1, 0.93, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.016) 0%, transparent 65%)",
        }}
        animate={reduced ? {} : { x: [0, 20, -14, 0], y: [0, -18, 24, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      <div className="container-edge relative">
        {/* ── Heading ── */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Why Choose Us</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            Why premium businesses
            <span className="block italic text-bone/50">choose IntelliSite.</span>
          </motion.h2>
        </div>

        {/* ── Feature cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CARDS.map((card, i) => (
            <FeatureCard key={card.title} card={card} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
