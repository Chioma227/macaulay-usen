import React from "react";
import clsx from "clsx";
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
      style = clsx("w-[80%]", className);
      break;
    case containerVariants.FLEXFIT:
      style = clsx("flex items-center", className);
      break;
    case containerVariants.FLEXCENTER:
      style = clsx("flex items-center justify-center", className);
      break;
    case containerVariants.FLEXBETWEEN:
      style = clsx("flex items-center gap-[50px] justify-between", className);
      break;
    case containerVariants.FULLWIDTH:
      style = clsx("w-full", className);
      break;
    case containerVariants.PT:
      style = clsx("pt-[7%]", className);
      break;
    case containerVariants.BOX:
      style = clsx("w-full p-[25px] shadow-lg shadow-inset shadow-ashBlack bg-gray-400 bg-opacity-20 rounded-lg", className);
      break;

    default:
      break;
  }
  return <main className={clsx(style, className)}>{children}</main>;
};

export default Container;
