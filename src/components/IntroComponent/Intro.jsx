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
            <AiFillGithub style={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/divya-gavandi/"
            title="Linkedin"
          >
            <AiFillLinkedin style={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://divya-gavandi19.hashnode.dev/"
            title="Hashnode"
          >
            <SiHashnode style={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCIuQ4BIRSGwSDUNNPyEc4hA"
            title="Youtube"
          >
            <AiFillYoutube style={{ fontSize: "40px" }} />
          </a>
          <a
            href="https://www.instagram.com/gavandivya/"
            title="Instagram"
          >
            <AiFillInstagram style={{ fontSize: "40px" }} />
          </a>
        </div>
        <p className="glow">A girl who believes in GODFIDENCE</p>
      </div>
    </header>
  ); 
};

export default Intro;

/*  <!--/ Intro Skew Star /-->
  <div id="home" class="intro route bg-image" style="background-image: url(img/intro-bg.jpg)">
  <div class="overlay-itro"></div>
  <div class="intro-content display-table">
    <div class="table-cell">
      <div class="container">
        <!--<p class="display-6 color-d">Hello, world!</p>-->
        <h1 class="intro-title mb-4">I am Morgan Freeman</h1>
        <p class="intro-subtitle"><span class="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong class="text-slider"></strong></p>
        <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
      </div>
    </div>
  </div>
</div>
<!--/ Intro Skew End /-->

*/