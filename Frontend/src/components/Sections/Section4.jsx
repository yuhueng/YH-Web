import './Section4.css';
import Section4Form from './Section4Form.jsx';

const Section4 = () => {

  return (
    <div className="bg-cornsilk flex justify-center">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectionfour-container">
          <div className="sectionfour-contacts text-center text-mossgreen underline underline-offset-8">
            <h2>Contact Me</h2>
          </div>
          <div className="section4-form">
            <div className="section4form-left">
              <Section4Form />
            </div>
          </div>
          <div id="" className="sectionfive-anchor"></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
