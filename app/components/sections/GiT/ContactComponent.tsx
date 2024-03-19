import clsx from "clsx";
import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";
import ContactForm from "./ContactForm";

const ContactComponent = () => {
  return (
    <Container variant={containerVariants.PT} className="md:pb-[9%] bg-darkGreen">
      <div className="gradient-text text-center md:text-[40px] sm:text-[30px] text-[30px] font-bold select-none mb-[7%]">
        Get In Touch
      </div>
      <Container
        variant={containerVariants.FLEXCENTER}
        className={clsx(
          "flex-col shadow-lg shadow-ashBlack rounded-lg w-full border-l-greenishAsh",
          " p-[20px] md:p-[30px] border-l-[3px] border-r-[3px] border-r-greenishAsh"
        )}
      >
       <ContactForm/>
      </Container>
    </Container>
  );
};

export default ContactComponent;
