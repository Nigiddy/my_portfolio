"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LottiePlayer from "../common/LottiePlayer";
import { availability } from "../../data/contact";

export default function AvailabilityChips() {
  const [contactAnim, setContactAnim] = useState(null);

  useEffect(() => {
    fetch("/animations/contact.json")
      .then((r) => r.json())
      .then(setContactAnim);
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Lottie — hidden on mobile to keep layout clean */}
      <div className="hidden md:flex justify-start">
        <LottiePlayer animationData={contactAnim} loop autoPlay className="w-52 opacity-90" />
      </div>

      {/* Availability chips */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">
          Availability
        </p>
        {availability.map(({ Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 flex-shrink-0">
              <Icon className="text-blue-600 text-xs" />
            </span>
            <span className="text-sm text-gray-900">{text}</span>
          </div>
        ))}
      </div>

      {/* Decorative quote */}
      <div className="hidden md:block border-l-2 border-blue-200 pl-4">
        <p className="text-gray-500 text-sm italic leading-relaxed">
          "Great products are built on great communication."
        </p>
      </div>
    </motion.div>
  );
}
