import React from "react";
import Link from "next/link";
import { projectsData } from "./projectData";
import Container from "@/app/atomic/atoms/container/Container";
import Layout from "@/app/atomic/molecules/projectLayout/Layout";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const Projects = () => {
  return (
    <>
      <Container variant={containerVariants.LAYOUTGRID}>
        {projectsData
          .slice(0, 6)
          .map(({ imgSrc, title, description, appStore, playStore }) => {
            return (
              <Layout
                key={title}
                imgSrc={imgSrc}
                title={title}
                description={description}
                appStore={appStore}
                playStore={playStore}
              />
            );
          })}
      </Container>
      {projectsData.length > 6 && (
        <Container variant={containerVariants.FLEXCENTER} className="mt-[30px]">
          <Link href="/projects" className="underline text-burgundry font-medium">See all Projects</Link>
        </Container>
      )}
    </>
  );
};

export default Projects;
