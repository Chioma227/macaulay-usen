import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";
import React from "react";

interface devTools {
  count: number | string;
  text: string;
}
const data: devTools[] = [
  {
    count: 6,
    text: "Programming Languages",
  },
  {
    count: 3,
    text: "Development Tools",
  },
  {
    count: 7,
    text: "Years of Experience",
  },
];

const DevTools = () => {
  return (
    <div className="space-y-[20px] sm:w-[180px] w-full bg-black px-[15px] py-[35px] bg-opacity-30 rounded-[20%] shadow-lg shadow-ashBlack">
      {data.map(({ count, text }: devTools) => {
        return (
          <Container key={count} variant={containerVariants.FLEXFIT} className="gap-[15px] text-slate-200" >
            <p  className="font-bold text-burgundry text-[35px]">{count}</p>
            <p>{text}</p>
          </Container>
        );
      })}
    </div>
  );
};

export default DevTools;
