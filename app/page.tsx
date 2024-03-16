import React from "react";
import Header from "./atomic/molecules/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Container from "./atomic/atoms/container/Container";
import { containerVariants } from "./atomic/atoms/container/containerVariants";

const Home = () => {
  return (
    <main className="flex items-center justify-center">
      <Container variant={containerVariants.WRAPPER} className="relative">
        <Header />
       <Portfolio/>
      </Container>
    </main>
  );
};

export default Home;
