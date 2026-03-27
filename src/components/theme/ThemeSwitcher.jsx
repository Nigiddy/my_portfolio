"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <motion.button
            whileHover={{ y: -4, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark"
                ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.42-1.41l.71-.71zm-9.85 0l.71.71A1 1 0 115.67 5.9l-.71-.71a1 1 0 011.41-1.41zM10 6a4 4 0 100 8 4 4 0 000-8zm-8 4a1 1 0 011-1h1a1 1 0 010 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zm-2.93 4.07a1 1 0 011.42 0l.7.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zm-9.9 0a1 1 0 011.41 1.41l-.7.71a1 1 0 01-1.42-1.41l.71-.71zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"/></svg>
                : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            }
        </motion.button>
    );
}
