import React from "react";
import Projects from "./Projects";
import Div from "../../../atomic/atoms/div/Div";
import Container from "@/app/atomic/atoms/container/Container";
import { divVariants } from "@/app/atomic/atoms/div/divVariant";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const ProjectsComponent = () => {
  return (
    <Container variant={containerVariants.PT}>
      <Container variant={containerVariants.FLEXCENTER}>
        <Div variant={divVariants.HEADER} />
      </Container>
      <div className="gradient-text text-center text-[40px] font-bold text-darkGrey select-none mb-[7%]">
        My <span className="underline">Projects</span>
      </div>
      <Projects/>
    </Container>
  );
};

export default ProjectsComponent;