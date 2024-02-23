import React from "react";
import { Card } from "react-bootstrap";
import img from "../images/section5.jpg";
import "../styles/section5.css";

function Section5() {
  return (
    <Card className="sec5-card">
      <h1 className="sec5-card-head">
        The company that leaders{" "}
        <span style={{ color: "#26D6EB" }}>trust to help</span> them grow and
        thrive
      </h1>
      <div className="sec5-div">
        <div className="sec5-left">
          <h6 style={{ fontWeight: "bold" }}>WHO WE ARE</h6>
          <Card.Img className="sec5-img" src={img} alt="Creative Services" />
        </div>
        <div className="sec5-right">
          <div className="sec5-inner-right">
            <h1 className="sec5-content">
              Cloud solutions for
              <span style={{ color: "#26D6EB" }}> every business</span>
            </h1>
            <p>
              Proven and best in class: integrated, with silos down,
              productivity up, and potential unleashed.{" "}
            </p>
          <button className="sec5-btn">Get Started with Qloron</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Section5;
