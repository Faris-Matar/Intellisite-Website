import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";
import FinalCTA from "@/components/sections/FinalCTA";

const WORKS = [
  {
    id: "hartley",
    title: "Hartley & Co Kitchens",
    sector: "Luxury Kitchen Design",
    year: "2025",
    summary:
      "A quiet, confident shopfront for a bespoke kitchen maker. Editorial layout, slow reveals, and a clean enquiry path.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&fit=crop",
    href: "/demos/hartley/index.html",
    metrics: ["3.1× enquiry rate", "Sub-1s LCP", "Editorial art direction"],
  },
  {
    id: "verde",
    title: "Verde Garden Design",
    sector: "Landscape Architecture",
    year: "2025",
    summary:
      "Landscape work deserves space to breathe. Full-bleed imagery, quiet type, and a portfolio that scrolls like a garden walk.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85&fit=crop",
    href: "/demos/verde/index.html",
    metrics: ["Cinematic scrollscape", "Mobile-first", "Brand-first design"],
  },
  {
    id: "aura",
    title: "Aura Bathrooms",
    sector: "Luxury Bathroom Design",
    year: "2025",
    summary:
      "Soft stone palette, generous whitespace, and a booking flow designed to feel like a concierge rather than a form.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85&fit=crop",
    href: "/demos/aura/index.html",
    metrics: ["Concierge enquiry flow", "Stone palette", "Slow-motion reveals"],
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Heading */}
      <section className="relative w-full pt-40 pb-24 bg-navy overflow-hidden">
        <div className="container-edge">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Portfolio</span>
            </div>
          </FadeIn>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.heroLong, ease: ease.silk }}
            className="font-display text-display-lg text-bone leading-[1.02] max-w-4xl"
          >
            Three live builds.
            <span className="block italic text-bone/50">One standard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
            className="mt-8 text-bone/60 text-lg max-w-xl leading-relaxed"
          >
            Each demo below is a complete, live site — not a mock-up. Click through
            to experience it in full.
          </motion.p>
        </div>
      </section>

      {/* Case studies — alternating editorial layout */}
      <section className="relative w-full pb-32 bg-navy border-t border-bone/5">
        <div className="container-edge space-y-24 md:space-y-32 pt-24">
          {WORKS.map((w, i) => (
            <CaseRow key={w.id} work={w} index={i} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function CaseRow({ work, index, flip }) {
  return (
    <motion.a
      href={work.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: duration.heroLong, ease: ease.silk }}
      whileHover="hover"
      className="group grid grid-cols-12 gap-8 md:gap-16 items-center"
    >
      {/* Visual */}
      <div
        className={`col-span-12 md:col-span-7 ${
          flip ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-bone/10 bg-navy-900">
          <motion.img
            src={work.img}
            alt={work.title}
            variants={{ hover: { scale: 1.04 } }}
            transition={{ duration: duration.heroLong, ease: ease.silk }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,27,42,0.1) 40%, rgba(6,13,23,0.55) 100%)",
            }}
          />
          <span className="absolute top-6 right-6 text-[0.6rem] tracking-[0.3em] uppercase text-bone/60">
            0{index + 1} · {work.year}
          </span>
          <motion.span
            variants={{ hover: { scaleX: 1, opacity: 1 } }}
            initial={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: duration.slow, ease: ease.authority }}
            className="absolute left-8 right-8 bottom-8 h-[1px] bg-gold origin-left"
          />
        </div>
      </div>

      {/* Copy */}
      <div
        className={`col-span-12 md:col-span-5 ${
          flip ? "md:order-1" : "md:order-2"
        }`}
      >
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-bone/50 mb-4">
          {work.sector}
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-bone leading-tight">
          {work.title}
        </h2>
        <p className="mt-6 text-bone/65 leading-relaxed">{work.summary}</p>
        <ul className="mt-8 space-y-2 text-bone/55 text-sm">
          {work.metrics.map((m) => (
            <li key={m} className="flex items-start gap-3">
              <span className="mt-[0.7em] block h-[1px] w-4 bg-gold/60 shrink-0" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex items-center gap-3 text-gold group-hover:text-bone transition-colors text-sm tracking-[0.2em] uppercase">
          View live site <span aria-hidden="true">↗</span>
        </div>
      </div>
    </motion.a>
  );
}
