import React from "react";

const GithubStats = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">Github</h2>
      <div className="row github">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            className="img-responsive"
            alt="gitstat"
            src="https://github-readme-stats.vercel.app/api?username=gavandivya&theme=radical&&show_icons=true&text_color=000000&icon_color=000000&title_color=000000&bg_color=80,7a326d,b5799c"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            className="img-responsive"
            src="https://streak-stats.demolab.com/?user=gavandivya&theme=radical&fire=000000&ring=000000&dates=000000&border=FFFFFF&background=853f76&currStreakNum=000000&stroke=000000&sideNums=000000&sideLabels=FFFFFF&currStreakLabel=FFFFFF"
            alt="ongoing-streak-divya"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4">
          <img
            className="img-responsive"
            alt="gitlang"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=gavandivya&layout=compact&theme=radical&text_color=000000&title_color=000000&bg_color=80,7a326d,b5799c"
          />
        </div>
      </div>
    </>
  );
};

export default GithubStats;
