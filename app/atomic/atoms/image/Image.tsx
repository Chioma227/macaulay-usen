import React from "react";

//image props
interface imageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  extension: "png" | "jpg" | "jpeg" | "svg";
}

const Image = ({
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
    <img
      className={className}
      src={dynamicSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
