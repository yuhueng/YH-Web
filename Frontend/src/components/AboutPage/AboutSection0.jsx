import "./AboutSection0.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import anime from "animejs";
import Gallery from "./Gallery.jsx";

const Section0 = () => {
  useEffect(() => {
//     ScrollReveal().reveal(".sectionzero-container-top-2", {
//       duration: 100,
//       origin: "top",
//       distance: "100px",
//     });
//     ScrollReveal().reveal(".sectionzero-container-top", {
//       beforeReveal: (el) => {
//         anime({
//           targets: el,
//           translateX: ["-500px", "0px"],
//           duration: 4500,
//         });
//       },
//     });
//     ScrollReveal().reveal(".sectionzero-container-bottom", {
//       beforeReveal: (el) => {
//         anime({
//           targets: el,
//           translateY: ["500px", "0px"],
//           duration: 5000,
//         });
//       },
//     });

//     anime({
//       targets: "#demo-svg path",
//       strokeDashoffset: [anime.setDashoffset, 0],
//       easing: "easeInOutQuad",
//       duration: 17000,
//       direction: "alternate",
//       loop: false,
//     });
  });

  return (
    <div className="aboutsectionzero-section bg-cornsilk">
      <div className="max-w-screen-2xl mx-auto">
        <div className="aboutsectionzero-container">
          <div className="aboutsectionzero-gallery">
            <Gallery />
          </div>
        </div>
      </div>
      <div id="about" className="sectionone-anchor"></div>
    </div>
  );
};

export default Section0;
