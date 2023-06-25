import React from "react";
import "./Work.css";
import "../css/animate.css";

const Work = () => {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <header
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <h2 className="text-2xl font-bold uppercase mb-3">
            Working Experience
          </h2>
        </header>
        <div className="timeline">
          {/* <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">2045 - 2050</div>
              <h2>Web Developer</h2>
              <h4>Soft Agency, San Francisco, CA</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">2045 - 2050</div>
              <h2>Web Developer</h2>
              <h4>Soft Agency, San Francisco, CA</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">2045 - 2050</div>
              <h2>Web Developer</h2>
              <h4>Soft Agency, San Francisco, CA</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div> */}
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text rounded-3xl">
              <div className="timeline-date">2021 - Present</div>
              <h2>Software Developer</h2>
              <h4>ICICI Lombard GIC</h4>
              <p>
                Currently working as a SDE on Frontend Web Development
                technology like React JS, Angular 12, Javascript, Tailwind CSS ,
                Bootstrap5, HTML5 and CSS3
              </p>
            </div>
          </div>
          <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text rounded-3xl">
              <div className="timeline-date">2018 - 2021</div>
              <h2>BTech in Computer Engineering</h2>
              <h4>Sardar Patel Institute of Technology(SPIT)</h4>
              <p>
                Pursued my CS Degree with an on campus job with 6 months
                internship, scored CGPA - 9.1
              </p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text rounded-3xl">
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
    </div>
  );
};

export default Work;
