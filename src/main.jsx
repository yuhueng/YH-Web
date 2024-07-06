import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import "versoly-ui"; // Import Versoly UI components

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    {/* Make Your Own Component */}
    <script src="../path/to/versoly-ui/dist/versoly-ui.js"></script>
  </React.StrictMode>
);
