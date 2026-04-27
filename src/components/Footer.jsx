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
              <span className="inline-flex items-center justify-center w-8 h-8 border border-gold/60 text-gold font-display italic text-lg">
                I
              </span>
              <span className="font-sans text-[0.9rem] tracking-[0.18em] uppercase">
                IntelliSite
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-bone/60 leading-relaxed text-[0.95rem]">
              Cinematic, conversion-led websites for estate agents and premium
              service businesses across the UK.
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
              Coventry · Birmingham · West Midlands
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 pt-6 border-t border-bone/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/40 tracking-wider">
          <p>© {year} IntelliSite. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Designed &amp; built in-house</p>
        </div>
      </div>
    </footer>
  );
}
