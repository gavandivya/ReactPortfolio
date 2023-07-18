import React, { useContext } from "react";
import "./Work.css";
import "../../css/animate.css";
import ThemeContext from "../../constants/ThemeContext";

const Work = () => {
  const {themeContext} = useContext(ThemeContext);
  return (
    <div className="experience text-justify" id="workExp">
          <h2 className="text-3xl font-bold uppercase mb-3 text-center">
            Working Profession
          </h2>
        <div className="timeline">
        <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className={`timeline-text rounded-3xl ${themeContext === "dark"?"bg-gray":"bg-white"} `}>
              <div className="timeline-date">2023 - Present</div>
              <h2>FrontEnd Engineer</h2>
              <h4>BillDesk - Mumbai</h4>
              <p>
                Currently working as a Frontend Engineer, developing web application using technologies like React, Typescript and TailwindCSS.
              </p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s" 
          >
            <div className={`timeline-text rounded-3xl ${themeContext === "dark"?"bg-gray":"bg-gray-50"} `}>
              <div className="timeline-date">2021 - 2023</div>
              <h2>Software Developer</h2>
              <h4>ICICI Lombard GIC - Mumbai</h4>
              <p>
                Worked as a FullStack Developer in AGILE pattern with good hands on JIRA. Built 4+ Web Apps using Angular12, ReactJS and created Web API using .NetCore.
              </p>
            </div>
          </div>
          <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className={`timeline-text rounded-3xl ${themeContext === "dark"?"bg-gray":"bg-white"} `}>
              <div className="timeline-date">2018 - 2021</div>
              <h2>BTech in Computer Engineering</h2>
              <h4>Sardar Patel Institute of Technology(SPIT)</h4>
              <p>
                Pursued my CS Degree with subjects like Data Structure, DBMS, OS, OOPS and got on campus job with 6 months
                internship, scored CGPA - 9.1
              </p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className={`timeline-text rounded-3xl ${themeContext === "dark"?"bg-gray":"bg-white"} `}>
              <div className="timeline-date">2015 - 2018</div>
              <h2>Diploma (Information Technology)</h2>
              <h4>Government Polytechnic Mumbai (GPM)</h4>
              <p>
                Completed my Diploma from an autonomous college with hands on
                and good pratical knowledge, scored 92.35%
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Work;
