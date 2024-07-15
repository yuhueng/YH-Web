import "./Section0.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import anime from "animejs";

const Section0 = () => {
  useEffect(() => {
    ScrollReveal().reveal(".sectionzero-container-top-2", {
      duration: 100,
      origin: "top",
      distance: "100px",
    });
    ScrollReveal().reveal(".sectionzero-container-top", {
      beforeReveal: (el) => {
        anime({
          targets: el,
          translateX: ["-500px", "0px"],
          duration: 4500,
        });
      },
    });
    ScrollReveal().reveal(".sectionzero-container-bottom", {
      beforeReveal: (el) => {
        anime({
          targets: el,
          translateY: ["500px", "0px"],
          duration: 5000,
        });
      },
    });

    anime({
      targets: "#demo-svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 17000,
      direction: "alternate",
      loop: false,
    });
  });

  return (
    <div id="home" className="sectionzero-section bg-cornsilk">
      <div className="max-w-screen-2xl mx-auto">
        <div className="header-margin bg-cornsilk"></div>
        <div className="sectionzero-container">
          <div className="sectionzero-container-top flex flex-col">
            <div className="sectionzero-container-top-1 text-tan">
              <h2>Hey, I am</h2>
            </div>
            <div className="sectionzero-container-top-2">
              <svg id="demo-svg" width="100%" height="100%" viewBox="0 0 700 100" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M0 3.6V0h17.7L64 61.6h.4V11.5a17 17 0 0 0 0-2q-.4-2.8-1.8-3.9a5.6 5.6 0 0 0-1.3-.7Q59 4 54.8 3.6a54.5 54.5 0 0 0-.4 0V0h25.4v3.6Q74 4 72 5.2a3.4 3.4 0 0 0-.6.4q-1.5 1.3-1.5 5.8v65.8H66L16 9.1h-.4v55.4q0 3.7 1.3 5.4a3.5 3.5 0 0 0 .8.7 5.2 5.2 0 0 0 1.1.6q2.2.8 6.7 1.2V76H0v-3.6a51.6 51.6 0 0 0 2.7-.3q3.8-.6 5.3-1.5a3 3 0 0 0 .4-.4 3.8 3.8 0 0 0 .9-1.2q.6-1.3.7-3.3a19.9 19.9 0 0 0 0-1.2v-53a18.6 18.6 0 0 0-.1-2.2q-.3-2.2-1-3.3a3.2 3.2 0 0 0-1.2-1Q5.9 4 .8 3.6a67.5 67.5 0 0 0-.8 0zm356.4 0V0h27v3.6a48 48 0 0 0-2.7.2q-4 .4-5.5 1.5a2.9 2.9 0 0 0-.5.4q-1.3 1.4-1.3 5.8v21.7h42.4V11.5a22.4 22.4 0 0 0 0-1.9q-.2-1.9-.7-3a3.3 3.3 0 0 0-.8-1.1Q412.7 4 407 3.7a55.8 55.8 0 0 0-1 0V0h27v3.6q-7 .3-8.7 2-1.3 1.5-1.3 5.9v53a23 23 0 0 0 0 1.9q.3 3 1.4 4a2.2 2.2 0 0 0 .1 0q1.6 1.4 7.3 1.9a57.9 57.9 0 0 0 1.1 0V76h-27v-3.6a52.6 52.6 0 0 0 2.7-.3q3.8-.4 5.3-1.3a2.8 2.8 0 0 0 .7-.5q1.3-1.4 1.3-5.8V38h-42.4v26.4q0 3.7 1.1 5.4a3 3 0 0 0 1.2 1.1 6.6 6.6 0 0 0 1.1.5q2 .5 5.8.8a79.7 79.7 0 0 0 .8 0V76h-27v-3.6a47.3 47.3 0 0 0 2.7-.3q4-.4 5.4-1.4a3 3 0 0 0 .4-.4q1.4-1.3 1.4-5.8v-53a22.4 22.4 0 0 0 0-1.9q-.2-1.9-.7-3a3.3 3.3 0 0 0-.8-1.1 4.1 4.1 0 0 0-1.2-.7q-2.2-1-7.2-1.2zm-174.7.2V0h28.6v3.8q-9.3.7-9.3 3.6a3.7 3.7 0 0 0 .2 1q.2.8.7 1.6l18.3 28L238 11a5.7 5.7 0 0 0 .6-1.2 4.4 4.4 0 0 0 .3-1.5q0-3.6-8.5-4.4a42.6 42.6 0 0 0-.5 0V0h26.3v3.8q-4.2.2-7.4 2.5-1.9 1.3-4.2 4.6a49.6 49.6 0 0 0-.9 1.3l-20.9 31.4v20.9a15 15 0 0 0 .1 2q.3 2 1.2 3.2a3.5 3.5 0 0 0 .6.6 5.1 5.1 0 0 0 1.2.6q2 .8 6 1.4a63.6 63.6 0 0 0 .8 0V76h-27v-3.6a52.6 52.6 0 0 0 2.7-.4q3.7-.6 5.2-1.6a3.2 3.2 0 0 0 .4-.3q1.4-1.2 1.6-4.4a18.5 18.5 0 0 0 0-1.2v-20l-20.8-33.2q-2-3.3-4.5-5a10.7 10.7 0 0 0-1.4-.7 15 15 0 0 0-2.5-1l-2.8-.6a31 31 0 0 0-1.9-.2zM588.5 76H564v-3.6q4-.2 6-1.1a4.6 4.6 0 0 0 1.3-.8 4.5 4.5 0 0 0 1.1-1.6q.7-1.7.7-4.5V32.7q0-3.5-1.1-5a3.3 3.3 0 0 0-.8-.7 3.8 3.8 0 0 0-.8-.5q-1.6-.5-4.8-.8a61.5 61.5 0 0 0-1.3-.1V22a65.5 65.5 0 0 0 9.1-.6 52 52 0 0 0 6.7-1.4v9.5q3.3-4.5 8.4-7.2a21.3 21.3 0 0 1 5.2-2 18.2 18.2 0 0 1 4-.3 20.8 20.8 0 0 1 6.8 1 17.5 17.5 0 0 1 8 5.7q3.6 4.7 4.2 12.3a38.7 38.7 0 0 1 .2 3v22.4a18.5 18.5 0 0 0 0 2q.3 2.2 1.1 3.4a3.7 3.7 0 0 0 .7.8 4.4 4.4 0 0 0 1.2.7q2 .8 5.9 1a46 46 0 0 0 .3 0V76h-24.7v-3.6q4-.3 5.9-1.3a4.7 4.7 0 0 0 1-.6 3.5 3.5 0 0 0 .8-1.2q.6-1.2.7-3.2a22 22 0 0 0 0-1.7V41.7a23.8 23.8 0 0 0-.4-4.9q-.6-3-2.2-5.5a14 14 0 0 0-1-1.3 11.2 11.2 0 0 0-8.1-4.2 15 15 0 0 0-1.1 0 15.8 15.8 0 0 0-9 3q-2.6 1.7-5 4.3a40.7 40.7 0 0 0-2.9 3.9v27.4a19.3 19.3 0 0 0 .1 2q.2 2 1 3.2a3.6 3.6 0 0 0 .6.9q1.4 1.2 5 1.7a28.6 28.6 0 0 0 1.7.2V76zm-269.4 0H306l-1-8a31.7 31.7 0 0 1-5.5 5.5 20.8 20.8 0 0 1-13 4.5 21.3 21.3 0 0 1-6.4-1 16 16 0 0 1-9.3-7.8q-2.6-4.4-3-11a41.1 41.1 0 0 1 0-2.2V32.7a17 17 0 0 0 0-2q-.4-2.8-1.8-3.7a4 4 0 0 0-1-.5q-1.5-.5-4.8-.8a59.8 59.8 0 0 0-1.4-.1V22a69 69 0 0 0 16-2v35.6q0 5.8 2 9.7a13.5 13.5 0 0 0 2 3 11.2 11.2 0 0 0 7 3.7 16.1 16.1 0 0 0 2.3.2 15.8 15.8 0 0 0 10.5-4q2.2-2 4.3-4.8a38.1 38.1 0 0 0 1.6-2.4V32.7q0-4.6-2-5.8a4.1 4.1 0 0 0-1-.4q-1.5-.5-4.6-.8a62.3 62.3 0 0 0-1.4-.1V22q8.9 0 16-2v42.9a30 30 0 0 0 .1 2.4q.2 2.4.8 3.9a4.9 4.9 0 0 0 .8 1.3q1.3 1.5 6 1.9V76zm177.4 0h-13.3l-1-8a31.7 31.7 0 0 1-5.5 5.5 20.8 20.8 0 0 1-12.9 4.5 21.3 21.3 0 0 1-6.5-1 16 16 0 0 1-9.3-7.8q-2.5-4.4-2.9-11a41.1 41.1 0 0 1 0-2.2V32.7a17 17 0 0 0-.1-2q-.3-2.8-1.7-3.7a4 4 0 0 0-1-.5q-1.6-.5-4.8-.8a59.8 59.8 0 0 0-1.4-.1V22a69 69 0 0 0 16-2v35.6q0 5.8 1.9 9.7a13.5 13.5 0 0 0 2 3A11.2 11.2 0 0 0 463 72a16.1 16.1 0 0 0 2.2.2 15.8 15.8 0 0 0 10.5-4q2.3-2 4.3-4.8a38.1 38.1 0 0 0 1.6-2.4V32.7q0-4.6-2-5.8a4.1 4.1 0 0 0-1-.4q-1.4-.5-4.6-.8a62.3 62.3 0 0 0-1.3-.1V22q8.8 0 16-2v42.9a30 30 0 0 0 0 2.4q.3 2.4.9 3.9a4.9 4.9 0 0 0 .7 1.3q1.4 1.5 6 1.9V76zm-397-11.8v-.5a16.3 16.3 0 0 1-2.7-.8 11.8 11.8 0 0 1-2.8-1.5 8.7 8.7 0 0 1-1.6-1.5 5.6 5.6 0 0 1-1.3-3.6q0-6 8-7.4a14.3 14.3 0 0 1-4.4-2.4q-4.1-3.4-4.1-9.9 0-6.3 5.1-11 6.4-5.6 16.4-5.6 9.3 0 15.2 4.3a20.4 20.4 0 0 1 6-4.4 23.3 23.3 0 0 1 .4-.3 21.2 21.2 0 0 1 3-1q1.5-.5 3-.6a11.9 11.9 0 0 1 .8 0 7.4 7.4 0 0 1 2.7.4 7 7 0 0 1 1 .5 6.8 6.8 0 0 1 1.8 1.5q1.3 1.5 1.4 3.5a7.5 7.5 0 0 1 0 .4 6.4 6.4 0 0 1-1.2 3.6q-1.5 2.2-4 2.2a5 5 0 0 1-3.5-1.3 6.7 6.7 0 0 1-.3-.3q-1.6-1.6-1.6-3.7a4.4 4.4 0 0 1 0-.7l.3-.7a8.7 8.7 0 0 1 0-.4q-3 .1-7 4.3a11.7 11.7 0 0 1 3.9 8.5 15.4 15.4 0 0 1 0 .6 15.7 15.7 0 0 1-.9 5.4q-1.5 4-5.4 6.7-4.6 3-11.8 3.6a44 44 0 0 1-3.4.1 36.2 36.2 0 0 1-4.5-.3 28.3 28.3 0 0 1-3.5-.6q-4.2.3-5.7 1.9a3 3 0 0 0-.8 2.2 2.2 2.2 0 0 0 .6 1.5q.6.7 1.9 1.3a11.6 11.6 0 0 0 .5.2 17.7 17.7 0 0 0 2.7.8q1.4.4 3 .5a39 39 0 0 0 2.7.3l9.7.5q8.1.4 12.6 1.7a17.7 17.7 0 0 1 2.3.8 11.9 11.9 0 0 1 3.6 2.4q2.9 2.9 2.9 7.6 0 7-5.7 10.6a17.6 17.6 0 0 1-2.4 1.3 27.3 27.3 0 0 1-4.8 1.6q-5 1.2-12.3 1.4a104 104 0 0 1-2.4 0 71.4 71.4 0 0 1-7-.3q-7.2-.7-11.8-3a21.2 21.2 0 0 1-.1 0q-7.2-3.5-7.2-10.3a8 8 0 0 1 2.8-6.2 12 12 0 0 1 1.2-1 14.9 14.9 0 0 1 3.2-1.5q1.5-.6 3.3-1a31 31 0 0 1 2.3-.4zm545.8 0v-.5a16.3 16.3 0 0 1-2.8-.8 11.8 11.8 0 0 1-2.8-1.5 8.7 8.7 0 0 1-1.6-1.5 5.6 5.6 0 0 1-1.3-3.6q0-6 8-7.4a14.3 14.3 0 0 1-4.4-2.4q-4.1-3.4-4.1-9.9 0-6.3 5.1-11 6.4-5.6 16.4-5.6 9.3 0 15.2 4.3a20.4 20.4 0 0 1 6-4.4 23.3 23.3 0 0 1 .4-.3 21.2 21.2 0 0 1 3-1q1.5-.5 3-.6a11.9 11.9 0 0 1 .8 0 7.4 7.4 0 0 1 2.7.4 7 7 0 0 1 1 .5 6.8 6.8 0 0 1 1.8 1.5q1.3 1.5 1.4 3.5a7.5 7.5 0 0 1 0 .4 6.4 6.4 0 0 1-1.2 3.6q-1.5 2.2-4 2.2a5 5 0 0 1-3.5-1.3 6.7 6.7 0 0 1-.3-.3q-1.6-1.6-1.6-3.7a4.4 4.4 0 0 1 0-.7l.3-.7a8.7 8.7 0 0 1 0-.4q-3 .1-7 4.3a11.7 11.7 0 0 1 3.9 8.5 15.4 15.4 0 0 1 0 .6 15.7 15.7 0 0 1-.9 5.4q-1.5 4-5.4 6.7-4.6 3-11.8 3.6a44 44 0 0 1-3.4.1 36.2 36.2 0 0 1-4.5-.3 28.3 28.3 0 0 1-3.5-.6q-4.2.3-5.7 1.9a3 3 0 0 0-.8 2.2 2.2 2.2 0 0 0 .6 1.5q.6.7 1.9 1.3a11.6 11.6 0 0 0 .5.2 17.7 17.7 0 0 0 2.7.8q1.4.4 3 .5a39 39 0 0 0 2.7.3l9.7.5q8.1.4 12.6 1.7a17.7 17.7 0 0 1 2.3.8 11.9 11.9 0 0 1 3.6 2.4q2.9 2.9 2.9 7.6 0 7-5.7 10.6a17.6 17.6 0 0 1-2.4 1.3 27.3 27.3 0 0 1-4.8 1.6q-5 1.2-12.3 1.4a104 104 0 0 1-2.4 0 71.4 71.4 0 0 1-7-.3q-7.2-.7-11.8-3a21.2 21.2 0 0 1-.1 0q-7.2-3.5-7.2-10.3a8 8 0 0 1 2.8-6.2 12 12 0 0 1 1.2-1 14.9 14.9 0 0 1 3.2-1.5q1.5-.6 3.3-1a31 31 0 0 1 2.3-.4zM555 48.4h-43v.8a33.4 33.4 0 0 0 .6 6.5 24.7 24.7 0 0 0 2.5 7 19.5 19.5 0 0 0 4.6 5.8q4 3.3 9.6 3.8a23 23 0 0 0 1.9 0 21.3 21.3 0 0 0 15.5-6.6 34.6 34.6 0 0 0 4.5-5.6l3.2 3.1a34 34 0 0 1-6.2 8 24.9 24.9 0 0 1-17.6 6.8 28.7 28.7 0 0 1-9.3-1.4 23.4 23.4 0 0 1-11.6-8.7A28.3 28.3 0 0 1 505 56a38.7 38.7 0 0 1-.6-7 35.6 35.6 0 0 1 1.3-9.9 29 29 0 0 1 4.9-9.6q7.3-9.4 19.1-9.6a30.5 30.5 0 0 1 .5 0 25.4 25.4 0 0 1 9 1.5 23.1 23.1 0 0 1 6 3.3q7 5.4 9.2 14.7.8 3.4.8 7v2zM112.7 67.2a115 115 0 0 0-4.4 0q-4.2.2-7 .7a20.5 20.5 0 0 0-2.2.5 10.1 10.1 0 0 0-2.1.9q-2.8 1.6-2.8 4.7a6.5 6.5 0 0 0 2 4.7q1 1 2.4 1.8a18.8 18.8 0 0 0 4.5 1.8q4.2 1.2 10 1.2a59.8 59.8 0 0 0 6.8-.3q6.8-.8 10.1-3.3a7.8 7.8 0 0 0 3.3-6.6 3.9 3.9 0 0 0-2.1-3.3q-3.6-2.2-13.3-2.7a112.3 112.3 0 0 0-5.2-.1zm545.7 0a115 115 0 0 0-4.4 0q-4.2.2-7 .7a20.5 20.5 0 0 0-2.2.5 10.1 10.1 0 0 0-2.1.9q-2.8 1.6-2.8 4.7a6.5 6.5 0 0 0 2 4.7q1 1 2.4 1.8a18.8 18.8 0 0 0 4.5 1.8q4.2 1.2 10 1.2a59.8 59.8 0 0 0 6.8-.3q6.8-.8 10.1-3.3a7.8 7.8 0 0 0 3.3-6.6A3.9 3.9 0 0 0 677 70q-3.6-2.2-13.3-2.7a112.3 112.3 0 0 0-5.2-.1zm-146-23.5h34.3q-.4-8.3-3.7-12.6a16.3 16.3 0 0 0-5-4.5q-3.4-2-7.8-2a15.5 15.5 0 0 0-11.4 5 22 22 0 0 0-1.3 1.5 22.7 22.7 0 0 0-4.4 8.5 29.5 29.5 0 0 0-.8 4zM112 24.5a19.2 19.2 0 0 0-4.2.4 14.8 14.8 0 0 0-4.2 1.6 11.8 11.8 0 0 0-3.6 3.2q-1.7 2.3-2 5.6a14.8 14.8 0 0 0 0 1.3 12.4 12.4 0 0 0 .9 5q2.7 6.2 13.3 6.2a26 26 0 0 0 4.2-.3q3.8-.6 6.4-2.5a9.6 9.6 0 0 0 4-7 13.8 13.8 0 0 0 .1-1.6q0-6.7-6.4-10-3.7-2-8.5-2zm545.7 0a19.2 19.2 0 0 0-4.2.4 14.8 14.8 0 0 0-4.2 1.6 11.8 11.8 0 0 0-3.6 3.2q-1.7 2.3-2 5.6a14.8 14.8 0 0 0 0 1.3 12.4 12.4 0 0 0 .9 5q2.7 6.2 13.3 6.2a26 26 0 0 0 4.2-.3q3.8-.6 6.4-2.5a9.6 9.6 0 0 0 4-7 13.8 13.8 0 0 0 .1-1.6q0-6.7-6.4-10-3.7-2-8.5-2z"
                  stroke="#8d7a69"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>
            <div className="sectionzero-container-top-3 text-tan">
              <h2>An Aspiring Software Engineer</h2>
            </div>
            <div className="sectionzero-container-bottom">
            <a className="text-black" href= "https://github.com/yuhueng" title="github" target="_blank"     rel="noopener noreferrer">
                    <i className="sectionzero-social-links fab fa-github-square"></i>
                </a>
                <a className="linkedin-color" href="https://www.linkedin.com/in/ngyuhueng" title="linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="sectionzero-social-links fab fa-linkedin"></i>
                </a>
            </div>  
          </div>


          <div className="sectionzero-container-right">
            <img
              src="images/nyhpic3.jpg"
              alt="NYHPIC3"
              className="sectionzero-container-right-img"
            />
            
            {/* <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              <DeskAndComputer />
              <AnimatedFigure />
              <OrbitControls enableDamping={true} dampingFactor={0.1} />
            </Canvas> */}
            {/* <div style={{ height: '100vh' }}>
              <ModelViewer url="/test.glb" />
            </div> */}

          </div>
        </div>
      </div>
      <div id="about" className="sectionone-anchor"></div>
    </div>
  );
};

export default Section0;
