import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth-scroll setup, wired into GSAP ScrollTrigger so all scroll-linked
 * motion stays in perfect sync with Lenis. One instance per app.
 *
 * The Lenis instance is exposed on `window.__lenis` so that route-change
 * scroll resets (see ScrollToTop) can drive it directly. Without this,
 * window.scrollTo() is a no-op while Lenis owns the scroll position.
 */
export function useLenis() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return; // respect user preference — no smooth scroll

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    // Expose for ScrollToTop and any future route-aware scroll consumers
    window.__lenis = lenis;

    // Drive Lenis from GSAP's ticker so ScrollTrigger stays in lockstep
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Tell ScrollTrigger to ask Lenis for scroll position
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, []);
}
