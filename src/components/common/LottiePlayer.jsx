"use client";
import dynamic from "next/dynamic";

/** Skeleton shown while lottie-react chunk loads */
function LottieSkeleton({ className }) {
  return (
    <div
      className={`rounded-full bg-zinc-800 animate-pulse ${className}`}
      aria-hidden
    />
  );
}

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: ({ className }) => <LottieSkeleton className={className} />,
});

export default Lottie;
