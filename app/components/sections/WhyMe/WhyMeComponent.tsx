import React from "react";
import Div from "@/app/atomic/atoms/div/Div";
import Image from "@/app/atomic/atoms/image/Image";
import Container from "@/app/atomic/atoms/container/Container";
import { divVariants } from "@/app/atomic/atoms/div/divVariant";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const WhyMeComponent = () => {
  const imgExt = "jpg";
  return (
    <Container variant={containerVariants.PT}>
      <Container variant={containerVariants.FLEXCENTER}>
        <Div variant={divVariants.HEADER} />
      </Container>
      <div className=" gradient-text text-center text-[40px] font-bold select-none mb-[7%]">
        Why Hire Me?
      </div>
      <Container variant={containerVariants.FLEXCENTER} className="gap-[30px]">
        <Image
          src="about"
          alt="Macaualay usen"
          width={300}
          height={300}
          extension={imgExt}
          className=" rounded-tr-lg h-full"
        />
        <p className="text-darkGrey tracking-wide w-[500px] text-justify">
          {" "}
          With expertise spanning, Java, C++, Kotlin, Dart, JavaScript, Swift,
          and cross-platform development with Flutter, I offer a comprehensive
          skill set that covers a wide range of technologies. Whether your
          project requires native development or cross-platform solutions, i
          have the proficiency to deliver results that exceed expectations.{" "}
          <br />
          Beyond just writing codes, I'm driven by a passion for innovation and
          a desire to push the boundaries of what's possible in mobile
          development. I'm constantly exploring new technologies, experimenting
          with novel approaches, and staying abreast of emerging trends to
          ensure that my work remains at the forefront of industry innovation.
         
        </p>
      </Container>
    </Container>
  );
};

export default WhyMeComponent;
