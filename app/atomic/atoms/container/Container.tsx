import clsx from "clsx";
import React from "react";
import { containerVariants } from "./containerVariants";

interface containerProps {
  children: React.ReactNode;
  variant: containerVariants;
  className?: string;
}

const Container = ({ children, variant, className }: containerProps) => {
  let style = "";
  switch (variant) {
    case containerVariants.WRAPPER:
      style = clsx("md:w-[100%]", className);
      break;
    case containerVariants.FLEXFIT:
      style = clsx("flex items-center", className);
      break;
    case containerVariants.FLEXBLOCK:
      style = clsx("flex items-center justify-start", className);
      break;
    case containerVariants.FLEXCENTER:
      style = clsx("md:flex items-center justify-center", className);
      break;
    case containerVariants.FLEXBETWEEN:
      style = clsx("flex items-center gap-[50px] justify-between", className);
      break;
    case containerVariants.FLEXAROUND:
      style = clsx("flex items-center gap-[50px] justify-around", className);
      break;
    case containerVariants.FULLWIDTH:
      style = clsx("w-full", className);
      break;
    case containerVariants.PT:
      style = clsx(
        "md:pt-[7%] pt-[10%] px-[7%] sm:pb-[7%] pb-[16%]",
        className
      );
      break;
    case containerVariants.BLOCK:
      style = clsx("block", className);
      break;
    case containerVariants.BOX:
      style = clsx(
        " md:px-[25px] py-[20px] px-[18px] bg-ash shadow-lg h-[60%]  md:w-[50%] w-[95%]",
        " shadow-ashBlack  bg-opacity-50 rounded-lg",
        className
      );
      break;
    case containerVariants.HEROWRAPPER:
      style = clsx("w-full h-[400px]", className);
      break;
    case containerVariants.LAYOUTGRID:
      style = clsx(
        "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8",
        className
      );
      break;
    case containerVariants.SKILLGRID:
      style = clsx(
        "grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8",
        className
      );

    default:
      break;
  }
  return <main className={clsx(style, className)}>{children}</main>;
};

export default Container;
