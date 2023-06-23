import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-3 text-center">Skills</h2>
      <div class="container-skills">
        <div class="angular">
          <p class="bar-title">
            React JS / Angular 12
            <span class="percent align-right">90%</span>
          </p>
          <div class="bar">
            <div class="bar-fill bar-fill-responsive start"></div>
          </div>
        </div>
        <div class="html">
          <p class="bar-title">
            HTML5, CSS, Bootstrap​ and TailwindCSS
            <span class="percent align-right">90%</span>
          </p>
          <div class="bar">
            <div class="bar-fill bar-fill-html start"></div>
          </div>
          <div class="javascript">
            <p class="bar-title">
              Javascript / Typescript
              <span class="percent align-right">80%</span>
            </p>
            <div class="bar">
              <div class="bar-fill bar-fill-javascript start"></div>
            </div>
          </div>
        </div>
        <div class="java">
          <p class="bar-title">
            Java / .Net Core
            <span class="percent align-right">70%</span>
          </p>
          <div class="bar">
            <div class="bar-fill bar-fill-java start"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
