import { useState } from "react";
import { motion } from "framer-motion";

export default function DockIcon({ Icon, label, href, action }) {
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        if (action === "scrollTop") window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const inner = (
        <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={!href ? handleClick : undefined}
            whileHover={{ y: -6, scale: 1.25 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="relative flex flex-col items-center cursor-pointer"
        >
            {/* Tooltip */}
            <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
                transition={{ duration: 0.15 }}
                className="
          absolute -top-9 left-1/2 -translate-x-1/2
          bg-white border-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white text-[10px]
          font-mono uppercase tracking-widest px-2 py-1 rounded-md
          whitespace-nowrap pointer-events-none
        "
            >
                {label}
            </motion.span>

            <div className={`
        w-9 h-9 flex items-center justify-center rounded-xl
        transition-colors duration-200
        text-zinc-500 dark:text-zinc-400
        ${hovered ? "bg-orange-500/10 text-orange-500 dark:bg-orange-500/20 dark:text-orange-400" : ""}
      `}>
                <Icon className="text-lg" />
            </div>
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
