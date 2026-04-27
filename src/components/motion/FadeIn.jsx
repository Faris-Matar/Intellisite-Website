import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/utils/motion";

/**
 * Reusable reveal wrapper — fades + lifts content on viewport entry.
 * Use instead of raw <motion.div> when you just need "appear nicely".
 *
 * Props:
 *   variants  — override default fadeUp variants
 *   delay     — seconds
 *   as        — element (default 'div')
 */
export default function FadeIn({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  as = "div",
  ...rest
}) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={variants}
      transition={variants?.visible?.transition ? { ...variants.visible.transition, delay } : { delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
