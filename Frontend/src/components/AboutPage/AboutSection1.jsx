import "./AboutSection1.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import anime from "animejs";
import AboutTabs from "./AboutTabs.jsx";

const AboutSection1 = () => {
  useEffect(() => {
    ScrollReveal().reveal(".sectionzero-container-top-2", {
      duration: 100,
      origin: "top",
      distance: "100px",
    });
    ScrollReveal().reveal(".sectionzero-container-top", {
      beforeReveal: (el) => {
        anime({
          targets: el,
          translateX: ["-500px", "0px"],
          duration: 4500,
        });
      },
    });
    ScrollReveal().reveal(".sectionzero-container-bottom", {
      beforeReveal: (el) => {
        anime({
          targets: el,
          translateY: ["500px", "0px"],
          duration: 5000,
        });
      },
    });

    anime({
      targets: "#demo-svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 17000,
      direction: "alternate",
      loop: false,
    });
  });

  return (
    <div className="aboutsectionone-section">
      <div className="max-w-screen-2xl mx-auto">
        <div className="header-margin"></div>
        <div className="aboutsectionone-container flex flex-col justify-center">
          <h2 className="aboutsectionone-header text-center underline underline-offset-8">
            More About Me
          </h2>
          <div className="tabs-container">
            <AboutTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
