import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ScrollTrigger reveal helper.
 *
 * Usage:
 *   const ref = useScrollReveal({ y: 32, duration: 0.9 });
 *   return <div ref={ref}>...</div>;
 *
 * Animates opacity + y when the element enters the viewport.
 * Respects prefers-reduced-motion (element just appears instantly).
 */
export function useScrollReveal({
  y = 24,
  duration = 0.9,
  delay = 0,
  start = "top 82%",
  ease = "power3.out",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, duration, delay, start, ease]);

  return ref;
}
