import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const STORAGE_KEY = "intelisite-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so the banner doesn't fire before the page paints
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  const variants = {
    hidden: shouldReduce
      ? { opacity: 0 }
      : { y: 100, opacity: 0 },
    visible: shouldReduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : { y: 0, opacity: 1, transition: { type: "spring", damping: 28, stiffness: 260, mass: 0.8 } },
    exit: shouldReduce
      ? { opacity: 0, transition: { duration: 0.15 } }
      : { y: 80, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          role="region"
          aria-label="Cookie consent"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "rgba(6,13,23,0.97)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="container-edge py-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              {/* Text */}
              <p className="flex-1 font-sans text-sm text-bone/70 leading-relaxed">
                We use cookies to improve your experience and measure site performance. See our{" "}
                <Link
                  to="/cookies"
                  className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </Link>{" "}
                for details.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={reject}
                  className="font-sans text-sm px-4 py-2 rounded border transition-colors duration-fast ease-io-silk"
                  style={{
                    borderColor: "rgba(232,228,218,0.25)",
                    color: "rgba(232,228,218,0.6)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232,228,218,0.5)";
                    e.currentTarget.style.color = "rgba(232,228,218,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232,228,218,0.25)";
                    e.currentTarget.style.color = "rgba(232,228,218,0.6)";
                  }}
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={accept}
                  className="font-sans text-sm px-4 py-2 rounded font-medium transition-colors duration-fast ease-io-silk"
                  style={{
                    background: "#c9a84c",
                    color: "#0D1B2A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#d4b46a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#c9a84c";
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
