"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaCircleXmark } from "react-icons/fa6";
import { FALLBACK_EMAIL } from "../../data/contact";

export default function ContactToasts({ submitted, error }) {
  return (
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
            Try emailing me at{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}`}
              className="underline underline-offset-2 hover:text-red-300 transition-colors"
            >
              {FALLBACK_EMAIL}
            </a>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
