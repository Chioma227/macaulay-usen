import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import Layout from "@/app/atomic/molecules/projectLayout/Layout";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const projectsData = [
  {
    imgSrc: "TDPel",
    title: "TDPel Media App",
    description:
      "A news application where users can read current news and aswell share their own articles.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.kartalinc.tdpel",
  },
  {
    imgSrc: "VS",
    title: "Vital Signs App",
    description:
      "The VS app is a medical application available on both apple store and play store which allows users measure their blood pressure, heart rate, respiratory rate, and steps. ",
    appStore: "https://github.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.pelmedic.vsapp&pli=1",
  },
  {
    imgSrc: "Maringo",
    title: "Maringo App",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    playStore:
      "https://play.google.com/store/apps/details?id=com.maringo.maringo",
  },
  {
    imgSrc: "Compad",
    title: "Compad App",
    description: "Compad ",
    playStore: "https://play.google.com/store/apps/details?id=com.compad.app",
  },
  {
    imgSrc: "Rapyd",
    title: "Rapyd Cover User App",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    appStore: "https://github.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rapydcover.user.app",
  },
  {
    imgSrc: "RapydBus",
    title: "Rapyd Cover Business App",
    description: "lorem Ipsum dolor sit ammet deux dolor dolor ammett",
    appStore: "https://github.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rapyd.cover.service.app",
  },
];

const Projects = () => {
  return (
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
  );
};

export default Projects;
