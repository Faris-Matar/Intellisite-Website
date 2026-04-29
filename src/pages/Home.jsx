import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Realisation from "@/components/sections/Realisation";
import Transformation from "@/components/sections/Transformation";
import ProofPortfolio from "@/components/sections/ProofPortfolio";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";

/**
 * HOME — cinematic eight-scene sequence.
 *
 *   Act 1   · Hero            — cinematic entry
 *   Act 2   · Problem         — the pitch is losing
 *   Act 2.5 · Realisation     — the gap between average and premium
 *   Act 3   · Transformation  — structure, alignment, gold
 *   Act 4   · ProofPortfolio  — metrics, before/after, demo cards
 *   Act 5   · Services        — three structured offerings
 *   Act 5.5 · Process         — six steps, first call to launch
 *   Act 6   · FinalCTA        — calm, focused conversion
 */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>IntelliSite — Premium Web Design for UK Estate Agents</title>
        <meta name="description" content="IntelliSite builds cinematic, conversion-led websites for UK estate agents and luxury service businesses. Premium web design that wins instructions and books more calls." />
        <meta name="keywords" content="web design estate agents UK, premium website design UK, estate agent website, luxury web design, conversion website UK" />
        <link rel="canonical" href="https://www.intellisite.co.uk/" />
        <meta property="og:title" content="IntelliSite — Premium Web Design for UK Estate Agents" />
        <meta property="og:description" content="Cinematic, conversion-led websites for UK estate agents and luxury service businesses. Design that wins instructions." />
        <meta property="og:url" content="https://www.intellisite.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.intellisite.co.uk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IntelliSite — Premium Web Design for UK Estate Agents" />
        <meta name="twitter:description" content="Cinematic, conversion-led websites for UK estate agents and luxury service businesses." />
        <meta name="twitter:image" content="https://www.intellisite.co.uk/og-image.jpg" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "IntelliSite",
  "description": "Premium web design agency for UK estate agents and luxury service businesses",
  "url": "https://www.intellisite.co.uk",
  "areaServed": "United Kingdom",
  "serviceType": "Web Design",
  "priceRange": "££££"
}
        `}</script>
      </Helmet>

      <Hero />
      <Problem />
      <Realisation />
      <Transformation />
      <ProofPortfolio />
      <Services />
      <Process />
      <FinalCTA />
    </>
  );
}
