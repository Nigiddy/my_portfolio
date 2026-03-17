"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-8 bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent"
      />
    </motion.div>
  );
}
