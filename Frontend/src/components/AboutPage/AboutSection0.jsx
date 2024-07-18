import "./AboutSection0.css";
import { useState, useEffect } from "react";
import Gallery from "./Gallery.jsx";
import Gallery2 from "./Gallery2.jsx";

const Section0 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aboutsectionzero-section">
      <div className="max-w-screen-2xl mx-auto">
        <div className="aboutsectionzero-container">
          <h4 className="aboutsectionzero-header text-center underline underline-offset-8">
            Photo & Travel Memories
          </h4>
          <div className="aboutsectionzero-padding">
            <div className="aboutsectionzero-gallery">
              {isMobile ? <Gallery2 /> : <Gallery />}
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="sectionone-anchor"></div>
    </div>
  );
};

export default Section0;
