import React from "react";
import Div from "../../../atomic/atoms/div/Div";
import { divVariants } from "@/app/atomic/atoms/div/divVariant";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";
import Projects from "./Projects";

const ProjectsComponent = () => {
  return (
    <Container variant={containerVariants.PT}>
      <Container variant={containerVariants.FLEXCENTER}>
        <Div variant={divVariants.HEADER} />
      </Container>
      <div className="text-center text-[40px] font-bold text-darkGrey select-none">
        My <span className="text-hover underline">Projects</span>
      </div>
      <Projects/>
    </Container>
  );
};

export default ProjectsComponent;
