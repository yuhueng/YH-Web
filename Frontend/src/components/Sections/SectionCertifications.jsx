import "./Section2.css";
import certifications from "../../shared-data/CertificationData.js";
import { IndividualProjects } from "./Section2.jsx";

const SectionCertifications = () => {
  return (
    <div className="sectiontwo-section">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectiontwo-container">
          <div className="sectiontwo-projects text-center underline underline-offset-8">
            <h2>Certifications</h2>
          </div>
          <div className="projects-container">
            {certifications.map((certification) => (
              <IndividualProjects
                key={certification.id}
                project={certification}
              />
            ))}
          </div>
          <div id="" className="sectionthree-anchor"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionCertifications;
