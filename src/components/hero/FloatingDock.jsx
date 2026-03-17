"use client";
import DockIcon from "./DockIcon";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { navLinks } from "../../data/hero";

export default function FloatingDock() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]">
      <div className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-4 py-2 sm:py-2.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40">
        {navLinks.map(({ Icon, label, href, action }, i) => (
          <div key={label} className="flex items-center">
            <DockIcon Icon={Icon} label={label} href={href} action={action} />
            {i === 0 && (
              <span className="mx-1 sm:mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700/60 rounded-full" />
            )}
          </div>
        ))}
        <span className="mx-1 sm:mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700/60 rounded-full" />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
