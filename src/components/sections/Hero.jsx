import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { duration, ease } from "@/utils/motion";
import RevealText from "@/components/motion/RevealText";
import Button from "@/components/Button";
import heroVideo from "@/assets/video/hero-intro.mp4";

/**
 * HERO — Scene 1
 *
 * Cinematic entry: looping navy-toned video behind a measured overlay,
 * a single editorial headline, one supporting line, two CTAs.
 *
 * Motion:
 *   - Video fades in slowly (1.2s)
 *   - Overlay settles
 *   - Eyebrow, headline (word-by-word), tagline, CTAs, and scroll cue
 *     each rise in sequence on an editorial stagger
 *   - On scroll: subtle parallax on the video + hero content fades away
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  // Scroll-linked parallax + fade (tied to this section only)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Safe video autoplay (iOS needs playsInline + muted)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.9; // very slight slowdown reads as more cinematic
    const play = () => v.play().catch(() => {});
    if (v.readyState >= 2) play();
    else v.addEventListener("canplay", play, { once: true });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-navy-900"
    >
      {/* ─── Video layer ─── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: videoY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: duration.heroLong, ease: ease.silk }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          aria-hidden="true"
        />
      </motion.div>

      {/* ─── Overlays: depth + readability ───
          Lighter stack: lets the video read clearly while keeping text legible.
          Primary: left-weighted gradient so copy side stays readable, right stays clean video.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(13,27,42,0.72) 0%, rgba(13,27,42,0.42) 45%, rgba(13,27,42,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle bottom fade — anchors the scroll cue */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,13,23,0) 0%, rgba(6,13,23,0.55) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Gold accent glow — warms the frame without muddying the image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 78% 38%, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0) 65%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center"
      >
        <div className="container-edge pt-32 pb-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.slow,
              ease: ease.silk,
              delay: 0.3,
            }}
            className="flex items-center mb-10"
          >
            <span className="hairline" />
            <span className="eyebrow">
              Premium Web Design · Estate Agents UK
            </span>
          </motion.div>

          {/* Headline — word-by-word */}
          <RevealText
            as="h1"
            text="Design that wins instructions."
            delay={0.5}
            gap={0.07}
            className="font-display text-display-xl text-bone max-w-5xl"
          />

          {/* Italic accent line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.hero,
              ease: ease.silk,
              delay: 1.25,
            }}
            className="mt-6 font-display italic text-2xl md:text-3xl text-gold/90"
          >
            Look the part. Stand apart.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.hero,
              ease: ease.silk,
              delay: 1.45,
            }}
            className="mt-10 max-w-xl text-bone/70 text-lg leading-relaxed"
          >
            Cinematic, conversion-led websites for estate agents and premium
            service businesses across the UK.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: duration.hero,
              ease: ease.silk,
              delay: 1.65,
            }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button
              href="https://calendly.com/kiran-intelisite/15-min-discovery-call"
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              Book a discovery call
            </Button>
            <Button as={Link} to="/portfolio" variant="ghost">
              View the work
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Scroll cue ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: duration.slow,
          ease: ease.silk,
          delay: 2.2,
        }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 text-bone/40"
        aria-hidden="true"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.span
          className="block w-px h-10 bg-bone/30 origin-top"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, ease: ease.editorial, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
