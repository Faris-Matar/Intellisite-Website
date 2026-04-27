import { forwardRef } from "react";
import { cn } from "@/utils/cn";

/**
 * Section = one cinematic "scene" on the homepage.
 *
 *   <Section id="problem" tone="dark" bleed>
 *     ...scene content...
 *   </Section>
 *
 * Props:
 *   id        — used for scroll anchors
 *   tone      — "dark" (navy) | "darker" (navy-900) | "bone" (light) | "transparent"
 *   bleed     — full-bleed (no container)
 *   full      — 100vh height
 *   className — extra classes
 */
const Section = forwardRef(function Section(
  { id, tone = "dark", bleed = false, full = false, children, className, ...rest },
  ref
) {
  const tones = {
    dark: "bg-navy text-bone",
    darker: "bg-navy-900 text-bone",
    bone: "bg-bone text-navy",
    transparent: "bg-transparent",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        tones[tone] ?? tones.dark,
        full ? "min-h-screen" : "py-scene-y",
        className
      )}
      {...rest}
    >
      {bleed ? (
        children
      ) : (
        <div className="container-edge relative">{children}</div>
      )}
    </section>
  );
});

export default Section;
