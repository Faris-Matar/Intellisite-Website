import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { duration, ease } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Page transition wrapper.
 *
 * Clean opacity + slight rise on every route change.
 * `initial={false}` on AnimatePresence guarantees the destination route
 * appears at its `animate` state on first paint, with no overlay or
 * gating layer that could mask the page.
 *
 * Respects prefers-reduced-motion.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: { duration: duration.fast, ease: ease.silk },
        },
        exit: {
          opacity: 0,
          transition: { duration: duration.fast, ease: ease.silk },
        },
      }
    : {
        initial: { opacity: 0, y: 12 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: duration.base, ease: ease.silk },
        },
        exit: {
          opacity: 0,
          y: -6,
          transition: { duration: duration.quick, ease: ease.silk },
        },
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
