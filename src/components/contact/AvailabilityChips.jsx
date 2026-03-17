"use client";
import { useState, useEffect } from "react";
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
    <div className="flex flex-col gap-6">
      {/* Lottie — hidden on mobile to keep layout clean */}
      <div className="hidden md:flex justify-start">
        <LottiePlayer animationData={contactAnim} loop autoPlay className="w-52 opacity-90" />
      </div>

      {/* Availability chips */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-1">
          Availability
        </p>
        {availability.map(({ Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/10 flex-shrink-0">
              <Icon className="text-orange-400 text-xs" />
            </span>
            <span className="text-sm text-zinc-300">{text}</span>
          </div>
        ))}
      </div>

      {/* Decorative quote */}
      <div className="hidden md:block border-l-2 border-orange-500/30 pl-4">
        <p className="text-zinc-600 text-sm italic leading-relaxed">
          "Great products are built on great communication."
        </p>
      </div>
    </div>
  );
}
