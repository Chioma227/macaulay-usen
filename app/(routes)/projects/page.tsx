import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import Layout from "@/app/atomic/molecules/projectLayout/Layout";
import PortfolioLayout from "@/app/atomic/templates/PortfolioLayout";
import { projectsData } from "@/app/components/sections/projects/projectData";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const Projects = () => {
  return (
    <PortfolioLayout>
      <Container variant={containerVariants.PT} className=" bg-greenishAsh">
        <div className="gradient-text underline text-center md:text-[40px] sm:text-[30px] text-[30px] font-bold text-darkGrey select-none mb-[4%]">
          All Projects
        </div>
        <Container variant={containerVariants.LAYOUTGRID}>
          {projectsData.map(
            ({ imgSrc, title, description, appStore, playStore }) => {
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
            }
          )}
        </Container>
      </Container>
    </PortfolioLayout>
  );
};

export default Projects;
