import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { duration, ease } from "@/utils/motion";
import { cn } from "@/utils/cn";

/**
 * Chatbot — rule-based FAQ matcher.
 *
 * Intentionally minimal: no backend, no AI. Matches keywords in the
 * visitor's message against a small set of intents (services, pricing,
 * process, timeline, contact) and replies with a short, on-brand answer.
 * Every answer routes toward the Calendly discovery call.
 */

const CALENDLY = "https://calendly.com/kiran-intelisite/15-min-discovery-call";

const INTENTS = [
  {
    id: "services",
    keywords: ["service", "offer", "what do you do", "build", "design", "website"],
    reply:
      "We build three tiers: a bespoke Signature Site, a Conversion Rework of an existing site, and an Ongoing Partnership for retainer work. Want me to walk you through which fits you best on a 15-min call?",
  },
  {
    id: "pricing",
    keywords: ["price", "cost", "pricing", "how much", "budget", "quote", "rate"],
    reply:
      "Projects are scoped individually — a Signature Site typically starts in the low five figures. We'll share a precise number once we understand your market. The quickest way is a short call.",
  },
  {
    id: "process",
    keywords: ["process", "how do you work", "workflow", "steps", "stages"],
    reply:
      "Four stages: discovery, design direction, build, and launch. Most engagements run 4–8 weeks depending on scope. Each stage is sign-off gated — no surprises.",
  },
  {
    id: "timeline",
    keywords: ["timeline", "how long", "when", "deadline", "turnaround", "fast"],
    reply:
      "Typical delivery is 4–8 weeks from kickoff. Conversion Reworks can land sooner. If you have a hard date, mention it on the call.",
  },
  {
    id: "portfolio",
    keywords: ["portfolio", "examples", "work", "case", "demo", "clients"],
    reply:
      "Three live builds on the homepage — Hartley & Co Kitchens, Verde Garden Design, Aura Bathrooms. Each links through to the full live site.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "call", "talk", "book", "meeting", "speak"],
    reply:
      "Easiest route is the 15-minute discovery call — no pitch, just a conversation. Or send a brief through the contact page.",
  },
];

const GREETING = {
  from: "bot",
  text: "Hi — I'm the IntelliSite assistant. Ask about services, pricing, process, or timelines.",
};

function matchIntent(input) {
  const q = input.toLowerCase();
  for (const intent of INTENTS) {
    if (intent.keywords.some((k) => q.includes(k))) return intent;
  }
  return null;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(text) {
    const clean = text.trim();
    if (!clean) return;
    const userMsg = { from: "user", text: clean };
    const intent = matchIntent(clean);
    const reply = intent
      ? { from: "bot", text: intent.reply, cta: true }
      : {
          from: "bot",
          text:
            "Good question — that one's better answered directly. Book a 15-min call and we'll get into it.",
          cta: true,
        };
    setMessages((m) => [...m, userMsg, reply]);
    setDraft("");
  }

  const quickPrompts = ["Services", "Pricing", "Process", "Timeline"];

  return (
    <>
      {/* Toggle button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease: ease.silk, delay: 2.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center",
          "border border-gold/50 bg-navy-900/90 backdrop-blur-md text-gold",
          "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] transition-colors",
          "hover:bg-gold hover:text-navy"
        )}
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: duration.quick, ease: ease.silk }}
          className="font-display italic text-xl leading-none"
        >
          {open ? "×" : "I"}
        </motion.span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: duration.base, ease: ease.silk }}
            role="dialog"
            aria-label="IntelliSite assistant"
            className={cn(
              "fixed bottom-24 right-6 z-50 w-[min(92vw,380px)]",
              "flex flex-col max-h-[70vh] overflow-hidden",
              "bg-navy-900/95 backdrop-blur-lg border border-bone/10"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-bone/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 border border-gold/60 text-gold font-display italic text-sm">
                  I
                </span>
                <div>
                  <p className="text-[0.78rem] tracking-[0.18em] uppercase text-bone">
                    IntelliSite
                  </p>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-bone/45">
                    Assistant
                  </p>
                </div>
              </div>
              <span className="block w-2 h-2 rounded-full bg-gold/80" aria-hidden="true" />
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-5 space-y-4 text-[0.92rem] leading-relaxed"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration.base, ease: ease.silk }}
                  className={cn(
                    "max-w-[85%]",
                    m.from === "user" ? "ml-auto text-right" : ""
                  )}
                >
                  <div
                    className={cn(
                      "inline-block px-4 py-3 border",
                      m.from === "user"
                        ? "bg-gold/10 border-gold/30 text-bone"
                        : "bg-navy/60 border-bone/10 text-bone/85"
                    )}
                  >
                    {m.text}
                  </div>
                  {m.cta && (
                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase text-gold hover:text-bone transition-colors"
                    >
                      Book the call <span aria-hidden="true">→</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick prompts */}
            {messages.length <= 1 && (
              <div className="px-5 pb-3 flex flex-wrap gap-2">
                {quickPrompts.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-bone/60 hover:text-gold border border-bone/15 hover:border-gold/40 px-3 py-1.5 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
              className="border-t border-bone/10 flex items-center"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Your message"
                className="flex-1 bg-transparent px-5 py-4 text-bone placeholder:text-bone/35 text-sm outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="px-5 py-4 text-gold hover:text-bone transition-colors text-sm tracking-[0.2em] uppercase"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
