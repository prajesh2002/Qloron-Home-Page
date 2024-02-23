import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import img1 from "../images/section6/right.jpg";
import "../styles/section6.css";
import l1 from "../images/section6/left-1.jpg";
import l2 from "../images/section6/left-2.jpg";
import l3 from "../images/section6/left-3.jpg";
import l4 from "../images/section6/left-4.jpg";

function Section6() {
  return (
    <Card className="sec6-card">
      <h1 className="sec6-card-head">
        Why choose our company for your{" "}
        <span style={{ color: "#26D6EB" }}>projects?</span>
      </h1>
      <div className="sec6-div">
        <div className="sec6-left">
          <div className="sec6-inner-left">
            {/* <Row className="sec6-rows">
              <Col>
                <Row>
                  <h3>
                    100+
                    <br /> Projects
                  </h3>
                </Row>
                <Row>
                  {" "}
                  <h3>
                    20+ <br /> Developers
                  </h3>
                </Row>
              </Col>
              <Col>
                <Row>
                  <h3>
                    80+ <br /> Satisfied Clients
                  </h3>
                </Row>
                <Row>
                  {" "}
                  <h3>
                    90% <br /> Positive Feedback
                  </h3>
                </Row>
              </Col>
            </Row> */}

            <Col className="sec6-cols">
              <Row>
                <Col style={{ display: "flex" }} className="pb-3 col1">
                  <img
                    src={l1}
                    alt="not found"
                    className="sec6-left-inner-img"
                  />
                  {/* <i class="fa-light fa-folder-open fa-xl" style={{color: "#1ab2ff"}}></i> */}
                  <div className="sec6-left-inner-text">
                    <h2>100+</h2>
                    <h6> Projects</h6>
                  </div>
                </Col>
                <Col style={{ display: "flex" }} className="pb-3 col2">
                  <img
                    src={l2}
                    alt="not found"
                    className="sec6-left-inner-img"
                  />

                  <div className="sec6-left-inner-text">
                    <h2>20+</h2>
                    <h6>Developers</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex" }} className="pb-3 col1">
                  <img
                    src={l3}
                    alt="not found"
                    className="sec6-left-inner-img"
                  />

                  <div className="sec6-left-inner-text">
                    <h2>80+</h2>
                    <h6>Satisfied Clients</h6>
                  </div>
                </Col>
                <Col style={{ display: "flex" }}>
                  <img
                    src={l4}
                    alt="not found"
                    className="sec6-left-inner-img"
                  />

                  <div className="sec6-left-inner-text">
                    <h2>90%</h2>
                    <h6>Positive Feedback</h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
        </div>
        <div className="sec6-right">
          {/* <Card.Img className="sec6-img1" src={img1} alt="not found" /> */}
          <div className="sec6-inner-right">
            <p>
              We are a team of professional and enthusiastic people, who like
              what they do and are always in the process of growing and
              improving their skills.{" "}
            </p>
            <button className="sec6-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Section6;
