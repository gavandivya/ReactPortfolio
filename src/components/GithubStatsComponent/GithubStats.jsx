import React from "react";
import "./GithubStats.css";

const GithubStats = () => {
  return (
    <div id="github">
      <h2 className="text-3xl font-bold uppercase text-center m-2">
        Github Stats
      </h2>
      <div className="flex justify-center flex-wrap">
        <div>
          <img
            className="img-responsive"
            alt="gitstat"
            src="https://github-readme-stats.vercel.app/api?username=gavandivya&show_icons=true&text_color=000000&icon_color=000000&title_color=000000"
          />
        </div>

        <div>
          <img
            className="img-responsive"
            src="https://streak-stats.demolab.com/?user=gavandivya&fire=000000&ring=000000&dates=000000&currStreakNum=000000&stroke=000000&sideNums=000000&sideLabels=000000&currStreakLabel=000000"
            alt="ongoing-streak-divya"
          />
        </div>
        <div>
          <img
            className="img-responsive"
            alt="gitlang"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=gavandivya&layout=compact&text_color=000000&title_color=000000&border=000000"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubStats;

//src="https://github-readme-stats.vercel.app/api/top-langs?username=gavandivya&layout=compact&theme=radical&text_color=ffffff&title_color=ffffff"
//            src="https://streak-stats.demolab.com/?user=gavandivya&theme=radical&fire=FFFFFF&ring=FFFFFF&dates=FFFFFF&border=FFFFFF&currStreakNum=FFFFFF&stroke=FFFFFF&sideNums=FFFFFF&sideLabels=FFFFFF&currStreakLabel=FFFFFF"
//            src="https://github-readme-stats.vercel.app/api?username=gavandivya&theme=radical&&show_icons=true&text_color=ffffff&icon_color=ffffff&title_color=ffffff"
