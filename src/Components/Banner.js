import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <div className="banner">
      <Carousel fade={true} interval={3000}>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="slidea.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              top: 0,
              marginTop: "22vh",
              // color: "crimson",
            }}
          >
            <img
              src="logo.png"
              alt=""
              style={{ height: "100px", width: "100px", marginBottom: "1vh" }}
            />
            <h3 style={{ marginLeft: "1vw", fontSize: "2rem" }}>ADG_ATELIER</h3>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              <i>
                समस्या हैं सभी जानते हैं, उनका उपाय खोजना भी हमारा दायित्व है
              </i>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="slideb.jpg"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="slidec.jpg"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
