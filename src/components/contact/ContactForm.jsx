"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import FloatingField from "./FloatingField";
import CharCounter from "./CharCounter";
import ContactToasts from "./ContactToasts";
import { EMAILJS, MESSAGE_MAX } from "../../data/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Auto-clear success state after 6 s — useEffect provides cleanup so timers
  // don't fire on unmounted components (fixes the original setTimeout memory leak).
  useEffect(() => {
    if (!submitted) return;
    const id = setTimeout(() => setSubmitted(false), 6000);
    return () => clearTimeout(id);
  }, [submitted]);

  useEffect(() => {
    if (!error) return;
    const id = setTimeout(() => setError(false), 6000);
    return () => clearTimeout(id);
  }, [error]);

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
      await emailjs.send(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, {
        from_name:  formData.name,
        from_email: formData.email,
        subject:    formData.subject,
        message:    formData.message,
      }, EMAILJS.PUBLIC_KEY);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Contact form" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FloatingField label="Your Name"  name="name"  value={formData.name}  onChange={handleChange} required />
            <FloatingField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <FloatingField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
          <div>
            <FloatingField label="Your Message" name="message" value={formData.message} onChange={handleChange} required rows={5} />
            <CharCounter value={formData.message} max={MESSAGE_MAX} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={`mt-1 w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
              !isSubmitting && !submitted
                ? "btn-shimmer shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30 hover:scale-[1.01]"
                : "bg-zinc-700"
            }`}
            aria-label="Send Message"
          >
            {isSubmitting ? (
              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
            ) : submitted ? (
              <><FaCheck className="text-emerald-400" />Message Sent!</>
            ) : (
              <>Send Message <FaArrowRight className="text-xs" /></>
            )}
          </button>
        </form>

        <ContactToasts submitted={submitted} error={error} />

        <p className="mt-4 text-center text-xs text-zinc-700 font-mono">
          No spam. No cold pitches. Just real conversations.
        </p>
      </div>
    </motion.div>
  );
}
