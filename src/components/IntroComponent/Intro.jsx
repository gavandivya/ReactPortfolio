import React from "react";
import Typed from "typed.js";
import { useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import "./Intro.css";

const Intro = () => {
  useEffect(() => {
    const typed = new Typed(".heading-typed", {
      strings: [
        '<span className="heading-moving"> a Computer Engineer.</span>',
        '<span className="heading-moving"> a Computer Engineer.</span>',
        '<span className="heading-moving">  a Frontend Developer. </span> ',
        '<span className="heading-moving"> a Passionate Artist. </span>',
        '<span className="heading-moving"> a Self Lover. </span>',
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
    <header className="white-text-container section-container">
      <div className="text-center">
        <h1 className="heading text-white">
          I am Divya Gavandi,
          <span className="heading-typed">
            <span className="heading-moving"></span>
          </span>
        </h1>
        <div className="intro text-white">
          <a href="https://github.com/gavandivya">
            <AiFillGithub className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/divya-gavandi/" title="Linkedin">
            <AiFillLinkedin className="icons" />
          </a>
          <a href="https://divya-gavandi19.hashnode.dev/" title="Hashnode">
            <SiHashnode className="icons" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCIuQ4BIRSGwSDUNNPyEc4hA"
            title="Youtube"
          >
            <AiFillYoutube className="icons" />
          </a>
          <a href="https://www.instagram.com/gavandivya/" title="Instagram">
            <AiFillInstagram className="icons" />
          </a>
        </div>
        <p className="glow">A girl who believes in GODFIDENCE</p>
      </div>
    </header>
  );
};

export default Intro;