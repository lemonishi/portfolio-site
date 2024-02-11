export default function ProjectCard(props) {
  return (
    <div
      className={`flex flex-col items-stretch border-2 rounded-lg border-white aspect-[3/4] touch-none bg-no-repeat bg-center bg-cover p-4`}
      key={props.index}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), ${props.background}`,
      }}
    >
      <div className="h-2/3"></div>
      <section className="flex flex-col grow gap-4 text-white md:text-xl">
        <h2 className="font-bold text-2xl md:text-5xl">{props.title}</h2>
        <p>{props.description}</p>
      </section>
    </div>
  );
}
