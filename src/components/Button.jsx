import { motion } from "framer-motion";
import { duration, ease } from "@/utils/motion";
import { cn } from "@/utils/cn";
import Magnetic from "@/components/motion/Magnetic";

/**
 * Shared CTA button.
 *
 *   <Button variant="primary" href="https://...">Book a call</Button>
 *   <Button as={Link} to="/contact" variant="ghost">More</Button>
 *
 * Architecture:
 *   The motion props (whileHover/whileTap) live on an outer <motion.span>
 *   so the inner element can be anything — <a>, <button>, React Router <Link>
 *   — without leaking motion-only props onto the DOM.
 *
 * variants: primary | ghost | underline
 */
export default function Button({
  children,
  variant = "primary",
  href,
  as: Tag,
  className,
  magnetic = true,
  ...rest
}) {
  // Inner element defaults: if href provided -> <a>, else <button>.
  const InnerTag = Tag ?? (href ? "a" : "button");

  const base =
    "inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide uppercase transition-colors";

  const styles = {
    primary: cn(
      base,
      "bg-gold text-navy hover:bg-[#dcbe5c] rounded-none",
      "transition-[background,color]"
    ),
    ghost: cn(
      base,
      "border border-bone/20 text-bone hover:border-gold hover:text-gold rounded-none bg-transparent"
    ),
    underline:
      "inline-flex items-center gap-2 text-sm text-bone/80 hover:text-gold",
  };

  const innerProps = { className: cn(styles[variant], className), ...rest };
  if (href && !Tag) innerProps.href = href;

  const inner = (
    <InnerTag {...innerProps}>
      <span>{children}</span>
      {variant !== "underline" && (
        <span aria-hidden="true" className="translate-y-[-0.5px]">
          →
        </span>
      )}
    </InnerTag>
  );

  // Underline variant — no scale wrapper, just render inline.
  if (variant === "underline") return inner;

  const motionWrap = (
    <motion.span
      className="inline-block"
      whileHover={{
        scale: 1.02,
        transition: { duration: duration.fast, ease: ease.silk },
      }}
      whileTap={{
        scale: 0.985,
        transition: { duration: 0.12, ease: ease.silk },
      }}
      style={{
        transitionProperty: "transform",
        transitionDuration: `${duration.fast}s`,
      }}
    >
      {inner}
    </motion.span>
  );

  if (!magnetic) return motionWrap;
  return <Magnetic className="inline-block">{motionWrap}</Magnetic>;
}
