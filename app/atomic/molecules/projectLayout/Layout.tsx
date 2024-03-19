import React from "react";
import Link from "next/link";
import Image from "../../atoms/image/Image";
import { FaAppStoreIos } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BiLogoPlayStore } from "react-icons/bi";
import Container from "../../atoms/container/Container";
import { containerVariants } from "../../atoms/container/containerVariants";

interface LayoutProps {
  title: string;
  imgSrc: string;
  appStore: string | any;
  playStore: string;
  description: string;
}

const Layout = ({
  title,
  imgSrc,
  appStore,
  playStore,
  description,
}: LayoutProps) => {
  const imgExt = "jpeg";
  return (
    <Container
      variant={containerVariants.FLEXFIT}
      className="flex-col shadow-lg shadow-ashBlack rounded-lg"
    >
      <section className="w-full h-[200px]">
        <Image
          src={imgSrc}
          alt=""
          width={200}
          height={200}
          extension={imgExt}
          className="w-full h-[200px] object-cover rounded-tr-lg rounded-tl-lg"
        />
      </section>
      <section className="p-[20px]">
        <h3 className="text-[20px] font-semibold text-lightGrey mb-[10px]">
          {title}
        </h3>
        <p className=" text-[14px] mb-[20px] text-hover">{description}</p>
        <Container variant={containerVariants.FLEXFIT} className="gap-[15px] self-end">
         {appStore && <Link href={appStore} className="text-burgundry font-semibold underline text-[25px]"><FaAppStoreIos/></Link>}
          <Link href={playStore} className="text-burgundry font-semibold underline flex text-[25px]"><BiLogoPlayStore/></Link>
        </Container>
      </section>
    </Container>
  );
};

export default Layout;
