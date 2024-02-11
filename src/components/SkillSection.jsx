import Skills from "./Skills";

export default function SkillSection() {
  const languageProps = [
    {
      image: "java.svg",
      name: "Java",
      bgColor: "bg-[#444444]",
      fontColor: "text-white",
    },
    {
      image: "python.svg",
      name: "Python",
      bgColor: "bg-[#F5F5DC]",
      fontColor: "text-black",
    },
    {
      image: "javascript.svg",
      name: "Javascript",
      bgColor: "bg-[#1976D2]",
      fontColor: "text-white",
    },
  ];
  const frontendProps = [
    {
      image: "react.svg",
      name: "React",
      bgColor: "bg-[#B3E5FC]",
    },
    {
      image: "tailwind.svg",
      name: "TailwindCSS",
      bgColor: "bg-[#F4BBFF]",
    },
  ];

  const backendProps = [
    {
      image: "spring.svg",
      name: "Spring",
      bgColor: "bg-[#009E60]",
      fontColor: "text-white",
    },
  ];

  return (
    <div className="flex justify-center">
      <section className="flex flex-col items-center p-6 max-w-screen-xl w-full">
        <div className="flex items-center gap-2 w-full grow">
          <h1 className="text-white text-2xl font-bold md:text-5xl">Skills</h1>
          <hr className="w-full" />
        </div>
        <div className="max-w-screen-md w-full">
          <Skills
            skillProps={languageProps}
            title="Languages"
          />
          <Skills
            skillProps={frontendProps}
            title="Frontend"
          />
          <Skills
            skillProps={backendProps}
            title="Backend"
          />
        </div>
      </section>
    </div>
  );
}
