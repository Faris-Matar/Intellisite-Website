import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { duration, ease } from "@/utils/motion";
import { cn } from "@/utils/cn";
import Button from "@/components/Button";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration.slow, ease: ease.silk, delay: 0.1 }}
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all",
          scrolled
            ? "bg-navy/80 backdrop-blur-md border-b border-bone/5"
            : "bg-transparent"
        )}
        style={{
          transitionDuration: "420ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="container-edge flex items-center justify-between h-[72px]">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="IntelliSite home"
          >
            <img
              src="/logo-navbar.png"
              alt="IntelliSite"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-[0.78rem] tracking-[0.2em] uppercase font-medium transition-colors duration-fast ease-io-silk",
                    isActive ? "text-gold" : "text-bone/70 hover:text-bone"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button as={Link} to="/contact" variant="ghost" magnetic={false} className="!py-3 !px-5">
              Book a call
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col items-end gap-[5px] w-10 h-10 justify-center relative z-50"
          >
            <span
              className={cn(
                "block h-[1px] bg-bone transition-all duration-fast ease-io-silk",
                open ? "w-6 rotate-45 translate-y-[3px]" : "w-6"
              )}
            />
            <span
              className={cn(
                "block h-[1px] bg-bone transition-all duration-fast ease-io-silk",
                open ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.quick, ease: ease.silk }}
            className="fixed inset-0 z-30 bg-navy-900/98 backdrop-blur-lg md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              className="container-edge flex flex-col justify-center h-full gap-8 pt-20"
              aria-label="Mobile"
            >
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: duration.base,
                    ease: ease.silk,
                    delay: 0.08 + i * 0.06,
                  }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block font-display text-5xl tracking-tight transition-colors duration-fast ease-io-silk",
                        isActive ? "text-gold" : "text-bone hover:text-gold"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: duration.base,
                  ease: ease.silk,
                  delay: 0.4,
                }}
                className="pt-6"
              >
                <Button
                  as={Link}
                  to="/contact"
                  onClick={() => setOpen(false)}
                  variant="primary"
                  magnetic={false}
                >
                  Book a call
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
