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
            src="https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              top: 0,
              marginTop: "25vh",
            }}
          >
            <h3 style={{ marginLeft: "1vw" }}>ADG_ATELIER</h3>
            <p>समस्या हैं सभी जानते हैं, उनका उपाय खोजना भी हमारा दायित्व है</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="https://i.pinimg.com/originals/ca/ab/f8/caabf820ac0474503bff2e196342ba77.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
