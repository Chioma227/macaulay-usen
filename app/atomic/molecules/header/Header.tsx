import React from "react";
import Container from "../../atoms/container/Container";
import { containerVariants } from "../../atoms/container/containerVariants";

const Header = () => {
  return (
    <Container
      variant={containerVariants.FLEXBETWEEN}
     className=" bg-greenishAsh px-[30px] border-b-[1px] border-b-lightGrey border-opacity-20  md:py-[30px] py-[20px]"
     >
      <section className="text-darkGrey font-bold uppercase">Macaulay Ubon</section>
    </Container>
  );
};

export default Header;
