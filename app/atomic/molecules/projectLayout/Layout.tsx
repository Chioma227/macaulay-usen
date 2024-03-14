import React from "react";
import Container from "../../atoms/container/Container";
import Link from "next/link";
import { containerVariants } from "../../atoms/container/containerVariants";
import Image from "../../atoms/image/Image";

interface LayoutProps {
  title: string;
  imgSrc: string;
  gitHub: string;
  liveDemo: string;
  className?: string;
  description: string;
}

const Layout = ({
  title,
  imgSrc,
  gitHub,
  liveDemo,
//   className,
  description,
}: LayoutProps) => {
  const imgExt = "jpg";
  return (
    <>
      <Container variant={containerVariants.FLEXFIT} className="flex-col shadow-lg shadow-ashBlack">
        <Image
          src={imgSrc}
          alt=""
          width={200}
          height={200}
          extension={imgExt}
        />
        <section>
          <h3>{title}</h3>
          <p>{description}</p>
          <Container variant={containerVariants.FLEXFIT}>
            <Link href={liveDemo}>Preview</Link>
            <Link href={gitHub}>Github</Link>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Layout;
