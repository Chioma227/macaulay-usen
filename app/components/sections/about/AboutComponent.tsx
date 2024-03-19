import React from "react";
import ImageComponent from "@/app/atomic/atoms/image/Image";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants } from "@/app/atomic/atoms/container/containerVariants";

const AboutComponent = () => {
  const imgExt = "jpg";
  return (
    <main className="bg-custom-bg h-fit bg-no-repeat bg-cover bg-center backdrop-blur-lg">
      <section className="backdrop-brightness-[.3] h-fit backdrop-blur-[2px]">
        <Container variant={containerVariants.PT} className="h-fit pb-[7%]">
          <div className="gradient-text text-lightGrey text-center md:text-[40px] sm:text-[30px] text-[30px] font-bold text-darkGrey select-none mb-[7%]">
            About Me
          </div>
          <section className="lg:block hidden">
            <Container
              variant={containerVariants.FLEXCENTER}
              className="gap-[30px]"
            >
              <Container variant={containerVariants.BOX} className="border-l-[3px] border-l-burgundry">
                <p className="text-slate-200 text-wrap">
                  I am Macaulay Ubon, a mobile developer with more than 5 years
                  of experience in the field. I bring a versatile skill set to
                  the table with a solid foundation in Java, C++, Kotlin, Dart,
                  Javascript, and Swift. <br /> My Journey began with a passion
                  for coding which led me to specialize in mobile app
                  development, where i discovered my knack for bridging the gap
                  between creativity and technical execution. <br /> I am a
                  forward thinking mobile developer who is not only capable of
                  meeting your project&apos;s needs but also driven to exceed
                  them. I&apos;m eager to bring my skills, experience, and
                  passion for mobile development to your team and contribute to
                  the success of your projects.
                </p>
              </Container>
              <ImageComponent
                src="hero"
                alt="macaulay"
                width={300}
                height={300}
                extension={imgExt}
                className="rounded-lg"
              />
            </Container>
          </section>
            <Container
              variant={containerVariants.FLEXCENTER}
              className="gap-[30px] lg:hidden flex flex-col-reverse items-center justify-center space-y-[20px]"
            >
              <Container variant={containerVariants.BOX} className="border-l-[3px] border-l-burgundry">
                <p className="text-slate-200">
                  I am Macaulay Ubon, a mobile developer with more than 5 years
                  of experience in the field. I bring a versatile skill set to
                  the table with a solid foundation in Java, C++, Kotlin, Dart,
                  Javascript, and Swift. <br /> My Journey began with aa passion
                  for coding which led me to specialize in mobile app
                  development, where i discovered my knack for bridging the gap
                  between creativity and technical execution. <br /> I am a
                  forward thinking mobile developer who is not only capable of
                  meeting your project&apos;s needs but also driven to exceed
                  them. I&apos;m eager to bring my skills, experience, and
                  passion for mobile development to your team and contribute to
                  the success of your projects.
                </p>
              </Container>
              <ImageComponent
                src="hero"
                alt="macaulay"
                width={300}
                height={300}
                extension={imgExt}
                className="rounded-lg"
              />
            </Container>
        </Container>
      </section>
    </main>
  );
};

export default AboutComponent;
