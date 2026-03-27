"use client";
import dynamic from "next/dynamic";

/** Skeleton shown while the lottie-react chunk is loading */
function LottieSkeleton() {
  return (
    <div
      className="w-64 h-64 rounded-full bg-zinc-800/60 animate-pulse"
      aria-hidden
    />
  );
}

// next/dynamic's `loading` prop receives { isLoading, error, ... } — NOT component props.
// Give the skeleton a concrete size so it holds layout space during load.
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <LottieSkeleton />,
});

export default Lottie;
