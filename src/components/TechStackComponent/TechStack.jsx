import React from "react";
import "./TechStack.css";
import { techstack } from "../../constants/utils";
//Technology I am familar
const {
  html,
  css,
  bootstrap,
  js,
  angular,
  react,
  ts,
  java,
  net,
  mysql,
  postgreSql,
  python,
  jira,
  tailwind,
  figma,
  postman,
  git,
  vscode,
} = techstack;
const TechStack = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Tech Stack</h2>
      <div className="flex flex-row flex-wrap p-5">
        <img className="cdnheight" src={html} alt="HTML" />
        <img className="cdnheight" src={css} alt="CSS" />
        <img className="cdnheight" src={bootstrap} alt="Bootstrap" />
        <img className="cdnheight" src={js} alt="Javascript" />
        <img className="cdnheight" src={ts} alt="Typescript" />
        <img className="cdnheight" src={angular} alt="Angular" />
        <img className="cdnheight" src={react} alt="react" />
        <img className="cdnheight" src={net} alt=".net" />
        <img className="cdnheight" src={mysql} alt="Mysql" />
        <img className="cdnheight" src={postgreSql} alt="PostgreSQL" />
        <img className="cdnheight" src={java} alt="Java" />
        <img className="cdnheight" src={tailwind} alt="tailwind" />
        <img className="cdnheight" src={python} alt="python" />
        <img className="cdnheight" src={jira} alt="Jira" />
        <img className="cdnheight" src={figma} alt="figma" />
        <img className="cdnheight" src={git} alt="git" />
        <img className="cdnheight" src={vscode} alt="vscode" />
        <img className="cdnheight" src={postman} alt="postman" />
      </div>
    </div>
  );
};

export default TechStack;
