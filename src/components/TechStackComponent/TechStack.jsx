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
      <h2 className="text-3xl font-bold text-center uppercase">Tech Stack</h2>
      <div className="flex flex-wrap p-1 justify-center">
        <img title="HTML" className="cdnheight" src={html} alt="HTML" />
        <img title="CSS" className="cdnheight" src={css} alt="CSS" />
        <img title="Bootstrap" className="cdnheight" src={bootstrap} alt="Bootstrap" />
        <img title="Javascript" className="cdnheight" src={js} alt="Javascript" />
        <img title="Typescript" className="cdnheight" src={ts} alt="Typescript" />
        <img title="ReactJS" className="cdnheight" src={react} alt="react" />
        <img title="Angular" className="cdnheight" src={angular} alt="Angular" />
        <img title="TailwindCSS" className="cdnheight" src={tailwind} alt="tailwind" />
        <img title=".Net" className="cdnheight" src={net} alt=".net" />
        <img title="Mysql" className="cdnheight" src={mysql} alt="Mysql" />
        <img title="PostgreSQL" className="cdnheight" src={postgreSql} alt="PostgreSQL" />
        <img title="Java" className="cdnheight" src={java} alt="Java" />
        <img title="Python" className="cdnheight" src={python} alt="python" />
        <img title="Jira" className="cdnheight" src={jira} alt="Jira" />
        <img title="Figma" className="cdnheight" src={figma} alt="figma" />
        <img title="Git" className="cdnheight" src={git} alt="git" />
        <img title="VsCode" className="cdnheight" src={vscode} alt="vscode" />
        <img title="Postman" className="cdnheight" src={postman} alt="postman" />
      </div>
    </div>
  );
};

export default TechStack;
