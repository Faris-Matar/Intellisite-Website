import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";

/**
 * ACT 2 — PROBLEM
 *
 * The problem isn't the market. It's the pitch.
 * Real photo of an outdated website setup, desaturated + distressed.
 * Animated background orbs add subtle depth and life to the scene.
 */
export default function Problem() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mockY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const mockRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-0.4, 0.2, -0.4]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative w-full py-scene-y bg-navy overflow-hidden border-t border-bone/5"
    >
      {/* ── Animated background orbs ── */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 0.9, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container-edge relative grid grid-cols-12 gap-8 md:gap-16 items-center">
        {/* ─── Copy ─── */}
        <div className="col-span-12 md:col-span-5">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">The Problem</span>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05]"
          >
            Your website is your first pitch.
            <span className="block text-bone/50 italic">And it's losing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.15 }}
            className="mt-8 text-bone/60 text-lg leading-relaxed max-w-md"
          >
            Slow pages. Cramped mobile. A template everyone else also uses.
            The competition doesn't even see it — they just feel the gap.
          </motion.p>

          {/* Animated stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {["8s avg load time", "62% mobile bounce", "Zero differentiation"].map((s) => (
              <span
                key={s}
                className="text-[0.68rem] tracking-[0.2em] uppercase text-bone/50 border border-bone/10 px-3 py-1.5"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ─── Photo mock ─── */}
        <div className="col-span-12 md:col-span-7 relative">
          <motion.div
            style={{ y: mockY, rotate: mockRotate }}
            className="relative aspect-[4/3] w-full"
          >
            <OldSiteMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OldSiteMock() {
  return (
    <div className="relative w-full h-full">
      {/* Main card — real photo base, desaturated + distressed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, rotate: -1.5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -1.2 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease: ease.silk }}
        className="absolute inset-0 overflow-hidden border border-bone/10"
        style={{ filter: "saturate(0.35) contrast(0.85) brightness(0.7)" }}
      >
        {/* Real photo */}
        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80&fit=crop"
          alt="Outdated agency website on screen"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay — sells the "outdated" tension */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(6,13,23,0.55)" }}
        />
        {/* CSS overlay marks — cramped UI elements on top of the photo */}
        <div className="absolute inset-0 p-6 md:p-8">
          {/* Fake header bar */}
          <div className="flex items-center justify-between pb-4 border-b border-bone/10">
            <div className="flex items-center gap-2">
              <span className="block w-4 h-4 rounded-full bg-bone/20" />
              <span className="block w-20 h-2.5 bg-bone/20" />
            </div>
            <div className="flex gap-3">
              <span className="block w-10 h-2 bg-bone/15" />
              <span className="block w-10 h-2 bg-bone/15" />
              <span className="block w-10 h-2 bg-bone/15" />
            </div>
          </div>
          {/* Crammed hero hint */}
          <div className="pt-5 space-y-2">
            <div className="h-2.5 bg-bone/25 w-4/5" />
            <div className="h-2.5 bg-bone/20 w-3/5" />
            <div className="h-1.5 bg-bone/10 w-full mt-3" />
            <div className="h-1.5 bg-bone/10 w-11/12" />
            <div className="h-5 w-20 bg-bone/15 mt-3" />
          </div>
          {/* Dense listing grid */}
          <div className="mt-5 grid grid-cols-4 gap-2 opacity-60">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-bone/8 border border-bone/5" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glitch line — tension accent */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: ease.authority, delay: 0.4 }}
        className="absolute top-[38%] left-0 right-0 h-[1px] bg-bone/8 origin-left"
        aria-hidden="true"
      />

      {/* Corner tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.base, ease: ease.silk, delay: 0.3 }}
        className="absolute -bottom-6 md:-bottom-8 -left-4 md:-left-8 bg-navy-900 border border-bone/10 px-4 py-3 text-[0.65rem] tracking-[0.25em] uppercase text-bone/50"
      >
        Typical agency website — 2015
      </motion.div>

      {/* Floating error badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: duration.base, ease: ease.silk, delay: 0.5 }}
        className="absolute -top-4 -right-4 md:-right-6 bg-navy border border-bone/10 px-3 py-2 text-[0.6rem] tracking-[0.2em] uppercase text-bone/40"
      >
        LCP: 8.4s ✕
      </motion.div>
    </div>
  );
}
