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
        <span className="h-px flex-1 bg-gray-200" />
        <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap">
          Tech Stack
        </p>
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Pills — horizontal scroll on mobile, wrap on larger screens */}
      <div className="flex gap-3 overflow-x-auto pb-2 px-6 sm:px-8 sm:flex-wrap sm:justify-center no-scrollbar">
        {techStack.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            title={label}
            whileHover={{ y: -4, scale: 1.08 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: i * 0.06 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-shrink-0 bg-blue-50 border border-transparent hover:border-blue-200 transition-colors duration-200 cursor-default group"
          >
            <Icon className="text-lg text-blue-600" />
            <span className="text-blue-700 text-xs font-mono transition-colors duration-200">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
