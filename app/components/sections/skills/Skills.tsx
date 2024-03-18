import React from "react";
import { skillsData } from "./skill.type";
import Image from "@/app/atomic/atoms/image/Image";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const Skills = () => {
  const ImgExt = "svg";
  return (
    <Container
      variant={containerVariants.FLEXCENTER}
      className="gap-[25px] flex-wrap"
    >
      <Container  variant={containerVariants.SKILLGRID}>
      {skillsData.map(({ name, src, alt }) => {
        return (
            <div key={name} className="flex flex-col items-center justify-center">
              <div className=" shadow-lg shadow-ashBlack p-[30px] w-[90px] h-[90px] rounded-full">
                <Image
                  src={src}
                  alt={alt}
                  height={300}
                  width={300}
                  extension={ImgExt}
                />
              </div>
              <p className="mt-[9px] text-lightGrey text-center font-medium uppercase">
                {name}
              </p>
            </div>
        );
      })}
      </Container>
    </Container>
  );
};

export default Skills;
