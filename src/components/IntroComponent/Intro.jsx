import React from "react";
import Typed from "typed.js";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    const typed = new Typed(".heading-typed", {
      strings: [
        '<span class="heading-moving"> a Computer Engineer.</span>',
        '<span class="heading-moving"> a Computer Engineer.</span>',
        '<span class="heading-moving">  a Frontend Developer. </span> ',
        '<span class="heading-moving"> a Passionate Artist. </span>',
        '<span class="heading-moving"> a Self Lover. </span>',
      ],
      smartBackspace: true,
      typeSpeed: 15,
      backSpeed: 13,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header class="white-text-container section-container">
      <div class="text-center">
        <h1 class="heading">
          I am Divya Gavandi,
          <span class="heading-typed">
            <span class="heading-moving"></span>
          </span>
        </h1>
        <div style={{ margin: "4rem 0" }}>
          <a
            class="fa-icon fa-icon-2x"
            href="https://www.instagram.com/gavandivya/"
            title="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="fa-icon fa-icon-2x" href="https://github.com/gavandivya">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            class="fa-icon fa-icon-2x"
            href="https://www.linkedin.com/in/divya-gavandi/"
            title="Linkedin"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            class="fa-icon fa-icon-2x"
            href="https://divya-gavandi19.hashnode.dev/"
            title="Hashnode"
          >
            <i class="fa-brands fa-hashnode"></i>
          </a>
          <a
            class="fa-icon fa-icon-2x"
            href="https://www.youtube.com/channel/UCIuQ4BIRSGwSDUNNPyEc4hA"
            title="Youtube"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <p class="glow">A girl who believes in GODFIDENCE</p>
      </div>
    </header>
  );
};

export default Intro;
