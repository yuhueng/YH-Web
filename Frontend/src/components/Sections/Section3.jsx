import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Section3.css";
import projects from "./ProjectData.js";

const Section3 = () => {
  return (
    <div className="sectionthree-section bg-cornsilk">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectionthree-container flex flex-col">
          <div className="sectionthree-projects text-center text-mossgreen underline underline-offset-8">
            <h2>Past Projects</h2>
          </div>
          <div className="projects-container flex flex-col">
            {projects.map((project) => (
              <IndividualProjects key={project.id} project={project} />
            ))}
          </div>
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

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div ref={ref} className="project flex flex-col" style={{ scale }}>
      {project.id % 2 === 0 ? (
        <div className="flex flex-col">
          <h4 className="project-title">{project.title}</h4>
          <p className="project-date">{project.date}</p>
          <div className="individualproject-container flex flex-row">
            <div className="projectimage-container">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="individualproject-desc flex flex-col">
              <p className="project-desc-tag text-darkgrey">Description:</p>
              <p className="project-desc text-mossgreen">{project.desc1}</p>
              <p className="project-desc-tag text-darkgrey">Achievements:</p>
              <p className="project-desc text-mossgreen">{project.desc2}</p>
              <p className="project-desc-tag text-darkgrey">
                Project Repo and More:
              </p>
              <div className="project-links flex flex-row">
                {project.github && (
                  <a
                    className="social-link"
                    href={project.github}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-deco fab fa-github-square text-7xl"></i>
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
                    <i className="icon-deco fab fa-linkedin text-7xl"></i>
                  </a>
                )}
                {!project.github && !project.linkedin && (
                  <p className="project-desc text-mossgreen">
                    {project.nosocials}
                  </p>
                )}
              </div>
              <p className="project-desc-tag text-darkgrey">
                Technologies Used:
              </p>
              <div className="techstack-icons flex flex-row"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <h4 className=" project-title text-right">{project.title}</h4>
          <p className="project-date text-right">{project.date}</p>
          <div className="flex flex-row">
            <div className="individualproject-desc flex flex-col">
              <p className="project-desc-tag text-darkgrey">Description:</p>
              <p className="project-desc text-mossgreen">{project.desc1}</p>
              <p className="project-desc-tag text-darkgrey">Achievements:</p>
              <p className="project-desc text-mossgreen">{project.desc2}</p>
              <p className="project-desc-tag text-darkgrey">
                Project Repo and More:
              </p>
              <div className="project-links flex flex-row">
                {project.github && (
                  <a
                    className="social-link"
                    href={project.github}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-deco fab fa-github-square text-7xl"></i>
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
                    <i className="icon-deco fab fa-linkedin text-7xl"></i>
                  </a>
                )}
                {!project.github && !project.linkedin && (
                  <p className="project-desc text-mossgreen">
                    {project.nosocials}
                  </p>
                )}
              </div>
              <p className="project-desc-tag text-darkgrey">
                Technologies Used:
              </p>
              <div className="techstack-icons flex flex-row"></div>
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
    techstack: PropTypes.string,
  }).isRequired,
};

export default Section3;
