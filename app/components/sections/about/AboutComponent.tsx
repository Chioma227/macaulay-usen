import React from "react";
import Container from "@/app/atomic/atoms/container/Container";
import ImageComponent from "@/app/atomic/atoms/image/Image";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const AboutComponent = () => {
  const imgExt = "jpg";
  return (
    <main className="bg-custom-bg h-fit bg-no-repeat bg-cover bg-center bg-blend-darken backdrop-brightness-50">
     <Container variant={containerVariants.PT}>
     <Container variant={containerVariants.FLEXBETWEEN}>
      <section>
        <p>About Me</p>
       <Container variant={containerVariants.BOX} >
       <p className="text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex
          molestias eos dolor fugit iste sapiente harum, repellat odio dolorum
          eligendi nisi? Reprehenderit, accusamus tempora officiis amet ab
          dolores autem tenetur, sint maiores repudiandae aspernatur dolorem,
          vel odit quia aut!
        </p>
       </Container>
      </section>
      <section>
        <ImageComponent
          src="hero"
          alt="macaulay"
          width={200}
          height={200}
          extension={imgExt}
        />
      </section>
    </Container>
     </Container>
    </main>
  );
};

export default AboutComponent;
