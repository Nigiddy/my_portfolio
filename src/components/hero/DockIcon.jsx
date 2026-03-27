import { motion } from "framer-motion";

/** Dock icon with pure Framer Motion hover — no useState re-renders */
export default function DockIcon({ Icon, label, href, action }) {
  const handleClick = () => {
    if (action === "scrollTop") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inner = (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={!href ? handleClick : undefined}
      className="relative flex flex-col items-center cursor-pointer"
    >
      {/* Tooltip — fades in via Framer Motion variant */}
      <motion.span
        variants={{
          rest:  { opacity: 0, y: 4 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.15 }}
        className="
          absolute -top-9 left-1/2 -translate-x-1/2
          bg-white border border-zinc-200 text-zinc-800
          dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
          text-[10px] font-mono uppercase tracking-widest
          px-2 py-1 rounded-md whitespace-nowrap pointer-events-none
        "
      >
        {label}
      </motion.span>

      {/* Icon container — colour + bg shift via variant */}
      <motion.div
        variants={{
          rest:  { y: 0, scale: 1 },
          hover: { y: -6, scale: 1.25 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="
          w-9 h-9 flex items-center justify-center rounded-xl
          text-zinc-500 dark:text-zinc-400
          hover:bg-orange-500/10 hover:text-orange-500
          dark:hover:bg-orange-500/20 dark:hover:text-orange-400
          transition-colors duration-200
        "
      >
        <Icon className="text-lg" />
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {inner}
      </a>
    );
  }
  return inner;
}
