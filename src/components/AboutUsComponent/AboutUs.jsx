import React, { useContext } from "react";
import profile from "../../images/divya.png";
import resume from "../../images/DivyaGavandi.pdf";
import "./AboutUs.css";
import { NavHashLink } from "react-router-hash-link";
import { BiSolidDownload } from "react-icons/bi";
import ThemeContext from "../../constants/ThemeContext";

const AboutUs = () => {
  const { themeContext } = useContext(ThemeContext);
  return (
    <div
      className={`flex justify-center px-2 opacity-90 boxy mx-20 pt-6 flex-wrap rounded-md lg:!flex-nowrap ${
        themeContext === "dark" ? "darkMode" : "lightMode"
      }`}
      id="about"
    >
      <div>
        <h2 className="text-3xl font-bold text-center uppercase">About me</h2>
        <img src={profile} alt="" className="img-profile" />
      </div>
      <div>
        <h4 className="text-2xl font-bold pt-10 ml-3">𝗛𝗲𝗹𝗹𝗼, 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻𝘀!👋</h4>
        <p className="text-base text-justify">
          📌 I am Computer Engineer by Profession, Frontend Developer by Passion
          and aspiring Full Stack Web Developer.
          <br />
          📌 Love experimenting new tech stack and languages which helps to
          upskill my knowledge.
          <br />
          📌 An ambitious girl with a strong desire to succeed.
          <br />
          📌 I would love to collaborate on projects, contact me for any help.
          <br />
          📌 Do read my blogs posted on{" "}
          <a
            href="https://divya-gavandi19.hashnode.dev/"
            title="Hashnode"
            className="font-semibold"
          >
            Hashnode
          </a>{" "}
          and go through my services offered.
          <br />
          <div>
            <button
              className={`${
                themeContext === "dark" ? "buttonDark" : "button"
              } font-bold`}
            >
              <BiSolidDownload style={{ display: "inline" }} />
              <a href={resume} download="DivyaGavandi">
                Resume
              </a>
            </button>{" "}
            &nbsp;
            <NavHashLink
              className={`${
                themeContext === "dark" ? "buttonDark" : "button"
              } font-bold`}
              smooth
              to="#contact"
              style={{ WebkitTextStroke: 0, padding: "0.4rem 20px" }}
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
