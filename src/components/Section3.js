import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "../styles/section3.css";

import img1 from "../images/section3/1.jpg";
import img2 from "../images/section3/2.jpg";
import img3 from "../images/section3/3.jpg";
import img4 from "../images/section3/4.jpg";
import img5 from "../images/section3/5.jpg";
import img6 from "../images/section3/6.jpg";
import img7 from "../images/section3/7.jpg";
import img8 from "../images/section3/8.jpg";
import img9 from "../images/section3/9.jpg";
import img10 from "../images/section3/10.jpg";
import img11 from "../images/section3/11.jpg";
import img12 from "../images/section3/12.jpg";

const cardData = [
  { imagePath: img1, title: "Hire Resources" },
  { imagePath: img2, title: "Business Technology Platform" },
  { imagePath: img3, title: "Enterprise Resource Planning" },
  { imagePath: img4, title: "CRM & Customer Experience" },
  { imagePath: img5, title: "Spend Management" },
  { imagePath: img6, title: "Human Capital Management" },
  { imagePath: img7, title: "Financial Management" },
  { imagePath: img8, title: "Web Hosting" },
  { imagePath: img9, title: "Web Development" },
  { imagePath: img10, title: "Digital Marketing" },
  { imagePath: img11, title: "App Development" },
  { imagePath: img12, title: "Data Export" },
];

function Section3() {
  return (
    <div className="sec3-div">
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {cardData.map((card, index) => (
          <Col key={index}>
            <Card className="sec3-cards">
              <Card.Img
                className="sec3-card-img"
                variant="top"
                src={card.imagePath}
              />
              <Card.Body>
                <Card.Title className="sec3-card-title">
                  {card.title}
                </Card.Title>
                <button className="sec3-btn">Read more</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Section3;
