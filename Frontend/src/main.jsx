import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Pages/Root";
import About from "./components/Pages/About";
// import Header from "./components/Header/Header.jsx";
// import Section0 from "./components/Sections/Section0.jsx";
// import Section1 from "./components/Sections/Section1.jsx";
// import Section2 from "./components/Sections/Section2.jsx";
// import Section3 from "./components/Sections/Section3.jsx";
// import Section4 from "./components/Sections/Section4.jsx";
// import Section4Form from "./components/Sections/Section4Form.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
