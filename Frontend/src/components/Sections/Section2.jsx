import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Section2.css";
import projects from "../../shared-data/ProjectData.js";
import techstackicons from "../../shared-data/TechStackData.js";

const Section2 = () => {
  return (
    <div className="sectiontwo-section bg-cornsilk">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectiontwo-container">
          <div className="sectiontwo-projects text-center text-mossgreen underline underline-offset-8">
            <h2>Past Projects</h2>
          </div>
          <div className="projects-container">
            {projects.map((project) => (
              <IndividualProjects key={project.id} project={project} />
            ))}
          </div>
          <div id="" className="sectionthree-anchor"></div>
        </div>
      </div>
    </div>
  );
};

const IndividualProjects = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div ref={ref} className="individualproject-container" style={{ scale }}>
      {project.id % 2 === 0 ? (
        <div className="project">
          <h4 className="project-title">{project.title}</h4>
          <p className="project-date">{project.date}</p>
          <div className="project-main">
            <div className="projectimage-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="individualproject-desc flex flex-col">
              <h6 className="project-desc-tag text-darkgrey">Description:</h6>
              <p className="project-desc text-mossgreen">{project.desc1}</p>
              {project.desc2 && (
                  <div>
                    <h6 className="project-desc-tag text-darkgrey">Achievements:</h6>
                    <p className="project-desc text-mossgreen">{project.desc2}</p>
                  </div>
                )}
              <h6 className="project-desc-tag text-darkgrey">
                Links:
              </h6>
              <div className="project-links flex flex-row">
                {project.github && (
                  <a
                    className="social-link"
                    href={project.github}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-deco fab fa-github-square"></i>
                  </a>
                )}
                {project.linkedin && (
                  <a
                    className="social-link"
                    href={project.linkedin}
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-deco fab fa-linkedin"></i>
                  </a>
                )}
                {!project.github && !project.linkedin && (
                  <p className="project-desc text-mossgreen">
                    {project.nosocials}
                  </p>
                )}
              </div>
              <h6 className="project-desc-tag text-darkgrey">
                Technologies Used:
              </h6>
              <div className="techstack-icons">
                  {project.techstack.map((techstackicon) => (
                    <img
                      key={techstackicon}
                      className="TechstackIcon"
                      src={techstackicons[techstackicon]}
                    />
                  ))} 
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <h4 className=" project-title">{project.title}</h4>
          <p className="project-date">{project.date}</p>
          <div className="project-main">
            <div className="individualproject-desc flex flex-col">
              <h6 className="project-desc-tag text-darkgrey">Description:</h6>
              <p className="project-desc text-mossgreen">{project.desc1}</p>
              
                {project.desc2 && (
                  <div>
                    <h6 className="project-desc-tag text-darkgrey">Achievements:</h6>
                    <p className="project-desc text-mossgreen">{project.desc2}</p>
                  </div>
                )}
              
              <h6 className="project-desc-tag text-darkgrey">
               Links:
              </h6>
              <div className="project-links flex flex-row">
                {project.github && (
                  <a
                    className="social-link"
                    href={project.github}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-deco fab fa-github-square "></i>
                  </a>
                )}
                {project.linkedin && (
                  <a
                    className="social-link"
                    href={project.linkedin}
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-deco fab fa-linkedin"></i>
                  </a>
                )}
                {!project.github && !project.linkedin && (
                  <p className="project-desc text-mossgreen">
                    {project.nosocials}
                  </p>
                )}
              </div>
              <h6 className="project-desc-tag text-darkgrey">
                Technologies Used:
              </h6>
              <div className="techstack-icons">
                {project.techstack.map((techstackicon) => (
                <img
                  key={techstackicon}
                  className="TechstackIcon"
                  src={techstackicons[techstackicon]}
                  />
                ))}   
              </div>
            </div>
            <div className="projectimage-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

IndividualProjects.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    nosocials: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    techstack: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Section2;
