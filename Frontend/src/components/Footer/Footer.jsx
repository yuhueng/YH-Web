import "./Footer.css";

function Footer() {
  const email = "yuhueng_business@gmail.com";
  const subject = "";
  const body = "";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <footer className="footer-section py-6" id="footer">
      <div className="container">
        <div className="row justify-between">
          <div className="col md:w-9/12">
            <p>© Ng Yu Hueng 2024 </p>
          </div>
          <div className="col md:w-3/12 flex md:justify-end">
            <a className="footer-social-icon" href={mailtoLink}>
              <i className="footer-social-links fas fa-envelope email-icon"></i>
            </a>
            <a
              className="footer-social-icon"
              href="https://github.com/yuhueng"
              title="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="footer-social-links fab fa-github-square"></i>
            </a>
            <a
              className="footer-social-icon"
              href="https://www.linkedin.com/in/ngyuhueng"
              title="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="footer-social-links fab fa-linkedin"></i>
            </a>
            {/* <a className="footer-social-icon" href="#" title="Instagram" target="_blank"
                        rel="noopener noreferrer">
                        <i className="footer-social-links fab fa-instagram"></i>
                    </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
