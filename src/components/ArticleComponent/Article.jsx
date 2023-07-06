import React from "react";
import aws from "../../images/aws.png";
import pwa from "../../images/pwa.png";
import "./Article.css";

const Article = () => {
  return (
    <div id="blog">
      <h2 className="text-3xl font-bold uppercase text-center m-2">Blogs</h2>
      <div className="flex flex-wrap justify-center blog">
        <div className="card p-4 m-2">
          <img src={pwa} alt="pwa" />
          <p className="text-center">
            <a
              className="btn"
              target="blank"
              href="https://divya-gavandi19.hashnode.dev/convert-existing-react-web-app-to-pwa"
            >
              Read More
            </a>
          </p>
        </div>
        <div className="card p-4 m-2">
          <img src={aws} alt="aws" />
          <p className="text-center">
            <a
              className="btn"
              target="blank"
              href="https://divya-gavandi19.hashnode.dev/building-and-deploying-aws-lambda-using-net-6"
            >
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;

//https://divya-gavandi19.hashnode.dev/building-and-deploying-aws-lambda-using-net-6
//https://divya-gavandi19.hashnode.dev/convert-existing-react-web-app-to-pwa
//https://divya-gavandi19.hashnode.dev/
//https://hashnode.com/@gavandivya19
