import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container" id="footer">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <a className="block h5 mb-6 font-semibold text-white" href="#">
              Acme Company
            </a>
            <div className="link-group">
              <a className="link" href="#">
                Sign Up
              </a>
              <a className="link" href="#">
                Terms
              </a>
              <a className="link" href="#">
                Privacy
              </a>
              <a className="link" href="#">
                Contact Us
              </a>
              <a className="link" href="#">
                Docs
              </a>
            </div>
            <div className="text-center text-white text-sm mb-6">
              <p className="mb-0">© 2024 Acme Company.</p>
              <p>All rights reserved</p>
            </div>
            <div className="social-group">
              <a className="social-link" href="#" title="facebook">
                <i className="fab fa-facebook-square text-3xl"></i>
              </a>
              <a className="social-link" href="#" title="twitter">
                <i className="fab fa-twitter-square text-3xl"></i>
              </a>
              <a className="social-link" href="#" title="instagram">
                <i className="fab fa-instagram text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
