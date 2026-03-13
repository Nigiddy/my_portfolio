import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function ServiceModal({ service, onClose }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <motion.div
                className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Accent header strip */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }} />

                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${service.accent}14 0%, transparent 55%)` }} />

                <div className="relative z-10 p-7 flex flex-col gap-5">

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                                style={{ background: `${service.accent}20` }}>
                                <service.Icon className="w-6 h-6" style={{ color: service.accent }} />
                            </div>
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: service.accent }}>
                                    {service.tagline}
                                </p>
                                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>

                    {/* What's included */}
                    <div>
                        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">What's included</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.bullets.map((b, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stat */}
                    <div className="flex items-center gap-4 px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl">
                        <div>
                            <p className="text-2xl font-black text-white">{service.stat.value}</p>
                            <p className="text-xs text-zinc-500 font-mono">{service.stat.label}</p>
                        </div>
                        <div className="h-10 w-px bg-zinc-800" />
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Track record backed by real projects and satisfied clients.
                        </p>
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] shadow-lg"
                        style={{ background: service.accent, boxShadow: `0 8px 24px ${service.accent}30` }}
                    >
                        Start a Project
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
