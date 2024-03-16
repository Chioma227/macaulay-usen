import React from "react";
import Container from "../../atoms/container/Container";
import { containerVariants } from "../../atoms/container/containerVariants";

const Header = () => {
  return (
    <Container
      variant={containerVariants.FLEXBETWEEN}
     className="bg-opacity-20 px-[30px] shadow-lg shadow-ashBlack  py-[30px]"
     >
      <section className="text-darkGrey font-bold uppercase">Macaulay Usen</section>
    </Container>
  );
};

export default Header;
