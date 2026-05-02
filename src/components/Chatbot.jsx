import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { duration, ease } from "@/utils/motion";
import { cn } from "@/utils/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
    keywords: ["services", "offer", "build", "create", "what do you do", "what you do", "help", "provide"],
    reply:
      "We build premium custom websites for luxury home improvement businesses across the UK — bespoke kitchen companies, luxury bathroom specialists, loft conversion firms, and other premium home service providers. Every site is built around your specific work, your clients, and your brand. No templates, no shortcuts.",
  },
  {
    id: "pricing",
    keywords: ["price", "cost", "pricing", "how much", "budget", "investment", "fees", "charge", "expensive"],
    reply:
      "Our projects start from £1,999 for a Starter site and go up to £4,999 for our Premium package. Every project is scoped to your specific needs — you only pay for what your business actually requires. We discuss this openly on the discovery call with no pressure and no surprises.",
  },
  {
    id: "process",
    keywords: ["process", "how does it work", "steps", "timeline", "how long", "long does it take", "how do you work", "workflow"],
    reply:
      "Most projects are completed in 3 to 4 weeks. We start with a discovery call where we review your current site and discuss your goals. You then complete a short brief, we agree the design direction, build section by section, and launch. You approve every stage before we move forward.",
  },
  {
    id: "niche",
    keywords: ["kitchen", "bathroom", "loft", "home improvement", "extension", "renovation", "refurbishment", "conversion", "trade", "builder", "contractor", "do you work with"],
    reply:
      "Absolutely. We work specifically with luxury home improvement businesses — bespoke kitchen companies, high-end bathroom specialists, loft conversion firms, premium extensions, and renovation businesses. If your work commands premium prices, your website should reflect that standard.",
  },
  {
    id: "portfolio",
    keywords: ["portfolio", "examples", "work", "see", "previous", "clients", "demos", "showcase", "results"],
    reply:
      "You can see examples of our work on the Portfolio page. We have a real before and after transformation showing what a premium rebuild actually looks like — the difference is stark. Head to the Portfolio tab in the navigation to see it.",
  },
  {
    id: "contact",
    keywords: ["book", "call", "contact", "speak", "talk", "get in touch", "discovery", "appointment", "meet", "how do i book", "booking"],
    reply:
      "The easiest way is to book a free 15 minute discovery call using the button below. We will review your current website before we speak and come prepared with specific recommendations. No obligation, no pressure — just a straight conversation about what your business actually needs.",
  },
];

const GREETING = {
  from: "bot",
  text: "Hello. I am the IntelliSite assistant. I am here to help — ask me anything about our websites, process, or pricing.",
};

function matchIntent(input) {
  const q = input.toLowerCase();
  for (const intent of INTENTS) {
    if (intent.keywords.some((k) => q.includes(k))) return intent;
  }
  return null;
}

