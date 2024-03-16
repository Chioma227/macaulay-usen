import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const Footer = () => {
  return (
    <footer className="w-full py-[2%] text-darkGrey border-t-[1px] border-hover border-opacity-15">
     <Container variant={containerVariants.FLEXBETWEEN}>
     <p>&copy; 2024.</p>{" "}
      <p>
        Made with &#x2764; By{" "}
        <a  href="mailto:chiomamary.o12@gmail.com" className="hover:text-hover underline">
          Chioma Okeke
        </a>
      </p>
     </Container>
    </footer>
  );
};

export default Footer;
