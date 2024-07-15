import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-mossgreen text-white py-6" id="footer">
    <div className="container">
        <div className="row justify-between">
            <div className="col md:w-9/12">
                <p>© 2024 Ng Yu Hueng Porfolio. </p>
            </div>
            <div className="col md:w-3/12 flex md:justify-end">
                <a className="text-white" href= "#" title="github">
                    <i className="footer-social-links fab fa-github-square"></i>
                </a>
                <a className="text-white" href="#" title="linkedin">
                    <i className="footer-social-links fab fa-linkedin"></i>
                </a>
                <a className="text-white" href="#" title="Instagram">
                    <i className="footer-social-links fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
</footer>
                        
  );
}

export default Footer;
