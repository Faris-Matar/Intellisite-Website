import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { duration, ease, pageTransition } from "@/utils/motion";

/**
 * Page transition wrapper.
 * Two layers:
 *   1. A dark navy curtain that sweeps over the screen between routes.
 *   2. A content-level fade + slight rise.
 *
 * Usage (in App.jsx):
 *   <PageTransition>
 *     <Routes>...</Routes>
 *   </PageTransition>
 */
export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="relative"
      >
        {/* Dark curtain — only on transitions after initial mount */}
        <motion.div
          key={`curtain-${location.pathname}`}
          aria-hidden="true"
          className="fixed inset-0 z-50 pointer-events-none bg-navy-900 origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: duration.slow,
            ease: ease.authority,
            delay: 0.05,
          }}
          style={{ transformOrigin: "bottom" }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
