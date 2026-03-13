"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import {
  FaArrowRight, FaCheck, FaCircleXmark,
  FaClock, FaLocationDot, FaBriefcase,
} from "react-icons/fa6";
import FloatingField from "./contact/FloatingField";
import CharCounter from "./contact/CharCounter";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import contactAnimation from "../animations/contact.json";

/* ─────────────────────────────────────────────
   AVAILABILITY CHIPS
───────────────────────────────────────────── */
const availability = [
  { Icon: FaClock,        text: "Replies within 24h"        },
  { Icon: FaLocationDot,  text: "Based in Nairobi, KE"      },
  { Icon: FaBriefcase,    text: "Open to freelance & roles" },
];

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
const MESSAGE_MAX = 600;

export default function ContactSection() {
  const [formData, setFormData]     = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MESSAGE_MAX) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      await emailjs.send(
        "service_tma1txo",
        "template_yhbc2ee",
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        "s6MdDHMR7W3P6s2EJ"
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
      setTimeout(() => setError(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-zinc-950 overflow-hidden">

      {/* Keyframes */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .btn-shimmer {
          background: linear-gradient(90deg, #f97316 0%, #fb923c 40%, #fde68a 50%, #fb923c 60%, #f97316 100%);
          background-size: 200% auto;
          animation: gradientShift 2.5s linear infinite;
        }
      `}</style>

      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />

      {/* Grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-orange-500" />
            <p className="text-xs font-mono text-orange-400 uppercase tracking-[0.2em]">Say Hello</p>
          </div>
          <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
            Let's Build<br />Something.
          </h2>
          <p className="mt-4 text-zinc-500 text-base max-w-lg leading-relaxed">
            Have a project in mind, a role to fill, or just want to talk shop?
            Fill in the form and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

          {/* ── LEFT PANEL ── */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Lottie */}
            <div className="flex justify-center md:justify-start">
              <Lottie
                animationData={contactAnimation}
                loop
                autoPlay
                className="w-52 sm:w-64 opacity-90"
              />
            </div>

            {/* Availability chips */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-1">
                Availability
              </p>
              {availability.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/10 flex-shrink-0">
                    <Icon className="text-orange-400 text-xs" />
                  </span>
                  <span className="text-sm text-zinc-300">{text}</span>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="hidden md:block border-l-2 border-orange-500/30 pl-4">
              <p className="text-zinc-600 text-sm italic leading-relaxed">
                "Great products are built on great communication."
              </p>
            </div>
          </motion.div>

          {/* ── FORM ── */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                aria-label="Contact form"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingField
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FloatingField
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subject */}
                <FloatingField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                {/* Message + counter */}
                <div>
                  <FloatingField
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                  <CharCounter value={formData.message} max={MESSAGE_MAX} />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`
                    mt-1 w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white
                    flex items-center justify-center gap-2 transition-all duration-300
                    disabled:opacity-60 disabled:cursor-not-allowed
                    ${!isSubmitting && !submitted
                      ? "btn-shimmer shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30 hover:scale-[1.01]"
                      : "bg-zinc-700"
                    }
                  `}
                  aria-label="Send Message"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : submitted ? (
                    <>
                      <FaCheck className="text-emerald-400" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="text-xs" />
                    </>
                  )}
                </button>
              </form>

              {/* Status toasts */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 flex items-start gap-3 px-4 py-3.5 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-emerald-400 text-sm"
                    role="status"
                    aria-live="polite"
                  >
                    <FaCheck className="flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-emerald-300">Got it!</strong>{" "}
                      I'll reply within 24 hours.
                    </span>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 flex items-start gap-3 px-4 py-3.5 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm"
                    role="alert"
                    aria-live="assertive"
                  >
                    <FaCircleXmark className="flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-red-300">Couldn't send that.</strong>{" "}
                      Try emailing me directly at{" "}
                      <a
                        href="mailto:hello@yourportfolio.dev"
                        className="underline underline-offset-2 hover:text-red-300 transition-colors"
                      >
                        hello@yourportfolio.dev
                      </a>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer note */}
            <p className="mt-4 text-center text-xs text-zinc-700 font-mono">
              No spam. No cold pitches. Just real conversations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}