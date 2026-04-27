import { useState } from "react";
import { motion } from "framer-motion";
import { duration, ease, viewport } from "@/utils/motion";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/Button";

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New enquiry — ${data.get("name") || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:kiran@intellisite.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="relative w-full pt-40 pb-scene-y bg-navy overflow-hidden">
      {/* Soft gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 80% 40%, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-edge relative grid grid-cols-12 gap-10 md:gap-16">
        {/* Left — invitation */}
        <div className="col-span-12 md:col-span-5">
          <FadeIn>
            <div className="flex items-center mb-8">
              <span className="hairline" />
              <span className="eyebrow">Contact</span>
            </div>
          </FadeIn>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.heroLong, ease: ease.silk }}
            className="font-display text-display-lg text-bone leading-[1.02]"
          >
            Start the
            <span className="block italic text-gold">conversation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.2 }}
            className="mt-8 text-bone/65 leading-relaxed max-w-md"
          >
            Fifteen minutes, no pitch. We'll ask about your market, your goals,
            and whether we're the right fit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, ease: ease.silk, delay: 0.35 }}
            className="mt-10"
          >
            <Button href={CALENDLY} target="_blank" rel="noreferrer" variant="primary">
              Book the call
            </Button>
          </motion.div>

          {/* Direct details */}
          <div className="mt-16 space-y-6 border-t border-bone/10 pt-10">
            <DetailRow label="Email" value="kiran@intellisite.co.uk" href="mailto:kiran@intellisite.co.uk" />
            <DetailRow label="Location" value="United Kingdom" />
            <DetailRow label="Response" value="Within 24 hours, weekdays" />
          </div>
        </div>

        {/* Right — brief form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease: ease.silk, delay: 0.25 }}
          className="col-span-12 md:col-span-7 md:col-start-6"
        >
          <div className="border border-bone/10 bg-navy-900/60 backdrop-blur-sm p-8 md:p-12">
            <p className="eyebrow text-bone/50 mb-8">Or — send a brief</p>

            {sent ? (
              <div className="py-12 text-center">
                <p className="font-display italic text-gold text-3xl mb-3">Thank you.</p>
                <p className="text-bone/60">
                  Your mail client should have opened. We'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <Field name="name" label="Your name" required />
                <Field name="company" label="Agency / company" />
                <Field name="email" label="Email" type="email" required />
                <Field name="message" label="What are you building?" textarea required />
                <div className="pt-4">
                  <Button variant="primary" magnetic={false}>Send brief</Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailRow({ label, value, href }) {
  const content = (
    <div className="flex items-baseline gap-6">
      <span className="text-[0.7rem] tracking-[0.25em] uppercase text-bone/40 w-24 shrink-0">
        {label}
      </span>
      <span className="text-bone/85">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-gold transition-colors">{content}</a>
  ) : content;
}

function Field({ name, label, type = "text", textarea = false, required = false }) {
  const base =
    "w-full bg-transparent border-b border-bone/15 focus:border-gold/70 outline-none py-3 text-bone placeholder:text-bone/30 transition-colors text-[0.95rem]";
  return (
    <label className="block">
      <span className="block text-[0.68rem] tracking-[0.25em] uppercase text-bone/45 mb-2">
        {label}{required && <span className="text-gold/70"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
