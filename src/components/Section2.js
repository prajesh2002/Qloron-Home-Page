import React from "react";
import Card from "react-bootstrap/Card";
import img from "../images/section2.jpg";
import "../styles/section2.css";

function Section2() {
  return (
    <div className="sec2-div">
      <Card>
        <Card.Img src={img} className="img-fluid" />
        <Card.ImgOverlay>
          <h1 className="sec2-content">
            WE PROVIDE <span style={{ color: "#12B1BE" }}>WIDE RANGE</span> OF
            CREATIVE SERVICES
          </h1>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Section2;
