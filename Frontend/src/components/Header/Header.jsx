import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container fixed">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="header-left">
            <Link to={`/`}>
              <img
                src="images/nyhlogo.png"
                alt="Ng Yu Hueng"
                className="header-logo"
              />
            </Link>
          </div>
          <nav className="header-right">
            <ul className="mobileDesktop">
              {location.pathname === "/" && (
                <>
                  <li>
                    <a
                      href="#home"
                      className="header-right-navitem mobileDesktop-items "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="header-right-navitem mobileDesktop-items "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="header-right-navitem mobileDesktop-items "
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacts"
                      className="header-right-navitem mobileDesktop-items "
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a
                      href="Ng Yu Hueng Resume (Sept).pdf"
                      download="Ng Yu Hueng Resume (Sept).pdf"
                      className="header-right-navitem-special"
                    >
                      Download CV
                    </a>
                  </li>
                </>
              )}
              {location.pathname === "/About" && (
                <>
                  <li>
                    <a href="#" className="header-right-navitem ">
                      <Link to={`/`}>Home</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="Ng Yu Hueng Resume (July 2024).pdf"
                      download="Ng Yu Hueng Resume (July 2024).pdf"
                      className="header-right-navitem-special"
                    >
                      Download CV
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
