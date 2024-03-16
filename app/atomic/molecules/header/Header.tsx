import React from "react";
// import Image from "../../atoms/image/Image";
import Container from "../../atoms/container/Container";
import { containerVariants } from "../../atoms/container/containerVariants";

const Header = () => {
  const imgext = "jpg";
  return (
    <Container
      variant={containerVariants.FLEXBETWEEN}
     className="bg-opacity-20 px-[30px] shadow-lg shadow-ashBlack  py-[30px]"
     >
      <section className="text-darkGrey font-bold uppercase">Macaulay Usen</section>
      {/* <Image
        src="logo"
        alt="mactronics"
        extension={imgext}
        width={90}
        height={30}
      /> */}
    </Container>
  );
};

export default Header;
