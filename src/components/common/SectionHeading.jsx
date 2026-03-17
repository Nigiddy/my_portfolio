"use client";
import { motion } from "framer-motion";


/**
 * Reusable animated section heading with eyebrow label, main title, and optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-orange-500" />
        <p className="text-xs font-mono text-orange-400 uppercase tracking-[0.2em]">{eyebrow}</p>
      </div>
      <h2 className="text-fluid-heading-2 font-black text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-500 text-fluid-body max-w-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
