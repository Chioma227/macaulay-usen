import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import Layout from "@/app/atomic/molecules/projectLayout/Layout";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const projectsData = [
  {
    imgSrc: "imgOne",
    title: "hello world one",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    imgSrc: "imgTwo",
    title: "hello world otwo",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    imgSrc: "imgThree",
    title: "hello world three",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    imgSrc: "about",
    title: "hello world four",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    imgSrc: "hero",
    title: "hello world five",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    imgSrc: "imgOne",
    title: "hello world six",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
];

const Projects = () => {
  return (
    <Container variant={containerVariants.LAYOUTGRID}>
      {projectsData.map(({ imgSrc, title, description, github, liveDemo }) => {
        return (
          <Layout
            key={title}
            imgSrc={imgSrc}
            title={title}
            description={description}
            gitHub={github}
            liveDemo={liveDemo}
          />
        );
      })}
    </Container>
  );
};

export default Projects;
