import React from "react";
import Header from "./atomic/molecules/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Container from "./atomic/atoms/container/Container";
import { containerVariants } from "./atomic/atoms/container/containerVariants";

const Home = () => {
  return (
    <Container variant={containerVariants.FLEXCENTER}>
      <Container variant={containerVariants.WRAPPER} className="relative">
        <Header />
       <Portfolio/>
      </Container>
    </Container>
  );
};

export default Home;
