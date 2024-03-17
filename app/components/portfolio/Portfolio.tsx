import React from 'react'
import Footer from '../sections/footer/Footer'
import AboutComponent from '../sections/about/AboutComponent'
import HeroComponent from '../sections/hero/Hero'
import WhyMeComponent from '../sections/WhyMe/WhyMeComponent'
import ContactComponent from '../sections/GiT/ContactComponent'
import SkillsComponent from '../sections/skills/SkillsComponent'
import ProjectsComponent from '../sections/projects/ProjectsComponent'

const Portfolio = () => {
  return (
    <div>
      <HeroComponent/>
      <AboutComponent/>
      <ProjectsComponent/>
      <SkillsComponent/>
      <WhyMeComponent/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default Portfolio
