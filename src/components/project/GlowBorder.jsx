import React from "react";

/** Animated gradient ring for the featured card */
export default function GlowBorder({ children, className = "" }) {
  return (
    <div className={`relative rounded-2xl p-[2px] ${className}`} style={{ background: "none" }}>
      {/* Clean subtle border for featured element */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-blue-100"
      />
      <div className="relative z-10 rounded-[14px] overflow-hidden h-full">{children}</div>
    </div>
  );
}
