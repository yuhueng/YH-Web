import "./Section1.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import anime from "animejs";

const Section1 = () => {
  function animateAll() {
    // Animation for .sectionone-about
    anime({
      targets: ".sectionone-about",
      translateY: ["-400px", "0px"],
      duration: 5000,
      opacity: 1,
    });

    // Animation for .sectionone-container-left
    anime({
      targets: ".sectionone-container-left",
      translateX: ["-400px", "0px"],
      duration: 5000,
      opacity: 1,
    });

    // Animation for .sectionone-container-right-header
    anime({
      targets: ".sectionone-container-right-header",
      translateX: ["400px", "0px"],
      duration: 5000,
      opacity: 1,
    });

    anime({
      targets: ".sectionone-container-right-text",
      translateX: ["400px", "0px"],
      duration: 5000,
      opacity: 1,
    });
    anime({
      targets: ".sectionone-container-right-button-div",
      translateY: ["400px", "0px"],
      duration: 5000,
      opacity: 1,
    });
  }
  useEffect(() => {
    ScrollReveal().reveal(".sectionone-container-right-header", {
      beforeReveal: animateAll,
    });
  });

  return (
    <div className="sectionone-section bg-mossgreen">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectionone-container flex flex-col">
          <h2 className="sectionone-about text-center text-cornsilk underline underline-offset-8">
            About Me
          </h2>
          <div className="sectionone-container-main flex flex-row">
            <div className="sectionone-container-left">
              <img
                src="images/nyhpic1-low.jpg"
                alt="NYHPIC1"
                className="sectionone-container-left-img"
              />
            </div>
            <div className="sectionone-container-right flex flex-col">
              <h3 className="sectionone-container-right-header text-papayawhip">
                Hello! Once again, I am Yu Hueng
              </h3>
              <p className="sectionone-container-right-text text-white">
                Currently studying <u>Computer Science and Design (CSD)</u> at
                Singapore University of Technology and Design (SUTD).
              </p>
              <p className="sectionone-container-right-text text-white">
                I have developed a passion for coding over the years, at the
                same time, also cultivated a love for traveling and exploring
                new cultures.
              </p>
              <div className="sectionone-container-right-button-div">
                <a
                  className="sectionone-container-right-button text-tan2"
                  href="#"
                >
                  Find out more about me!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="projects" className="sectiontwo-anchor"></div> */}
    </div>
  );
};

export default Section1;
