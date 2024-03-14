import React from "react";
import Layout from "@/app/atomic/molecules/projectLayout/Layout";

const projectsData = [
  {
    imgSrc: "",
    title: "hello world one",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://",
    liveDemo: "https://",
  },
  {
    imgSrc: "",
    title: "hello world otwo",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://",
    liveDemo: "https://",
  },
  {
    imgSrc: "",
    title: "hello world three",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://",
    liveDemo: "https://",
  },
  {
    imgSrc: "",
    title: "hello world four",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://",
    liveDemo: "https://",
  },
  {
    imgSrc: "",
    title: "hello world five",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://",
    liveDemo: "https://",
  },
  {
    imgSrc: "",
    title: "hello world six",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    github: "https://",
    liveDemo: "https://",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-3">
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
    </div>
  );
};

export default Projects;
