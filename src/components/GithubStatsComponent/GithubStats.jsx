import React from "react";
import "./GithubStats.css";

const GithubStats = () => {
  return (
    <>
      <h2 className="text-2xl font-bold uppercase text-center m-2">
        Github Stats
      </h2>
      <div className="flex justify-center flex-wrap">
        <div>
          <img
            className="img-responsive"
            alt="gitstat"
            src="https://github-readme-stats.vercel.app/api?username=gavandivya&theme=radical&&show_icons=true&text_color=ffffff&icon_color=ffffff&title_color=ffffff"
          />
        </div>
        <div>
          <img
            className="img-responsive"
            alt="gitlang"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=gavandivya&layout=compact&theme=radical&text_color=ffffff&title_color=ffffff"
          />
        </div>
        <div>
          <img
            className="img-responsive"
            src="https://streak-stats.demolab.com/?user=gavandivya&theme=radical&fire=FFFFFF&ring=FFFFFF&dates=FFFFFF&border=FFFFFF&currStreakNum=FFFFFF&stroke=FFFFFF&sideNums=FFFFFF&sideLabels=FFFFFF&currStreakLabel=FFFFFF"
            alt="ongoing-streak-divya"
          />
        </div>
      </div>
    </>
  );
};

export default GithubStats;
