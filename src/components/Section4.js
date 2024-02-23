import React from "react";
import { Card } from "react-bootstrap";
import img from "../images/section4-2.jpg";
import "../styles/section4.css";

function Section4() {
  return (
    <Card className="sec4-card">
      <div className="sec4-div">
        <div className="sec4-left">
          <h1 className="sec4-content" style={{marginBottom:"20px"}}>
            CREATIVE <span style={{ color: "#26D6EB" }}>CHALLENGES</span> ARE
            OUR PASSION
          </h1>
          <p>
            Stay one step ahead with our future-proof technology services. We
            leverage the latest innovations and industry best practices to
            ensure your business remains agile, competitive, and prepared for
            the challenges of tomorrow.
          </p>
        </div>
        <div className="sec4-right">
          <Card.Img className="sec4-img" src={img} alt="Creative Services" />
        </div>
      </div>
    </Card>
  );
}

export default Section4;
