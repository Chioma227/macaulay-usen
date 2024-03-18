import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../../atoms/container/Container";
import { containerVariants } from "../../atoms/container/containerVariants";
const icons = [
  {
    name: "github",
    url: "https://tired.com",
    icon: <FaGithub />,
  },
  {
    name: "linkedIn",
    url: "https://tired.com",
    icon: <FaLinkedin />,
  },
  {
    name: "twitter",
    url: "https://tired.com",
    icon: <FaXTwitter />,
  },
];

const Links = () => {
  return (
    <Container variant={containerVariants.FLEXFIT} className="space-x-[30px]">
      {icons.map(({ name, url, icon }) => {
        return (
         <div  key={name} className="bg-lightGreen px-[10px] py-[10px] rounded-full">
           <Link
            href={url as string}
            className="text-[20px] mt-[15px] text-ashBlack transition-all"
          >
            {icon}
          </Link>
         </div>
        );
      })}
    </Container>
  );
};

export default Links;
