"use client";
import Wrapper from "./Wrapper";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-zinc-950 border-t border-zinc-800/60 overflow-hidden">

      {/* Subtle centre glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #f97316 50%, transparent)",
          opacity: 0.6,
        }}
      />

      <Wrapper className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Name / brand */}
        <p className="text-sm font-mono text-zinc-600">
          <span className="text-white font-bold">Gideon Papa</span>
          {" "}— Full-Stack Developer & UI/UX Designer
        </p>

        {/* Copyright */}
        <p className="text-xs font-mono text-zinc-700 tabular-nums">
          © {year} · Bringing ideas to reality ☕
        </p>

      </Wrapper>
    </footer>
  );
}