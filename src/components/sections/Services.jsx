import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * ACT 5 — SERVICES
 *
 * Three structured offerings. Editorial list format — no feature cards,
 * no icons. Numerals, hairlines, and a gold accent on hover.
 */

const OFFERINGS = [
  {
    n: "01",
    title: "Signature Site",
    lead: "A bespoke cinematic build for the agency that wants to be the obvious choice.",
    points: ["Editorial design direction", "Motion system & micro-interactions", "CMS + analytics"],
  },
  {
    n: "02",
    title: "Conversion Rework",
    lead: "We restructure your existing site around the way sellers actually decide.",
    points: ["Narrative & hierarchy audit", "Mobile-first rebuild", "Enquiry flow redesign"],
  },
  {
    n: "03",
    title: "Ongoing Partnership",
    lead: "Monthly creative direction — new pages, new campaigns, sharper instruments.",
    points: ["Retainer design + build", "Quarterly performance review", "Priority support"],
  },
];

export default function Services() {
  return (
    <section
      id="services-scene"
      className="relative w-full py-scene-y bg-navy-900 overflow-hidden border-t border-bone/5"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.18, 0.9, 1], x: [0, 20, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-16 left-1/3 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
        animate={{ y: [0, -25, 15, 0], x: [0, -15, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 9 }}
      />
      <div className="container-edge relative">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 md:col-span-7">
            <FadeIn>
              <div className="flex items-center mb-8">
                <span className="hairline" />
                <span className="eyebrow">Services</span>
              </div>
            </FadeIn>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk }}
              className="font-display text-display-md text-bone leading-[1.05]"
            >
              Three ways
              <span className="block italic text-gold">we work.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
            className="hidden md:block md:col-span-5 text-bone/60 leading-relaxed"
          >
            Each engagement is hand-built. No templates, no shared components
            between clients — your site only looks like yours.
          </motion.p>
        </div>

        {/* Offerings — editorial list */}
        <ul className="border-t border-bone/10">
          {OFFERINGS.map((o, i) => (
            <OfferingRow key={o.n} item={o} index={i} />
          ))}
        </ul>

        {/* Tail link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
          className="mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-bone/70 hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase"
          >
            <span className="block h-[1px] w-10 bg-gold/60" />
            Full service detail
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function OfferingRow({ item, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.1 + index * 0.12,
      }}
      whileHover="hover"
      className="group relative border-b border-bone/10"
    >
      {/* Gold fill sweep on hover */}
      <motion.span
        variants={{ hover: { scaleX: 1 } }}
        initial={{ scaleX: 0 }}
        transition={{ duration: duration.slow, ease: ease.authority }}
        className="absolute left-0 top-0 h-[1px] w-full bg-gold origin-left"
        aria-hidden="true"
      />
      <div className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-start">
        <div className="col-span-12 md:col-span-2">
          <span className="font-display italic text-gold/70 text-2xl">
            {item.n}
          </span>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h3 className="font-display text-3xl md:text-4xl text-bone leading-tight">
            {item.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-6">
          <p className="text-bone/70 text-lg leading-relaxed">{item.lead}</p>
          <ul className="mt-6 space-y-2 text-bone/50 text-sm tracking-[0.08em]">
            {item.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-[0.7em] block h-[1px] w-4 bg-gold/60 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.li>
  );
}
