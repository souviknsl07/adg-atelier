import React from "react";
import "./Services.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";

const Services = ({ ...props }) => {
  config({ ssrFadeout: true });

  return (
    <div className="services" id={props.id}>
      <Fade bottom>
        <h1>Our Services</h1>
      </Fade>
      <Fade bottom>
        <p>
          We offer a range of services to help you achieve the results you're
          after, Basically, we provide work under freelance and that is the main
          aim of our ADG_ATELIER Charity Organisation.
        </p>
      </Fade>
      <div className="services__item">
        <Fade left>
          <img
            src="https://www.sirchend.com/wp-content/uploads/2019/11/multi_design.png"
            alt=""
            className="item__image"
          />
        </Fade>
        <div className="item__description">
          <Fade right>
            <h3>Graphic Designing</h3>
          </Fade>
          <Fade right>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              voluptate culpa, inventore dolorem id provident debitis mollitia
              nemo nam illum repellat rem facilis cum similique atque porro
              beatae explicabo. Qui.
            </p>
          </Fade>
        </div>
      </div>
      <div className="services__item">
        <Fade left>
          <img
            src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"
            alt=""
            className="item__image"
          />
        </Fade>
        <div className="item__description">
          <Fade right>
            <h3>Web Development</h3>
          </Fade>
          <Fade right>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              voluptate culpa, inventore dolorem id provident debitis mollitia
              nemo nam illum repellat rem facilis cum similique atque porro
              beatae explicabo. Qui.
            </p>
          </Fade>
        </div>
      </div>
      <div className="services__item">
        <Fade left>
          <img
            src="https://www.avvio.com/wp-content/uploads/2019/03/image1.png"
            alt=""
            className="item__image"
          />
        </Fade>
        <div className="item__description">
          <Fade right>
            <h3>Marketing</h3>
          </Fade>
          <Fade right>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              voluptate culpa, inventore dolorem id provident debitis mollitia
              nemo nam illum repellat rem facilis cum similique atque porro
              beatae explicabo. Qui.
            </p>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <div className="services__cards">
          <div class="card">
            <img
              src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg"
              alt="Avatar"
            />
            <div class="container">
              <h5>
                <b>OUR PRODUCTS</b>
              </h5>
              <p>
                We work for AMAZON as an Amazon Affiliate so you can purchase
                any product at as low as possible price from Amazon
              </p>
              <a
                href="https://www.amazon.in/gp/bestsellers/industrial?_encoding=UTF8&linkCode=ib1&tag=adg_glittersd-21&linkId=88a3e2be48743fba8872f3593240eb05&ref_=ihub_curatedcontent_a0eeb22b-5a8b-4696-baf1-86c60b02a21a"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  Go to amazon
                  <ArrowForwardIcon />
                </i>
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://priyankabharadwaj.files.wordpress.com/2015/11/careercenterclipart.jpg"
              alt="Avatar"
            />
            <div class="container">
              <h5>
                <b>CAREER SERVICES</b>
              </h5>

              <span>Free Classes</span>
              <span>Free Coaching</span>
              <span>Free Job Updates</span>
              <span>Resource Centre</span>
              <span>Jobs/Exams/Alerts</span>
              <span>Current Affairs</span>
              <span style={{ marginBottom: "3vh" }}>Career Counselling</span>
              <a
                href="https://chat.whatsapp.com/HYQnDrOxQJz66FH4kqLuSc"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  For more information
                  <ArrowForwardIcon />
                </i>
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://codersera.com/blog/wp-content/uploads/2019/07/f1.png"
              alt="Avatar"
            />
            <div class="container">
              <h5>
                <b>FREELANCING</b>
              </h5>

              <span>Teaching</span>
              <span>Problem Solving</span>
              <span>Content Writing</span>
              <span>Affiliate Marketing</span>
              <span>Web Development</span>
              <span>Logo Design</span>
              <span>Digital Marketing</span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Services;
