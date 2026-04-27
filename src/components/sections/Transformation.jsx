import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * ACT 3 — TRANSFORMATION
 *
 * Elements align. Structure appears. Gold enters.
 * Real photo of a premium interior reveals alongside the architectural
 * grid — the contrast between disorder and order made visual.
 */
export default function Transformation() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="relative w-full py-scene-y bg-navy-900 overflow-hidden border-t border-bone/5"
    >
      {/* ── Animated background orbs ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.15, 0.92, 1], rotate: [0, 8, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 25, -15, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      <div className="container-edge relative grid grid-cols-12 gap-8 md:gap-16 items-center">
        {/* ─── Visual (appears first on desktop) ─── */}
        <div className="col-span-12 md:col-span-7 md:order-1 order-2">
          <VisualStack photoY={photoY} />
        </div>

        {/* ─── Copy ─── */}
        <div className="col-span-12 md:col-span-5 md:order-2 order-1">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">The Shift</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            Then everything
            <span className="block italic text-gold">aligns.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.15 }}
            className="mt-8 text-bone/60 text-lg leading-relaxed max-w-md"
          >
            A structure built for how sellers actually decide. Clean hierarchy.
            Mobile-first performance. A first impression that earns the call.
          </motion.p>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-bone/10 pt-10"
          >
            {[
              { value: "< 1s", label: "Core Web Vitals" },
              { value: "3×", label: "Enquiry uplift" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-gold">{s.value}</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.2em] uppercase text-bone/50">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stacked visual: real photo + architectural grid overlay ─── */
function VisualStack({ photoY }) {
  const lineV = {
    hidden: { scaleX: 0 },
    visible: (i) => ({
      scaleX: 1,
      transition: {
        duration: duration.slow,
        ease: ease.authority,
        delay: 0.2 + i * 0.08,
      },
    }),
  };

  const tile = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.base,
        ease: ease.silk,
        delay: 0.6 + i * 0.06,
      },
    }),
  };

  return (
    <div className="relative">
      {/* Real photo — parallax drifts up on scroll */}
      <motion.div
        style={{ y: photoY }}
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: duration.heroLong, ease: ease.silk }}
        className="relative aspect-[4/3] overflow-hidden border border-bone/10"
      >
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=85&fit=crop"
          alt="Clean, modern interior — the result of precise design"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay keeps the photo from fighting with the grid layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,13,23,0.72) 0%, rgba(13,27,42,0.3) 55%, rgba(6,13,23,0.55) 100%)",
          }}
        />

        {/* ── Architectural grid drawn over the photo ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="absolute inset-0 p-6 md:p-10 flex flex-col"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between pb-5 border-b border-bone/15">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-5 h-5 border border-gold/60 text-gold text-[0.6rem] font-display italic">
                I
              </span>
              <motion.span
                variants={lineV}
                custom={0}
                className="block w-16 h-[2px] bg-bone/50 origin-left"
              />
            </div>
            <div className="flex gap-5">
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  variants={lineV}
                  custom={i}
                  className="block w-8 h-[1.5px] bg-bone/30 origin-left"
                />
              ))}
            </div>
          </div>

          {/* Hero slot */}
          <div className="pt-7 grid grid-cols-12 gap-4 flex-1">
            <div className="col-span-7 space-y-2.5">
              <motion.span
                variants={lineV}
                custom={4}
                className="block h-3.5 bg-bone/80 w-full origin-left"
              />
              <motion.span
                variants={lineV}
                custom={5}
                className="block h-3.5 bg-bone/60 w-3/4 origin-left"
              />
              <motion.span
                variants={lineV}
                custom={6}
                className="block h-[2px] bg-gold w-14 mt-5 origin-left"
              />
              <motion.div
                variants={tile}
                custom={0}
                className="mt-3 inline-block h-7 w-28 bg-gold"
              />
            </div>
            <motion.div
              variants={tile}
              custom={1}
              className="col-span-5 bg-white/5 border border-bone/15"
            />
          </div>

          {/* Listing grid */}
          <div className="mt-6 grid grid-cols-3 gap-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                variants={tile}
                custom={i + 2}
                className="aspect-[4/3] bg-white/5 border border-bone/15 relative overflow-hidden"
              >
                <span className="absolute inset-x-3 bottom-2.5 h-1 bg-bone/25" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold corner accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.8 }}
          className="absolute -top-3 -right-3 w-12 h-12 border-t border-r border-gold"
          aria-hidden="true"
        />
      </motion.div>

      {/* Caption tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.base, ease: ease.silk, delay: 0.6 }}
        className="absolute -bottom-6 -right-4 md:-right-8 bg-navy-900 border border-bone/10 px-4 py-3 text-[0.65rem] tracking-[0.25em] uppercase text-bone/50"
      >
        IntelliSite standard — 2025
      </motion.div>
    </div>
  );
}
