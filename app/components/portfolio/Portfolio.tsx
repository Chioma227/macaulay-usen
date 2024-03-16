import React from 'react'
import HeroComponent from '../sections/hero/Hero'
import Footer from '../sections/footer/Footer'
import ProjectsComponent from '../sections/projects/ProjectsComponent'
import SkillsComponent from '../sections/skills/SkillsComponent'
import WhyMeComponent from '../sections/WhyMe/WhyMeComponent'
import ContactComponent from '../sections/GiT/ContactComponent'

const Portfolio = () => {
  return (
    <div>
      <HeroComponent/>
      <ProjectsComponent/>
      <SkillsComponent/>
      <WhyMeComponent/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default Portfolio
