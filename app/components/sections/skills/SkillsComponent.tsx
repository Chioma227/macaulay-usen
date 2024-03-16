import React from "react";
import Skills from "./Skills";
import Div from "@/app/atomic/atoms/div/Div";
import Container from "@/app/atomic/atoms/container/Container";
import { divVariants } from "@/app/atomic/atoms/div/divVariant";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const SkillsComponent = () => {
  return (
    <Container variant={containerVariants.PT}>
      <Container variant={containerVariants.FLEXCENTER}>
        <Div variant={divVariants.HEADER} />
      </Container>
      <div className=" gradient-text text-center text-[40px] font-bold text-darkGrey select-none mb-[7%]">
        My <span className="underline">Skills</span>
      </div>
      <Skills />
    </Container>
  );
};

export default SkillsComponent;