import React from "react";
import Image from "@/app/atomic/atoms/image/Image";
import { skillsData } from "./skill.type";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const Skills = () => {
  const ImgExt = "png";
  return (
    <Container variant={containerVariants.FLEXCENTER} className="gap-[25px] flex-wrap">
      {/* <Container variant={containerVariants.FLEXBETWEEN} className=""> */}
        {skillsData.map(({ name, src, alt }) => {
          return (
            <div key={name} className="flex-col items-center justify-center shadow-lg shadow-ashBlack p-[30px] w-[90px] h-[90px] rounded-full">
                <Image
                  src={src}
                  alt={alt}
                  height={80}
                  width={80}
                  extension={ImgExt}
                />
              <p className="mt-[9px] text-lightGrey">{name}</p>
            </div>
          );
        })}
    </Container>
  );
};

export default Skills;
