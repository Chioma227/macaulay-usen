import React from "react";
import ImageComponent from "@/app/atomic/atoms/image/Image";
import Container from "@/app/atomic/atoms/container/Container";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";
import clsx from "clsx";
// import { IoIosPhonePortrait } from "react-icons/io";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const data = [
  {
    icon: <MdOutlineMail />,
    text: "macaulayubon@gmail.com",
  },
  {
    icon: <CiLocationOn />,
    text: "Nigeria",
  },
  {
    icon: <FiBriefcase />,
    text: "Full-time / Freelancer",
  },
];

const SimpleBio = () => {
  const imgExt = "jpg";

   const handleResumeDownload = () => {
    const pdfUrl = "/assets/pdf/MacaulayUbon.pdf";
    const linkElement = document.createElement("a");
    linkElement.href = pdfUrl;
    linkElement.setAttribute("download", "MacaulayUbon")
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };
  return (
    <main className="border-[3px] w-fit  border-t-lightGreen border-l-lightGreen rounded-tl-[30%] border-b-transparent border-r-transparent">
      <Container
        variant={containerVariants.FLEXFIT}
        className="flex-col space-y-[15px] shadow-lg shadow-ashBlack md:px-[40px] px-[20px] text-gray-200 text-[15px] py-[35px] border-2  rounded-tl-[30%] rounded-br-[30%]"
      >
        <section className="border-[3px] border-lightGreen rounded-full">
          <ImageComponent
            src="about"
            alt="macaulay"
            width={60}
            height={50}
            extension={imgExt}
            className="rounded-full object-cover md:h-[80px] md:w-[80px] w-[60px] h-[60px]"
          />
        </section>
        <section className="text-center">
          <h3 className="text-white font-bold md:text-[23px] text-[18px]">Macaulay Ubon</h3>
          <p>Mobile Developer</p>
        </section>
        <>
          {data.map(({ icon, text }) => {
            return (
              <Container
              key={text}
                variant={containerVariants.FLEXBLOCK}
                className="gap-[9px] text-left"
              >
                <p>{icon}</p>
                <p>{text}</p>
              </Container>
            );
          })}
        </>
        <button
          // onClick={()=>handleResumeDownload}
          className={clsx(
            "rounded-full cursor-pointer mt-[15px] bg-lightGrey text-ashBlack w-full text-center border-[3px] transition-all",
            " transition-8 px-[20px] py-[6px] bg-transparent text-lightGrey hover:text-gray-900 hover:bg-darkGrey "
          )}
        >
          My Resume
        </button>
      </Container>
    </main>
  );
};

export default SimpleBio;
