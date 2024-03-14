import React from "react";
import clsx from "clsx";
import { divVariants } from "./divVariant";

interface divProps {
  variant: divVariants;
  className?: string;
}

const Div = ({ variant, className }: divProps) => {
  let style = "";
  switch (variant) {
    case divVariants.HEADER:
      style = clsx("w-[30px] h-[4px] bg-hover rounded-full", className);
      break;

    default:
      break;
  }
  return <div className={clsx(style, className)}></div>;
};

export default Div;
