import React from "react";
import Info from "./subSections/Info";
import DevTools from "./subSections/DevTools";
import SimpleBio from "./subSections/SimpleBio";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const HeroComponent = () => {
  return (
    <main className="bg-greenishAsh h-fit">
      <Container variant={containerVariants.PT}>
        <main className="lg:flex hidden lg:flex-row flex-row-reverse items-center gap-[50px] justify-between ">
          <SimpleBio />
          <Info />
          <DevTools />
        </main>
        <main className="lg:hidden md:block hidden">
          <Container variant={containerVariants.FLEXCENTER}>
            <SimpleBio />
          </Container>
          <Container
            variant={containerVariants.FLEXBETWEEN}
            className="mt-[30px]"
          >
            <Info />
            <DevTools />
          </Container>
        </main>
        <main className="md:hidden flex flex-col items-center justify-center space-y-[20px]">
          <SimpleBio />
          <Info />
          <DevTools />
        </main>
      </Container>
    </main>
  );
};

export default HeroComponent;
