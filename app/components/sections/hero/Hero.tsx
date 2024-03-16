"use client";
import React, { useEffect } from "react";
import Image from "@/app/atomic/atoms/image/Image";
import Links from "@/app/atomic/molecules/links/Links";
import buttonVariants from "@/app/atomic/atoms/button/button";
import Button from "@/app/atomic/atoms/button/ButtonComponent";
import Container from "@/app/atomic/atoms/container/Container";
// import resume from "@/assets/pdf/MacaulayUbon.pdf"
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const HeroComponent = () => {
  const imgExt = "jpg";

  const handleResumeDownload: any = () => {
    const pdfUrl = "";
    const linkElement = document.createElement("a");
    linkElement.href = pdfUrl;
    linkElement.download = "resume.pdf";
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };
  return (
    <Container variant={containerVariants.PT}>
      <Container variant={containerVariants.HEROWRAPPER}>
        <Container variant={containerVariants.FLEXBETWEEN}>
          <Container variant={containerVariants.BOX}>
            <h3 className=" gradient-text text-[40px] font-bold text-darkGrey select-none">
              I Am <span className="text-hover underline">Macaulay Usen</span>,
              <br />A Mobile Developer.
            </h3>
            <p className="text-darkGrey tracking-wide">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              harum ipsam magnam ipsum? Repudiandae veniam incidunt, suscipit
              assumenda sed voluptates, commodi ipsa consequuntur earum maxime
              nobis qui sapiente ad impedit amet! Architecto sapiente
              consequuntur quaerat! Officia hic reprehenderit temporibus sint
              modi asperiores sunt earum atque.
            </p>
            <Container
              variant={containerVariants.FLEXFIT}
              className="gap-[20px]"
            >
              <p
                onClick={handleResumeDownload}
                className="rounded-full cursor-pointer border-gray-500 border-[3px] transition-all transition-8 px-[40px] py-[6px] bg-transparent text-lightGrey hover:text-gray-900 hover:bg-darkGrey "
              >
                My Resume
              </p>
              <Links />
            </Container>
          </Container>
          <Image
            src="hero"
            alt="Macaualay usen"
            width={300}
            height={300}
            extension={imgExt}
            className=" rounded-tr-lg h-full"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default HeroComponent;
