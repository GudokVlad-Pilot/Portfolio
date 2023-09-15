import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../content/experience"
import "../styles/Pages.css"

const ExperiencePage = () => {
  return (
    <div className="topStyle">
      {experiences.map(experience => (
        <ExperienceCard key={experience.id}
          id={experience.id}
          position={experience.position}
          title={experience.title}
          logo={experience.logo}
          duties={experience.duties} />
      ))}
    </div>
  );
};

export default ExperiencePage;