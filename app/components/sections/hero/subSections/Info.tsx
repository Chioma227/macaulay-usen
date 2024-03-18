import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Info = () => {
  return (
    <div>
      <h3 className="text-lightGrey md:text-[40px] text-[25px] leading-[40px] font-bold">
        Hey, <br />
        I&apos;m <span className="text-burgundry">Macaulay</span> <br />A Mobile
        Developer.
      </h3>
      <p className="md:mt-[20px] mt-[10px] text-gray-200">
        I handle software projects in the fintech and mobile banking industries.{" "}
        <br />
        Let&apos;s collaborate to create something extraordinary.
      </p>
      <a
        href="mailto:macaulayubon@gmail.com"
        className="flex items-center gap-[7px] mt-[20px]"
      >
        <p className="text-burgundry  font-semibold text-[19px]">
          {" "}
          Let&apos;s Talk
        </p>{" "}
        <MdOutlineMail className="text-burgundry text-[19px] mt-[3px]" />
      </a>
    </div>
  );
};

export default Info;
