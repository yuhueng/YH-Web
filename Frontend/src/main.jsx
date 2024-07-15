import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import Section0 from "./components/Sections/Section0.jsx";
import Section1 from "./components/Sections/Section1.jsx";
import Section2 from "./components/Sections/Section2.jsx";
import Section3 from "./components/Sections/Section3.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import "versoly-ui";
import Section4 from "./components/Sections/Section4.jsx";


// import TestSection1 from "./components/Tests/TestSection1.jsx";
// import TestSection2 from "./components/Tests/TestSection2.jsx";
// import TestSection3 from "./components/Tests/TestSection3.jsx";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Section0 />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />


    {/* <Section2 /> */}
    {/* <TestSection2 /> */}
    {/* <TestSection1 /> */}
    {/* Make Your Own Component */}
    <script src="../path/to/versoly-ui/dist/versoly-ui.js"></script>
  </React.StrictMode>
);
