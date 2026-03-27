import React from "react";

/** Animated gradient ring for the featured card */
export default function GlowBorder({ children, className = "" }) {
  return (
    <div className={`relative rounded-2xl p-[2px] ${className}`} style={{ background: "none" }}>
      {/* Animated gradient border */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6, #06b6d4, #f97316)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 4s ease infinite",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 rounded-[14px] overflow-hidden h-full">{children}</div>
    </div>
  );
}
