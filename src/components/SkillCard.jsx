export default function SkillsTab(props) {
  return (
    <div
      className={`flex gap-2 ${props.bgColor} border-2 border-white rounded-md min-w-24 p-2 px-4`}
    >
      <img
        src={props.image}
        alt={props.name}
        className="h-[32px] w-[32px]"
      />
      <h2 className={`flex items-center font-semibold ${props.fontColor}`}>
        {props.name}
      </h2>
    </div>
  );
}
