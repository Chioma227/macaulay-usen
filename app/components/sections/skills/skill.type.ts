//types
type skillName =
  | "Java"
  | "C++"
  | "Kotlin"
  | "Dart"
  | "JavaScript"
  | "Swift"

type imgSrc =
  | "java"
  | "c++"
  | "kotlin"
  | "dart"
  | "jS"
  | "swift"

type imgAlt =
  | "Java"
  | "C++"
  | "Kotlin"
  | "Dart"
  | "JavaScript"
  | "Swift"


  //skillset data
export const skillsData: { name: skillName; src: imgSrc; alt: imgAlt }[] = [
    {
      name: "Java",
      src: "java",
      alt: "Java",
    },
    {
      name: "C++",
      src: "c++",
      alt: "C++",
    },
    {
      name: "Kotlin",
      src: "kotlin",
      alt: "Kotlin",
    },
    {
      name: "Dart",
      src: "dart",
      alt: "Dart",
    },
    {
      name: "JavaScript",
      src: "jS",
      alt: "JavaScript",
    },
    {
      name: "Swift",
      src: "swift",
      alt: "Swift",
    },
  ];