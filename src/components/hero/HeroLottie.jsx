"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LottiePlayer from "../common/LottiePlayer";

export default function HeroLottie() {
  const [animData, setAnimData] = useState(null);

  useEffect(() => {
    fetch("/animations/laptop.json")
      .then((r) => r.json())
      .then(setAnimData);
  }, []);

  // Hold space with a skeleton while the JSON is fetching
  if (!animData) {
    return (
      <div className="hidden md:flex justify-center items-center">
        <div
          className="w-64 h-64 rounded-full bg-zinc-800/40 animate-pulse"
          aria-hidden
        />
      </div>
    );
  }

  return (
    // Hidden on small screens — the text is the focus on mobile
    <motion.div
      className="hidden md:flex justify-center items-center relative"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      {/* Glowing ring */}
      <div
        aria-hidden
        className="absolute w-64 h-64 rounded-full opacity-30 dark:opacity-20 blur-2xl"
        style={{ background: "radial-gradient(circle, #f97316, #ec4899)" }}
      />
      <LottiePlayer
        animationData={animData}
        loop
        autoPlay
        className="w-64 sm:w-80 relative z-10 drop-shadow-2xl"
      />
    </motion.div>
  );
}
