import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Transformation from "@/components/sections/Transformation";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import Services from "@/components/sections/Services";
import FinalCTA from "@/components/sections/FinalCTA";

/**
 * HOME — cinematic six-scene sequence.
 *
 *   Act 1 · Hero          — cinematic entry
 *   Act 2 · Problem       — the pitch is losing
 *   Act 3 · Transformation— structure, alignment, gold
 *   Act 4 · Portfolio     — Hartley · Verde · Aura
 *   Act 5 · Services      — three structured offerings
 *   Act 6 · Final CTA     — calm, focused conversion
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Transformation />
      <PortfolioShowcase />
      <Services />
      <FinalCTA />
    </>
  );
}
