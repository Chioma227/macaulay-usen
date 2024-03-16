import React from "react";
import Image from "@/app/atomic/atoms/image/Image";
import { skillsData } from "./skill.type";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const Skills = () => {
  const ImgExt = "png";
  return (
    <Container variant={containerVariants.FLEXCENTER}>
      <Container variant={containerVariants.FLEXBETWEEN} className="md:overflow-hidden overflow-x-scroll">
        {skillsData.map(({ name, src, alt }) => {
          return (
            <Container
              variant={containerVariants.FLEXCENTER}
              key={name}
              className="flex-col shadow-lg shadow-ashBlack w-fit p-[30px]"
            >
              <Image
                src={src}
                alt={alt}
                height={50}
                width={50}
                extension={ImgExt}
              />
              <p className="mt-[9px]">{name}</p>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default Skills;
