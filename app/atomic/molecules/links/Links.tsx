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
          <Link
            key={name}
            href={url as string}
            className="text-[20px] mt-[15px] text-darkGrey hover:text-gray-500 transition-all"
          >
            {icon}
          </Link>
        );
      })}
    </Container>
  );
};

export default Links;
