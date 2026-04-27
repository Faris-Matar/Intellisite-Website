import { motion } from "framer-motion";
import { duration, ease } from "@/utils/motion";
import { cn } from "@/utils/cn";

/**
 * Editorial word-by-word reveal for headlines.
 * Each word rises + fades in with a tight stagger.
 *
 * Props:
 *   text      — the string to reveal
 *   as        — wrapping element (default 'h1')
 *   gap       — seconds between words (default 0.055)
 *   delay     — seconds before first word
 *   startHidden — if true, initial state is hidden (otherwise relies on parent variants)
 */
export default function RevealText({
  text,
  as: Tag = "h1",
  className,
  gap = 0.055,
  delay = 0,
  startHidden = true,
  wordClassName,
}) {
  const words = String(text).split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: gap, delayChildren: delay },
    },
  };

  const word = {
    hidden: { opacity: 0, y: "0.55em", filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: duration.hero, ease: ease.silk },
    },
  };

  return (
    <Tag className={cn("overflow-hidden", className)} aria-label={text}>
      <motion.span
        className="inline-block"
        variants={container}
        initial={startHidden ? "hidden" : false}
        animate="visible"
        aria-hidden="true"
      >
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-block overflow-hidden align-baseline"
          >
            <motion.span
              variants={word}
              className={cn("inline-block will-change-transform", wordClassName)}
            >
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
