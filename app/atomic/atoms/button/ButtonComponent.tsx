import React from "react";
import buttonVariants from "./button";
import clsx from "clsx";

interface buttonProps {
  variant: buttonVariants;
  children: string | React.ReactNode;
  className?: string;
}

export default function Button({ variant, children, className }: buttonProps) {
  let style = "";
  switch (variant) {
    case buttonVariants.NORMAL:
      style = clsx(
        "rounded-full bg-darkGrey hover:bg-hover transition-all transition-8 border-gray-500 border-[3px] px-[40px] py-[6px]",
        className
      );
      break;
    case buttonVariants.OUTLINED:
      style = clsx(
        "rounded-full border-gray-500 border-[3px] transition-all transition-8 px-[40px] py-[6px] bg-transparent text-lightGrey hover:text-gray-900 hover:bg-darkGrey ",
        className
      );
      break;
    default:
      break;
  }
  return <button className={clsx(style, className)}>{children}</button>;
}
