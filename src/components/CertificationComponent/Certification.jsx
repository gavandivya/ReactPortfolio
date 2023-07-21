import React from "react";
import csm from "../../images/csm1.png";
import sql from "../../images/sql.png";
import java from "../../images/java.png";
import mongo from "../../images/mongo.png";
import aws from "../../images/aws1.png";

const Certification = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2 className="text-3xl font-bold uppercase text-center m-2">
          LICENSE & CERTIFICATIONS
        </h2>
        <div className="row">
          <div className="col-md-12">
            <a href="https://bcert.me/bc/html/show-badge.html?b=dsdzzegm">
              <img
                src={csm}
                className="card-img-top img-responsive"
                alt="..."
              />
            </a>
            <a href="https://www.coursera.org/account/accomplishments/certificate/LE3C347F5958">
              <img
                src={sql}
                className="card-img-top img-responsive"
                alt="..."
              />
            </a>
            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/XDYT36VBCFSF">
              <img
                src={aws}
                className="card-img-top img-responsive"
                alt="..."
              />
            </a>
            <a href="https://neat-aicte.codetantra.com/cert/certificate.jsp?certId=CT620-rXfuIMS-cj">
              <img
                src={java}
                className="card-img-top img-responsive"
                alt="..."
              />
            </a>
            <a href="https://university.mongodb.com/course_completion/3d515085-003f-40b8-b3d2-ab5befbd401d">
              <img
                src={mongo}
                className="card-img-top img-responsive"
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
