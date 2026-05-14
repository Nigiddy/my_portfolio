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
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
      >
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