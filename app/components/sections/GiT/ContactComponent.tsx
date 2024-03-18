import clsx from "clsx";
import React from "react";
import buttonVariants from "@/app/atomic/atoms/button/button";
import Button from "@/app/atomic/atoms/button/ButtonComponent";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const ContactComponent = () => {
  return (
    <Container variant={containerVariants.PT} className="md:pb-[9%] bg-darkGreen">
      <div className="gradient-text text-center md:text-[40px] sm:text-[30px] text-[30px] font-bold select-none mb-[7%]">
        Get In Touch
      </div>
      <Container
        variant={containerVariants.FLEXCENTER}
        className={clsx(
          "flex-col shadow-lg shadow-ashBlack rounded-lg w-full border-l-burgundry",
          " p-[20px] md:p-[30px] border-l-[3px] border-r-[3px] border-r-burgundry"
        )}
      >
        <div className="mb-[20px] text-darkGrey">
          <p className=" text-center">
            I&apos;m always eager to connect with fellow developers, industry
            professionals, and enthusiasts. <br />
            lets collaborate to create something extraordinary
          </p>
        </div>
       <div className="flex items-center justify-center">
       <Button variant={buttonVariants.NORMAL}>Let&apos;s Connect</Button>
       </div>
      </Container>
    </Container>
  );
};

export default ContactComponent;
