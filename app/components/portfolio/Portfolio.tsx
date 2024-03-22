import React from "react";
import HeroComponent from "../sections/hero/Hero";
import AboutComponent from "../sections/about/AboutComponent";
import WhyMeComponent from "../sections/WhyMe/WhyMeComponent";
import ContactComponent from "../sections/GiT/ContactComponent";
import SkillsComponent from "../sections/skills/SkillsComponent";
import PortfolioLayout from "@/app/atomic/templates/PortfolioLayout";
import ProjectsComponent from "../sections/projects/ProjectsComponent";

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <HeroComponent/>
      <AboutComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <WhyMeComponent />
      <ContactComponent />
    </PortfolioLayout>
  );
};

export default Portfolio;
