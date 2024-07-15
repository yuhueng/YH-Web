import "./Section4.css";
import Section4Form from "./Section4Form";

const Section4 = () => {
  return (
    <div className="sectionfour-section bg-cornsilk">
        <div className="max-w-screen-2xl mx-auto">
        <div className="sectionfour-container">
          <div className="sectionfour-contacts text-center text-mossgreen underline underline-offset-8">
            <h2>Contact Me</h2>
          </div>
          <div className="section4-form">
            <Section4Form />
          </div>
          <div id="" className="sectionfive-anchor"></div>
        </div>
        </div>
    </div>
  );
};

export default Section4;
