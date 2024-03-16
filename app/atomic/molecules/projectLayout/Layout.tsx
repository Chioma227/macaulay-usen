"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "../../atoms/image/Image";
import Container from "../../atoms/container/Container";
import { containerVariants } from "../../atoms/container/containerVariants";

interface LayoutProps {
  title: string;
  imgSrc: string;
  gitHub: string;
  liveDemo: string;
  description: string;
}

const Layout = ({
  title,
  imgSrc,
  gitHub,
  liveDemo,
  description,
}: LayoutProps) => {
  const imgExt = "jpg";
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
          className="w-full h-[200px] object-cover"
        />
      </section>
      <section className="p-[20px]">
        <h3 className="text-[20px] font-semibold text-hover mb-[10px]">
          {title}
        </h3>
        <p className="text-lightGrey text-[14px] mb-[10px]">{description}</p>
        <Container variant={containerVariants.FLEXFIT} className="gap-[9px]">
          <Link href={liveDemo}>Preview</Link>
          <Link href={gitHub}>Github</Link>
        </Container>
      </section>
    </Container>
  );
};

export default Layout;
