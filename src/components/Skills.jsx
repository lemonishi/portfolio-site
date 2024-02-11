import SkillCard from "./SkillCard";

export default function Skills({ skillProps, title }) {
  return (
    <div className="flex flex-col gap-4 p-8 w-full">
      <div className="text-white font-bold bg-sky-blue p-2 border-2 border-white border-radius rounded-md hover:bg-opacity-70 w-full text-center">
        <h1>{title}</h1>
      </div>
      <div className="flex basis-0 flex-wrap gap-4">
        {skillProps.map((framework) => (
          <SkillCard {...framework} />
        ))}
      </div>
    </div>
  );
}
