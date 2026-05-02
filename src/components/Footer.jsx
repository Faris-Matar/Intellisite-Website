import { Link } from "react-router-dom";
import FadeIn from "@/components/motion/FadeIn";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 text-bone border-t border-bone/5">
      <div className="container-edge py-20">
        <FadeIn className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <img
                src="/logo-full.png"
                alt="IntelliSite"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-bone/60 leading-relaxed text-[0.95rem]">
              Cinematic, conversion-led websites for bespoke kitchens, luxury
              bathrooms, loft conversions, and premium home services across the UK.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3 text-bone/70">
              <li>
                <Link to="/" className="hover:text-gold transition-colors duration-fast ease-io-silk">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors duration-fast ease-io-silk">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gold transition-colors duration-fast ease-io-silk">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors duration-fast ease-io-silk">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Start the conversation</p>
            <a
              href="https://calendly.com/kiran-intelisite/15-min-discovery-call"
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl text-bone hover:text-gold transition-colors duration-fast ease-io-silk"
            >
              Book a 15-minute call →
            </a>
            <p className="mt-4 text-sm text-bone/50">
              United Kingdom
            </p>
          </div>
        </FadeIn>

        {/* ── Credibility strip ── */}
        <div className="mt-14 pt-6 border-t border-bone/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">

            {/* Item 1 — Star rating */}
            <div className="flex flex-col items-center gap-1.5 md:px-10">
              <div className="flex items-center gap-0.5" aria-label="4.9 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-gold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-xs tracking-wide text-bone/40">4.9 Client Rating</span>
            </div>

            {/* Divider — desktop only */}
            <span className="hidden md:block h-8 w-px bg-bone/15 shrink-0" aria-hidden="true" />

            {/* Item 2 — Trusted by */}
            <div className="flex items-center justify-center md:px-10">
              <span className="font-sans text-xs tracking-wide uppercase text-bone/40">
                Trusted by UK luxury home improvement businesses
              </span>
            </div>

            {/* Divider — desktop only */}
            <span className="hidden md:block h-8 w-px bg-bone/15 shrink-0" aria-hidden="true" />

            {/* Item 3 — Payment badges */}
            <div className="flex items-center gap-3 md:px-10">
              {/* Visa */}
              <div
                className="flex items-center px-2 py-1 rounded"
                style={{ border: "1px solid rgba(232,228,218,0.15)" }}
              >
                <span className="font-sans font-bold text-xs italic text-bone/50">VISA</span>
              </div>
              {/* Mastercard */}
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded"
                style={{ border: "1px solid rgba(232,228,218,0.15)" }}
              >
                <div className="flex items-center shrink-0">
                  <span className="block w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="block w-3 h-3 rounded-full bg-yellow-500/60 -ml-1" />
                </div>
                <span className="font-sans text-xs text-bone/50">Mastercard</span>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-bone/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/40 tracking-wider">
          <p>© {year} IntelliSite. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Designed &amp; built in-house</p>
        </div>
      </div>
    </footer>
  );
}
