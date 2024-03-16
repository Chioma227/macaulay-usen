import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";
import { divVariants } from "@/app/atomic/atoms/div/divVariant";
import Div from "@/app/atomic/atoms/div/Div";
import buttonVariants from "@/app/atomic/atoms/button/button";
import Button from "@/app/atomic/atoms/button/ButtonComponent";

const ContactComponent = () => {
  return (
    <Container variant={containerVariants.PT} className="pb-[9%]">
      <Container variant={containerVariants.FLEXCENTER}>
        <Div variant={divVariants.HEADER} />
      </Container>
      <div className="gradient-text text-center text-[40px] font-bold select-none mb-[7%]">
        Get In Touch
      </div>
      <Container
        variant={containerVariants.FLEXCENTER}
        className="flex-col shadow-lg shadow-ashBlack w-full border-l-[3px] border-r-[3px] border-l-slate-600 border-r-slate-600 py-[30px] rounded-lg"
      >
        <div className="mb-[20px] text-darkGrey">
          <p className=" text-center">
            I'm always eager to connect with fellow developers, industry
            professionals, and enthusiasts. <br />
            lets collaborate to create something extraordinary
          </p>
        </div>
        <Button variant={buttonVariants.NORMAL}>Let's Connect</Button>
      </Container>
    </Container>
  );
};

export default ContactComponent;