export default function Chatbot() {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

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
            "I am not sure I have the answer to that one. The best way to get a proper answer is to book a free discovery call — we can cover anything and everything on there.",
          cta: true,
        };
    setMessages((m) => [...m, userMsg]);
    setDraft("");
    // Show typing indicator, then deliver reply after short delay
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, reply]);
    }, reducedMotion ? 0 : 900);
  }

  const quickPrompts = [
    { label: "What do you build?", trigger: "what do you do" },
    { label: "Pricing",            trigger: "pricing" },
    { label: "How long does it take?", trigger: "how long does it take" },
    { label: "See examples",       trigger: "portfolio" },
  ];

  return (
    <>
      {/* ── Toggle button ── */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease: ease.silk, delay: 2.4 }}
        whileHover={{
          boxShadow: "0 0 20px rgba(201,168,76,0.25)",
          borderColor: "rgba(201,168,76,1)",
        }}
        whileTap={{ scale: reducedMotion ? 1 : 0.96 }}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors"
        style={{
          background: "rgba(13,27,42,0.92)",
          border: "1px solid rgba(201,168,76,0.5)",
          backdropFilter: "blur(12px)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: reducedMotion ? 0 : -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: reducedMotion ? 0 : 45 }}
              transition={{ duration: duration.quick, ease: ease.silk }}
              className="font-sans text-xl leading-none"
              style={{ color: "rgba(201,168,76,0.9)" }}
            >
              ×
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: reducedMotion ? 0 : 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: reducedMotion ? 0 : -45 }}
              transition={{ duration: duration.quick, ease: ease.silk }}
              className="font-display italic leading-none"
              style={{ color: "rgba(201,168,76,0.9)", fontSize: "1.5rem" }}
            >
              I
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16, scale: reducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 12, scale: reducedMotion ? 1 : 0.98 }}
            transition={{ duration: duration.base, ease: ease.silk }}
            role="dialog"
            aria-label="IntelliSite assistant"
            className="fixed bottom-24 right-6 z-50 w-[min(92vw,360px)] flex flex-col"
            style={{
              maxHeight: "70vh",
              background: "#060d17",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "0 0 2px 2px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              backdropFilter: "blur(24px)",
              overflow: "hidden",
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between shrink-0"
              style={{
                padding: "1rem 1.25rem",
                borderBottom: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              <div>
                <p
                  className="font-display italic leading-none mb-1"
                  style={{ color: "rgba(232,228,218,0.9)", fontSize: "1rem" }}
                >
                  IntelliSite
                </p>
                <div className="flex items-center gap-2">
                  {/* Pulsing gold dot */}
                  <motion.span
                    animate={reducedMotion ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      display: "block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.9)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="font-sans"
                    style={{
                      color: "rgba(232,228,218,0.4)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* ── Messages ── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto"
              style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration.base, ease: ease.silk }}
                  style={{
                    maxWidth: "85%",
                    alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {m.from === "bot" ? (
                    /* Bot bubble */
                    <div
                      style={{
                        background: "rgba(13,27,42,0.6)",
                        border: "1px solid rgba(201,168,76,0.08)",
                        borderLeft: "2px solid rgba(201,168,76,0.3)",
                        padding: "0.65rem 0.85rem",
                        borderRadius: "0 2px 2px 0",
                      }}
                    >
                      <p
                        className="font-sans"
                        style={{
                          color: "rgba(232,228,218,0.8)",
                          fontSize: "0.8rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {m.text}
                      </p>
                    </div>
                  ) : (
                    /* User bubble */
                    <div
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.15)",
                        padding: "0.65rem 0.85rem",
                        borderRadius: "2px 0 2px 2px",
                        textAlign: "right",
                      }}
                    >
                      <p
                        className="font-sans"
                        style={{
                          color: "rgba(232,228,218,0.9)",
                          fontSize: "0.8rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {m.text}
                      </p>
                    </div>
                  )}

                  {/* Calendly CTA under bot messages */}
                  {m.cta && (
                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-sans"
                      style={{
                        color: "rgba(201,168,76,0.7)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      Book a call <span aria-hidden="true">→</span>
                    </a>
                  )}
                </motion.div>
              ))}

              {/* ── Typing indicator ── */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reducedMotion ? 0 : 4 }}
                    transition={{ duration: duration.quick, ease: ease.silk }}
                    style={{ alignSelf: "flex-start", maxWidth: "85%" }}
                  >
                    <div
                      style={{
                        background: "rgba(13,27,42,0.6)",
                        border: "1px solid rgba(201,168,76,0.08)",
                        borderLeft: "2px solid rgba(201,168,76,0.3)",
                        padding: "0.65rem 0.85rem",
                        borderRadius: "0 2px 2px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={reducedMotion ? { opacity: 0.4 } : { opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15,
                          }}
                          style={{
                            display: "block",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "rgba(201,168,76,0.4)",
                            flexShrink: 0,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Quick prompts ── */}
            {messages.length <= 1 && !typing && (
              <div
                className="shrink-0 flex flex-wrap gap-2"
                style={{ padding: "0 1.25rem 1rem" }}
              >
                {quickPrompts.map((q) => (
                  <button
                    key={q.label}
                    type="button"
                    onClick={() => send(q.trigger)}
                    className="font-sans transition-all"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "rgba(232,228,218,0.6)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      cursor: "pointer",
                      transitionDuration: "200ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
                      e.currentTarget.style.color = "rgba(232,228,218,0.9)";
                      e.currentTarget.style.background = "rgba(201,168,76,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                      e.currentTarget.style.color = "rgba(232,228,218,0.6)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* ── Input ── */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
              className="shrink-0 flex items-center"
              style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask anything..."
                aria-label="Your message"
                className="flex-1 font-sans bg-transparent outline-none border-none"
                style={{
                  padding: "1rem 1.25rem",
                  color: "rgba(232,228,218,0.8)",
                  fontSize: "0.82rem",
                  caretColor: "rgba(201,168,76,0.8)",
                }}
              />
              <button
                type="submit"
                aria-label="Send message"
                className="shrink-0 transition-colors"
                style={{
                  background: "none",
                  border: "none",
                  padding: "1rem 1.25rem",
                  color: "rgba(201,168,76,0.6)",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(201,168,76,1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.6)")}
              >
                →
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
