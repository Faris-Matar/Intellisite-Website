import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Realisation from "@/components/sections/Realisation";
import Transformation from "@/components/sections/Transformation";
import ProofPortfolio from "@/components/sections/ProofPortfolio";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
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
        <title>IntelliSite — Premium Web Design for UK Luxury Home Improvement Businesses</title>
        <meta name="description" content="IntelliSite builds cinematic, conversion-led websites for UK luxury home improvement businesses including bespoke kitchens, luxury bathrooms, loft conversions, and premium home services. Premium web design that wins clients and books more calls." />
        <meta name="keywords" content="web design luxury home improvement businesses UK, bespoke kitchen website design, luxury bathroom website design, loft conversion website, premium home services web design, luxury web design, conversion website UK" />
        <link rel="canonical" href="https://www.intellisite.co.uk/" />
        <meta property="og:title" content="IntelliSite — Premium Web Design for UK Luxury Home Improvement Businesses" />
        <meta property="og:description" content="Cinematic, conversion-led websites for UK luxury home improvement businesses. Design that wins clients." />
        <meta property="og:url" content="https://www.intellisite.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.intellisite.co.uk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IntelliSite — Premium Web Design for UK Luxury Home Improvement Businesses" />
        <meta name="twitter:description" content="Cinematic, conversion-led websites for UK luxury home improvement businesses." />
        <meta name="twitter:image" content="https://www.intellisite.co.uk/og-image.jpg" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "IntelliSite",
  "description": "Premium web design agency for UK luxury home improvement businesses",
  "url": "https://www.intellisite.co.uk",
  "areaServed": "United Kingdom",
  "serviceType": "Web Design",
  "priceRange": "££££"
}
        `}</script>
      </Helmet>

      <Hero />
      <Problem />
      <WhyChooseUs />
      <Realisation />
      <Transformation />
      <ProofPortfolio />
      <Services />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
