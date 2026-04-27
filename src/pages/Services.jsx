import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/Button";
import FinalCTA from "@/components/sections/FinalCTA";

const TIERS = [
  {
    n: "01",
    title: "Signature Site",
    price: "From £6,500",
    lead:
      "A bespoke cinematic build for the agency that wants to be the obvious choice in its postcode.",
    inclusions: [
      "Editorial design direction",
      "Custom motion system",
      "6–10 page bespoke build",
      "CMS + analytics integration",
      "Mobile-first performance",
      "30 days post-launch support",
    ],
  },
  {
    n: "02",
    title: "Conversion Rework",
    price: "From £3,800",
    lead:
      "We restructure your existing site around the way sellers actually decide — hierarchy, clarity, and flow.",
    inclusions: [
      "Narrative & hierarchy audit",
      "Mobile-first rebuild",
      "Enquiry flow redesign",
      "Copy direction",
      "Page-speed remediation",
      "Handover + training",
    ],
  },
  {
    n: "03",
    title: "Ongoing Partnership",
    price: "From £950 / month",
    lead:
      "Monthly creative direction — new pages, campaign landings, and sharper instruments as the market shifts.",
    inclusions: [
      "Retainer design + build time",
      "Quarterly performance review",
      "Content + campaign pages",
      "Priority support",
      "A/B testing direction",
      "Rolling strategy calls",
    ],
  },
];

const PROCESS = [
  { n: "01", title: "Discovery", body: "A focused call. Market, ambition, constraints." },
  { n: "02", title: "Direction", body: "Design language and narrative proposed before a single page is built." },
  { n: "03", title: "Build", body: "Engineered for speed. Motion tuned per scene. No templates." },
  { n: "04", title: "Launch", body: "We ship, measure, and keep the instrument sharp." },
];

export default function Services() {
  return (
    <>
      {/* Heading */}
      <section className="relative w-full pt-40 pb-24 bg-navy overflow-hidden">
        <div className="container-edge">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Services</span>
            </div>
          </FadeIn>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.heroLong, ease: ease.silk }}
            className="font-display text-display-lg text-bone leading-[1.02] max-w-4xl"
          >
            Three ways
            <span className="block italic text-gold">we work.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
            className="mt-8 text-bone/60 text-lg max-w-xl leading-relaxed"
          >
            Each engagement is hand-built. No shared components between clients —
            your site only looks like yours.
          </motion.p>
        </div>
      </section>

      {/* Tier detail */}
      <section className="relative w-full pb-24 bg-navy border-t border-bone/5">
        <div className="container-edge">
          <ul className="border-t border-bone/10">
            {TIERS.map((t, i) => (
              <TierRow key={t.n} item={t} index={i} />
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full py-scene-y bg-navy-900 border-t border-bone/5">
        <div className="container-edge">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Process</span>
            </div>
          </FadeIn>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: ease.silk }}
            className="font-display text-display-md text-bone leading-[1.05] mb-16 max-w-3xl"
          >
            Four stages.
            <span className="block italic text-bone/50">No surprises.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-bone/10">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: duration.slow,
                  ease: ease.silk,
                  delay: 0.1 + i * 0.1,
                }}
                className="bg-navy-900 p-8 md:p-10"
              >
                <span className="font-display italic text-gold/70 text-xl">{p.n}</span>
                <h3 className="mt-6 font-display text-2xl text-bone">{p.title}</h3>
                <p className="mt-4 text-bone/60 leading-relaxed text-sm">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function TierRow({ item, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: duration.slow,
        ease: ease.silk,
        delay: 0.1 + index * 0.12,
      }}
      className="border-b border-bone/10 py-12 md:py-16"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-2">
          <span className="font-display italic text-gold/70 text-2xl">
            {item.n}
          </span>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-display text-3xl md:text-4xl text-bone leading-tight">
            {item.title}
          </h2>
          <p className="mt-3 text-[0.75rem] tracking-[0.22em] uppercase text-gold/80">
            {item.price}
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <p className="text-bone/75 text-lg leading-relaxed">{item.lead}</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-bone/60 text-sm">
            {item.inclusions.map((inc) => (
              <li key={inc} className="flex items-start gap-3">
                <span className="mt-[0.65em] block h-[1px] w-4 bg-gold/60 shrink-0" />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button as={Link} to="/contact" variant="underline">
              Start a conversation →
            </Button>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
