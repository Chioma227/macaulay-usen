import React from "react";
import Image from "next/image";
//image props
interface imageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  extension: "png" | "jpg" | "jpeg" | "svg";
}

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  extension,
  className,
}: imageProps) => {
  
  //dynamic image src
  const dynamicSrc = `/assets/imgs/${src}.${extension}`;

  return (
    src && (
      <>
        <Image
          className={className}
          src={dynamicSrc}
          alt={alt}
          width={width}
          height={height}
        />
      </>
    )
  );
};

export default ImageComponent;
