import Header from "../Header/Header.jsx";
import Section0 from "../Sections/Section0.jsx";
import Section1 from "../Sections/Section1.jsx";
import SectionExperience from "../Sections/SectionExperience.jsx";
import Section2 from "../Sections/Section2.jsx";
import SectionCertifications from "../Sections/SectionCertifications.jsx";
import Section3 from "../Sections/Section3.jsx";
import Section4 from "../Sections/Section4.jsx";
import Footer from "../Footer/Footer.jsx";
import "../../index.css";

const Root = () => {
  return (
    <div>
      <Header />
      <Section0 />
      <Section1 />
      <SectionExperience />
      <Section2 />
      <SectionCertifications />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Root;
