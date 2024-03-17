import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Info = () => {
  return (
    <div>
      <h3 className="gradient-text md:text-[40px] text-[25px] leading-[40px] font-bold">
        Hey, <br />
        I&apos;m Macaulay <br />A Mobile Developer.
      </h3>
      <p className="md:mt-[20px] mt-[10px] text-gray-200">
        I handle software projects in the fintech and mobile banking industries.{" "}
        <br />
        Let&apos;s collaborate to create something extraordinary.
      </p>
      <a href="mailto:macaulayubon@gmail.com" className="flex items-center gap-[10px] mt-[20px]">
        <p className="text-slate-300 font-semibold text-[19px]"> Let&apos;s Talk</p> <MdOutlineMail className="text-slate-200"/>
      </a>
    </div>
  );
};

export default Info;
