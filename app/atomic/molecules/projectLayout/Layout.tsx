import React from "react";
import Link from "next/link";
import Image from "../../atoms/image/Image";
import Container from "../../atoms/container/Container";
import { MdArrowOutward } from "react-icons/md";
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
        <h3 className="text-[20px] font-semibold text-hover mb-[10px]">
          {title}
        </h3>
        <p className="text-lightGrey text-[14px] mb-[10px]">{description}</p>
        <Container variant={containerVariants.FLEXFIT} className="gap-[9px] self-end">
         {appStore && <Link href={appStore} className="text-lightGrey font-semibold underline text-[12px]">Download on Apple Store</Link>}
          <Link href={playStore} className="text-burgundry font-semibold underline flex text-[12px]">Download on GooglePlay Store<MdArrowOutward/></Link>
        </Container>
      </section>
    </Container>
  );
};

export default Layout;
