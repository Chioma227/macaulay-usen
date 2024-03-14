import React from "react";
import Image from "@/app/atomic/atoms/image/Image";
import Links from "@/app/atomic/molecules/links/Links";
import buttonVariants from "@/app/atomic/atoms/button/button";
import Button from "@/app/atomic/atoms/button/ButtonComponent";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const HeroComponent = () => {
  const imgExt = "jpg";
  return (
    <Container variant={containerVariants.PT}>
      <Container variant={containerVariants.FLEXBETWEEN}>
        <Image
          src="hero"
          alt="Macaualay usen"
          width={300}
          height={300}
          extension={imgExt}
          className="rounded-tl-full rounded-tr-lg"
        />
        <Container variant={containerVariants.BOX}>
          <h3 className="text-[40px] font-bold text-darkGrey select-none">
            I Am <span className="text-hover underline">Macaulay Usen</span>,<br />A
            Mobile Developer.
          </h3>
          <p className="text-darkGrey tracking-wide">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            harum ipsam magnam ipsum? Repudiandae veniam incidunt, suscipit
            assumenda sed voluptates, commodi ipsa consequuntur earum maxime
            nobis qui sapiente ad impedit amet! Architecto sapiente consequuntur
            quaerat! Officia hic reprehenderit temporibus sint modi asperiores
            sunt earum atque.
          </p>
          <Links />
          <Button variant={buttonVariants.OUTLINED} className="mt-[20px]">
            My Resume
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default HeroComponent;
