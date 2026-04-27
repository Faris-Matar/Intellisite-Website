/**
 * Tiny classname helper — joins truthy strings with a single space.
 * Avoids adding clsx/classnames as a dependency.
 */
export function cn(...values) {
  return values
    .flat(Infinity)
    .filter((v) => typeof v === "string" && v.length > 0)
    .join(" ");
}
