"use client";
import { motion } from "framer-motion";

import { ArrowRight, X } from "lucide-react";

export default function ServiceModal({ service, onClose }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <motion.div
                className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Accent header strip */}
                <div className="h-1 w-full bg-blue-600" />

                <div className="relative z-10 p-7 flex flex-col gap-5">

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0 bg-blue-50">
                                <service.Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-blue-600">
                                    {service.tagline}
                                </p>
                                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

                    {/* What's included */}
                    <div>
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3">What's included</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.bullets.map((b, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-600" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stat */}
                    <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                        <div>
                            <p className="text-2xl font-black text-gray-900">{service.stat.value}</p>
                            <p className="text-xs text-gray-500 font-mono">{service.stat.label}</p>
                        </div>
                        <div className="h-10 w-px bg-gray-200" />
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Track record backed by real projects and satisfied clients.
                        </p>
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] shadow-lg bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
                    >
                        Start a Project
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
