import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/Button";

/**
 * ACT 4 — PORTFOLIO SHOWCASE
 *
 * Three live builds reveal progressively. Cards expand on hover —
 * the image-placeholder scales, a thin gold underline draws in under
 * the title. Each card links to its live demo.
 */

const WORKS = [
  {
    id: "hartley",
    title: "Hartley & Co Kitchens",
    sector: "Luxury Kitchen Design",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
    href: "/demos/hartley/index.html",
  },
  {
    id: "verde",
    title: "Verde Garden Design",
    sector: "Landscape Architecture",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&fit=crop",
    href: "/demos/verde/index.html",
  },
  {
    id: "aura",
    title: "Aura Bathrooms",
    sector: "Luxury Bathroom Design",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fit=crop",
    href: "/demos/aura/index.html",
  },
];

export default function PortfolioShowcase() {
  return (
    <section
      id="portfolio-scene"
      className="relative w-full py-scene-y bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 65%)",
        }}
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      <div className="container-edge relative">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 md:col-span-8">
            <FadeIn>
              <div className="flex items-center mb-8">
                <span className="hairline" />
                <span className="eyebrow">Portfolio</span>
              </div>
            </FadeIn>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: duration.slow, ease: ease.silk }}
              className="font-display text-display-md text-bone leading-[1.05]"
            >
              Three live builds.
              <span className="block italic text-bone/50">One standard.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
            className="hidden md:block md:col-span-4"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-bone/70 hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase"
            >
              All work →
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {WORKS.map((w, i) => (
            <ShowcaseCard key={w.id} work={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ work, index }) {
  return (
    <motion.a
      href={work.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.15 + index * 0.12,
      }}
      whileHover="hover"
      className="group relative block"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden border border-bone/10 bg-navy-900">
        <motion.img
          src={work.img}
          alt={work.title}
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: duration.slow, ease: ease.silk }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Depth veil */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,27,42,0.1) 30%, rgba(6,13,23,0.78) 100%)",
          }}
        />
        {/* Architectural line accent on hover */}
        <motion.span
          variants={{
            hover: { scaleX: 1, opacity: 1 },
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: duration.slow, ease: ease.authority }}
          className="absolute left-8 right-8 top-8 h-[1px] bg-gold origin-left"
          aria-hidden="true"
        />
        {/* Corner mark */}
        <span className="absolute top-6 right-6 text-[0.6rem] tracking-[0.3em] uppercase text-bone/40">
          0{index + 1}
        </span>
        {/* Label */}
        <div className="absolute left-6 right-6 bottom-6">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-bone/50 mb-2">
            {work.sector}
          </p>
          <h3 className="font-display text-2xl md:text-[1.8rem] text-bone leading-tight">
            {work.title}
          </h3>
          <motion.span
            variants={{
              hover: { scaleX: 1 },
            }}
            initial={{ scaleX: 0 }}
            transition={{ duration: duration.base, ease: ease.silk }}
            className="mt-3 block h-[1px] w-16 bg-gold origin-left"
          />
        </div>
      </div>

      {/* Meta under card */}
      <div className="mt-4 flex items-center justify-between text-[0.72rem] tracking-[0.2em] uppercase text-bone/50">
        <span>Live showcase</span>
        <span className="inline-flex items-center gap-1 text-gold/80 group-hover:text-gold transition-colors">
          Explore <span aria-hidden="true">↗</span>
        </span>
      </div>
    </motion.a>
  );
}
