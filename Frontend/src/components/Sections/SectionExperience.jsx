import "./Section2.css";
import experiences from "../../shared-data/ExperienceData.js";
import { IndividualProjects } from "./Section2.jsx";

const SectionExperience = () => {
  return (
    <div className="sectiontwo-section">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectiontwo-container">
          <div className="sectiontwo-projects text-center underline underline-offset-8">
            <h2>Experience</h2>
          </div>
          <div className="projects-container">
            {experiences.map((experience) => (
              <IndividualProjects key={experience.id} project={experience} />
            ))}
          </div>
          <div id="projects" className="sectiontwo-anchor"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionExperience;
