"use client";
import Wrapper from "./Wrapper";
import GridOverlay from "./common/GridOverlay";
import HeroText from "./hero/HeroText";
import HeroLottie from "./hero/HeroLottie";
import TechStack from "./hero/TechStack";
import ScrollIndicator from "./hero/ScrollIndicator";
import FloatingDock from "./hero/FloatingDock";

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
      >
        {/* Ambient glows */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] opacity-20 -translate-x-1/3 -translate-y-1/3" style={{ background: "radial-gradient(circle, #f97316 0%, transparent 65%)" }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 translate-x-1/4 translate-y-1/4" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 65%)" }} />
        <GridOverlay />

        <Wrapper className="relative z-10 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <HeroText />
            <HeroLottie />
          </div>
        </Wrapper>

        <div className="relative z-10 w-full mt-16 sm:mt-20">
          <TechStack />
        </div>

        <ScrollIndicator />
      </section>

      <FloatingDock />
    </>
  );
}