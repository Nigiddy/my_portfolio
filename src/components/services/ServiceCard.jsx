import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onClick()}
            aria-label={`${service.title} — click for details`}
            className="
        group relative flex flex-col cursor-pointer h-full
        bg-zinc-900/70 border border-zinc-800/70
        rounded-2xl overflow-hidden
        hover:border-zinc-700/80
        transition-all duration-400
        hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
      "
        >
            {/* Accent glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                    background: `radial-gradient(ellipse at top left, ${service.accent}18 0%, transparent 60%)`,
                }}
            />

            {/* Top accent bar */}
            <div
                className="h-[3px] w-full flex-shrink-0 transition-all duration-500"
                style={{
                    background: hovered
                        ? `linear-gradient(90deg, ${service.accent}, transparent)`
                        : "transparent",
                }}
            />

            <div className="flex flex-col flex-1 p-6 gap-4 relative z-10">

                {/* Icon + tagline */}
                <div className="flex items-start justify-between">
                    <div
                        className="w-11 h-11 flex items-center justify-center rounded-xl transition-colors duration-300"
                        style={{ background: `${service.accent}18` }}
                    >
                        <service.Icon
                            className="w-5 h-5 transition-colors duration-300"
                            style={{ color: service.accent }}
                        />
                    </div>

                    {/* Stat badge */}
                    <div className="text-right">
                        <p className="text-lg font-black text-white leading-none">{service.stat.value}</p>
                        <p className="text-[10px] font-mono text-zinc-600 leading-tight">{service.stat.label}</p>
                    </div>
                </div>

                {/* Title + tagline */}
                <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: service.accent }}>
                        {service.tagline}
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-white transition-colors">
                        {service.title}
                    </h3>
                </div>

                {/* Description — only show on large cards by default */}
                <p className={`text-sm text-zinc-500 leading-relaxed ${service.size === "large" ? "line-clamp-2" : "line-clamp-3"}`}>
                    {service.description}
                </p>

                {/* Bullet previews */}
                <ul className="flex flex-col gap-1.5 mt-auto">
                    {service.bullets.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                            {b}
                        </li>
                    ))}
                </ul>

                {/* CTA row */}
                <div className="flex items-center gap-1 text-xs font-mono mt-2 transition-colors duration-200"
                    style={{ color: hovered ? service.accent : "#52525b" }}>
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
            </div>
        </motion.div>
    );
}
