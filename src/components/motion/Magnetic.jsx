import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Subtle cursor magnetism for premium CTAs.
 * Element drifts toward the cursor inside its bounds — never more than 8px.
 * Disabled when prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  className,
  strength = 0.22,
  ...rest
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 20, mass: 0.5 });

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.span>
  );
}
