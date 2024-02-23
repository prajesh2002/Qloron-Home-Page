import React from "react";
import exampleCarouselImage from "../images/section1.jpg";
import { Carousel } from "react-bootstrap";
import "../styles/section1.css";
 
function Section1() {
  return (
    <>
      <div className="sec1-container">
        <Carousel  controls={false} interval={1000} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={exampleCarouselImage}
              alt="First slide"
            />
            <div className="sec1-content">
              <h1>OUR CREATIVITY IS YOUR SUCCESS</h1>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={exampleCarouselImage}
              alt="Second slide"
            />
            <div className="sec1-content">
              <h1>OUR CREATIVITY IS YOUR SUCCESS</h1>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={exampleCarouselImage}
              alt="Third slide"
            />
            <div className="sec1-content">
              <h1>OUR CREATIVITY IS YOUR SUCCESS</h1>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Section1;
