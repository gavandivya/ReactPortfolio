import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold uppercase mb-3 text-center">Skills</h2>
      <div className="container-skills">
      <div className="html">
          <p className="bar-title">
            HTML5 / CSS3 / Bootstrap5​ / Tailwind CSS
            <span className="percent align-right">90%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-html start"></div>
          </div>
          </div>
        <div className="angular">
          <p className="bar-title">
            React JS / Angular 12
            <span className="percent align-right">85%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-responsive start"></div>
          </div>
        </div>
          <div className="javascript">
            <p className="bar-title">
              Javascript / Typescript
              <span className="percent align-right">80%</span>
            </p>
            <div className="bar">
              <div className="bar-fill bar-fill-javascript start"></div>
            </div>
          </div>
        </div>
        <div className="java">
          <p className="bar-title">
            Java / .Net Core
            <span className="percent align-right">70%</span>
          </p>
          <div className="bar">
            <div className="bar-fill bar-fill-java start"></div>
          </div>
        </div>
      </div>
  );
};

export default Skills;
