import React from "react";
import Header from "./atomic/molecules/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Container from "./atomic/atoms/container/Container";
import { containerVariants } from "./atomic/atoms/container/containerVariants";

const Home = () => {
  return (
      <Container variant={containerVariants.WRAPPER}>
       <Portfolio/>
      </Container>
  );
};

export default Home;
