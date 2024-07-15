import "./Header.css";

function Header() {
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
                  href="#contact"
                  className="header-right-navitem text-mossgreen"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="header-right-navitem-special text-cornsilk"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
