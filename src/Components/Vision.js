import React from "react";
import "./Vision.css";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";

const Vision = ({ ...props }) => {
  config({ ssrFadeout: true });
  return (
    <div className="vision" id={props.id}>
      <div className="vision__container">
        <div className="vision__title">
          <Fade bottom>
            <h1>Our Vision</h1>
          </Fade>
          <Fade bottom>
            <h3>
              <i>
                ❝ We don't know how we will do, but we will definitely do what
                we know.❞
              </i>
            </h3>
          </Fade>
          <Fade bottom>
            <h4>
              <i>
                Free quality education, initiative taken by an ex Government
                School Student.
              </i>
            </h4>
          </Fade>
        </div>
        <div className="vision__content">
          <Fade left>
            <p>
              We don't want others to face the same problem as we did. Like lack
              of guidance, awareness, scientific temperament for students and
              many more. That's why here we try to provide the best possible
              guidance to our students.
            </p>
          </Fade>
          <Fade right>
            <p>
              Our Team consists of Civil Servants, Engineers, MBAs, Businessmen,
              Politicians, Professors, General Manager of PSUs, HRs of several
              MNCs and many more.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Vision;
