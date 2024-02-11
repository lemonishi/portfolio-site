import Flickity from "react-flickity-component";
import ProfileCard from "./ProjectCard.jsx";
import "../Flickity.css";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  groupCells: 1,
  autoPlay: 3000,
  prevNextButtons: false,
};

const profileProps = [
  {
    title: "CV Creator",
    description:
      "A simple form to generate a CV, exportable to PDF. I built this while learning state management.",
    background: "url(public/cv-preview.png)",
  },
  {
    title: "Python",
    description: "Python",
  },
  {
    title: "Python",
    description: "Python",
  },
];

export default function ProjectSectionTest() {
  return (
    <section className="mb-6 p-6">
      <div className="flex justify-center">
        <div className="flex items-center gap-2 mb-8 max-w-screen-xl w-full">
          <h1 className="text-white text-2xl font-bold text-nowrap md:text-5xl">
            My projects
          </h1>
          <hr className="w-full" />
        </div>
      </div>
      <div className="z-0">
        <Flickity
          className="Slider"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {profileProps.map((framework, index) => {
            return (
              <div className="mr-10 w-full max-w-[700px]">
                <ProfileCard
                  key={index}
                  {...framework}
                />
              </div>
            );
          })}
        </Flickity>
      </div>
    </section>
  );
}
