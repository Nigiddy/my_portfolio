"use client";
import { motion } from "framer-motion";
import { techStack } from "../../data/hero";

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full"
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-4 px-6 sm:px-8">
        <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em] whitespace-nowrap">
          Tech Stack
        </p>
        <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Pills — horizontal scroll on mobile, wrap on larger screens */}
      <div className="flex gap-3 overflow-x-auto pb-2 px-6 sm:px-8 sm:flex-wrap sm:justify-center no-scrollbar">
        {techStack.map(({ Icon, label, color }, i) => (
          <motion.div
            key={label}
            title={label}
            whileHover={{ y: -4, scale: 1.08 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: i * 0.06 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-shrink-0 bg-white/80 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-200 cursor-default group"
          >
            <Icon className="text-lg" style={{ color }} />
            <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white text-xs font-mono transition-colors duration-200">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
