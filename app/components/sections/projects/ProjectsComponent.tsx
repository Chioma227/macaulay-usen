import React from "react";
import Projects from "./Projects";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const ProjectsComponent = () => {
  return (
    <Container variant={containerVariants.PT}>
      <div className="gradient-text text-center md:text-[40px] sm:text-[30px] text-[30px] font-bold text-darkGrey select-none mb-[7%]">
        My <span className="underline">Projects</span>
      </div>
      <Projects/>
    </Container>
  );
};

export default ProjectsComponent;