import "./Section1.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import anime from "animejs";
import { Link } from "react-router-dom";

const Section1 = () => {
  function animateAll() {
    anime({
      targets: ".sectionone-about",
      translateY: ["-400px", "0px"],
      duration: 5000,
      opacity: 1,
    });

    anime({
      targets: ".sectionone-container-left",
      translateX: ["-400px", "0px"],
      duration: 3000,
      opacity: 1,
    });

    anime({
      targets: ".sectionone-container-right-header",
      translateX: ["400px", "0px"],
      duration: 3000,
      opacity: 1,
    });

    anime({
      targets: ".sectionone-container-right-text",
      translateX: ["400px", "0px"],
      duration: 3000,
      opacity: 1,
    });
    anime({
      targets: ".sectionone-container-right-button-div",
      translateY: ["400px", "0px"],
      duration: 3000,
      opacity: 1,
    });
  }
  useEffect(() => {
    ScrollReveal().reveal(".sectionone-container-right-header", {
      beforeReveal: animateAll,
    });
  });

  return (
    <div className="sectionone-section">
      <div className="max-w-screen-2xl mx-auto">
        <div className="sectionone-container">
          <h2 className="sectionone-about text-center underline underline-offset-8">
            About Me
          </h2>
          <div className="sectionone-container-main flex flex-row">
            <div className="sectionone-container-left">
              <img
                src="images/nyhpic1.jpg"
                alt="NYHPIC1"
                className="sectionone-container-left-img"
              />
            </div>
            <div className="sectionone-container-right flex flex-col">
              <h3 className="sectionone-container-right-header">
                Hello! Once again, I am Yu Hueng
              </h3>
              <p className="sectionone-container-right-text">
                <u>Computer Science and Design</u> graduate from the Singapore
                University of Technology and Design (May 2026), specialising in
                Data Analytics with an AI minor.
              </p>
              <p className="sectionone-container-right-text">
                I work at the intersection of AI and application development.
                Building the APIs, pipelines, and infrastructure that turn
                models into products that hold up in production. Anyone can get
                a demo working. The engineering is in what happens after:
                latency under load, evaluation that tells you the truth, and
                failure modes you planned for instead of discovered.
              </p>
              <p className="sectionone-container-right-text">
                Lately my focus has been Agentic AI. Systems that plan, call
                tools, and act rather than just answer. It is the most
                interesting problem space I have worked in, because the hard
                parts are not the model. They are orchestration, reliability,
                and knowing when the agent should stop.
              </p>
              <p className="sectionone-container-right-text">
                The field moves faster than any curriculum, so I keep close to
                it and build with what is current rather than what I was taught.
                I gravitate toward lean, technical teams and end-to-end
                ownership, where whoever designs the system is also accountable
                for it running.
              </p>
              <div className="sectionone-container-right-button-div">
                <div className="sectionone-container-right-button-div-center">
                  <Link to={`/About`}>
                    <a className="sectionone-container-right-button">
                      Find out more about me!
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="experience" className="sectiontwo-anchor"></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
