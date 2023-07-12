import React from "react";
import profile from "../../images/divya.png";
import resume from "../../images/DivyaGavandi.pdf";
import "./AboutUs.css";
import { NavHashLink } from "react-router-hash-link";
import { BiSolidDownload } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div
      className="flex justify-center px-2 opacity-90 boxy mx-20 bg-white pt-6 flex-wrap lg:!flex-nowrap"
      id="about"
    >
      <div>
        <h2 className="text-3xl font-bold text-center uppercase">About me</h2>
        <img src={profile} alt="" className="img-profile" />
      </div>
      <div>
        <h4 className="text-2xl font-bold pt-10 ml-3">
          𝗛𝗲𝗹𝗹𝗼, 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻𝘀!👋
        </h4>
        <p className="text-lg">
          📌 I am Computer Engineer by Profession, Frontend Developer by Passion
          and aspiring Full Stack Web Developer
          <br /> &emsp;&nbsp;with knowledge of latest web technologies.
          <br />
          📌 Love experimenting new tech stack and languages which helps to
          upskill my knowledge.
          <br />
          📌 An ambitious girl with a strong desire to succeed.
          <br />
          📌 I would love to collaborate on projects, contact me for any help.
          <br />
          📌 Do read my blogs posted on <a
            href="https://divya-gavandi19.hashnode.dev/"
            title="Hashnode" className="font-semibold"
          >Hashnode</a> and go through my services offered.
          <br />
          <div>
          <button className="button font-bold"><BiSolidDownload style={{display:"inline"}}/> 
          <a href={resume} download="DivyaGavandi">Resume</a>
            </button> &nbsp;
            <NavHashLink
              className="button"
              smooth
              to="#contact"
              style={{ WebkitTextStroke: 0,padding:"0.4rem" }}
              scroll={(el) =>
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                })
              }
            >
            Hire Me            
            </NavHashLink>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
