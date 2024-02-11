import Intro from "./Intro";
import MoreAboutMe from "./MoreAboutMe";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

export default function HomePage() {
  return (
    <main>
      <Intro />
      <SkillSection />
      <ProjectSection />
      <MoreAboutMe />
    </main>
  );
}
