import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { duration, ease, pageTransition } from "@/utils/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Page transition wrapper.
 * Two layers:
 *   1. A dark navy curtain that sweeps over the screen between routes.
 *   2. A content-level fade + slight rise.
 *
 * Respects prefers-reduced-motion: curtain is suppressed and y offsets
 * are removed when the OS accessibility preference is set.
 *
 * Usage (in App.jsx):
 *   <PageTransition>
 *     <Routes>...</Routes>
 *   </PageTransition>
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  /* Content variant — strip y offset when reduced motion is on */
  const contentVariants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: duration.base, ease: ease.silk } },
        exit:    { opacity: 0, transition: { duration: duration.quick, ease: ease.silk } },
      }
    : pageTransition;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={contentVariants}
        className="relative"
      >
        {/* Dark curtain — suppressed entirely when reducedMotion is true */}
        {!reducedMotion && (
          <motion.div
            key={`curtain-${location.pathname}`}
            aria-hidden="true"
            className="fixed inset-0 z-50 pointer-events-none bg-navy-900 origin-bottom"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1, transition: { duration: 0 } }}
            transition={{
              duration: duration.slow,
              ease: ease.authority,
              delay: 0.05,
            }}
            style={{ transformOrigin: "bottom" }}
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
