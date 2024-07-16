import "./Header.css";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container fixed bg-cornsilk">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="header-left">
            <img
              src="images/nyhlogo.png"
              alt="Ng Yu Hueng"
              className="header-logo"
            />
          </div>
          <nav className="header-right">
            <ul className="md:flex items-center gap-16 hidden">
            {location.pathname === '/' && (
              <>
                <li>
                  <a href="#home" className="header-right-navitem text-mossgreen">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="header-right-navitem text-mossgreen"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="header-right-navitem text-mossgreen"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="header-right-navitem text-mossgreen"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    href="images/Yu Hueng Resume (July 2024).pdf"
                    download="Ng Yu Hueng Resume (July).pdf"
                    className="header-right-navitem-special text-cornsilk"
                  >
                    Download CV
                  </a>
                </li>
              </>
            )}
            {location.pathname === '/About' && (
              <>
                <li>
                  <a href="#" className="header-right-navitem text-mossgreen">
                  <Link to={`/`}>Home</Link>
                  </a>
                </li>
                <li>
                  <a
                    href="images/Yu Hueng Resume (July 2024).pdf"
                    download="Ng Yu Hueng Resume (July).pdf"
                    className="header-right-navitem-special text-cornsilk"
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
}

export default Header;
