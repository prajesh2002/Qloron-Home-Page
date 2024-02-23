import React from "react";
import "../styles/section8.css";
import { Button, Card, Col, Row } from "react-bootstrap";

function Section8() {
  const cardDetails = [
    {
      title: "Experience & Expertise",
      content:
        "We bring a wealth of expertise and years of experience in the industry, ensuring that we deliver top-notch solutions tailored to your unique business needs",
    },
    {
      title: "Customised Solutions",
      content:
        "We understand that every business is unique. Our team works closely with you to understand your requirements and provide customized solutions that align with your goals and objectives.",
    },
    {
      title: "Skilled Team",
      content:
        "Our team comprises highly skilled professionals who are experts in their respective fields. They stay updated with the latest industry trends and technologies to deliver cutting-edge solutions.",
    },
    {
      title: "Quality & Precision",
      content:
        "We have strong focus on delivering, high-quality solutions. Our rigorous quality assurance processes ensure that the end product meets the highest standards of performance functionally, and security ",
    },
    {
      title: "Timely Delivery",
      content:
        "We value your time and understand the importance of meeting deadlines. Our team is committed to delivering projects on time, ensuring that you can launch and implement your solutions without delay.",
    },
    {
      title: "Competitive Pricing",
      content:
        "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.",
    },
    {
      title: "Client-Centric Approach",
      content:
        "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.",
    },
    {
      title: "Long-Term Partneship",
      content:
        "We believe in building long-term relationships with our clients. Our goal is to become your trusted technology partner, supporting your growth and providing ongoing support and maintenance.",
    },
    {
      title: "Positive Track Record",
      content:
        "Our track record speaks for itself. We have a history of successful projects and satisfied clients who have achieved their business goals with our assistance.",
    },
    {
      title: "Finish the Project",
      content:
        "The project is completed and we give it to our customer. We also ask for customer's feedback.",
    },
  ];

  const idx=1;

  return (
    <>
      <div className="sec8-container">
        <h1 className="sec8-head">
          Why we <span style={{ color: "#26D6EB" }}>Stand Out</span> from others
        </h1>
        <h6 className="m-4 mt-0 sec8-head2">How We Work</h6>

        <div className="sec8-cards">
          <Row xs={1} sm={2} md={3} lg={5} className="g-4 mx-auto">
            {cardDetails.map((card, index) => (
              <Col key={index}>
                <Card className="sec8-card">
                  <Card.Body>
                    <Button className="sec8-card-index">
                      {index+1}
                    </Button>
                    <Card.Title className="sec8-card-title">
                      {card.title}
                    </Card.Title>
                    <p className="sec8-text">{card.content}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Section8;

// 
// import React, { useState, useRef, useEffect } from "react";
// import "../styles/section8.css";
// import { Button, Card, Col, Row } from "react-bootstrap";

// function Section8() {
//   const [selectedCard, setSelectedCard] = useState(0);
//   const lineRef = useRef(null);

//   const cardDetails = [
//     {
//       title: "Experience & Expertise",
//       content:
//         "We bring a wealth of expertise and years of experience in the industry, ensuring that we deliver top-notch solutions tailored to your unique business needs",
//     },
//     {
//       title: "Customised Solutions",
//       content:
//         "We understand that every business is unique. Our team works closely with you to understand your requirements and provide customized solutions that align with your goals and objectives.",
//     },
//     {
//       title: "Skilled Team",
//       content:
//         "Our team comprises highly skilled professionals who are experts in their respective fields. They stay updated with the latest industry trends and technologies to deliver cutting-edge solutions.",
//     },
//     {
//       title: "Quality & Precision",
//       content:
//         "We have strong focus on delivering, high-quality solutions. Our rigorous quality assurance processes ensure that the end product meets the highest standards of performance functionally, and security ",
//     },
//     {
//       title: "Timely Delivery",
//       content:
//         "We value your time and understand the importance of meeting deadlines. Our team is committed to delivering projects on time, ensuring that you can launch and implement your solutions without delay.",
//     },
//     {
//       title: "Competitive Pricing",
//       content:
//         "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.",
//     },
//     {
//       title: "Client-Centric Approach",
//       content:
//         "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.",
//     },
//     {
//       title: "Long-Term Partneship",
//       content:
//         "We believe in building long-term relationships with our clients. Our goal is to become your trusted technology partner, supporting your growth and providing ongoing support and maintenance.",
//     },
//     {
//       title: "Positive Track Record",
//       content:
//         "Our track record speaks for itself. We have a history of successful projects and satisfied clients who have achieved their business goals with our assistance.",
//     },
//     {
//       title: "Finish the Project",
//       content:
//         "The project is completed and we give it to our customer. We also ask for customer's feedback.",
//     },  ];
//   useEffect(() => {
//     const updateLine = () => {
//       const buttons = document.querySelectorAll(".sec8-card-index");
//       const selectedButton = buttons[selectedCard];
//       const line = lineRef.current;

//       if (selectedButton && line) {
//         const buttonRect = selectedButton.getBoundingClientRect();
//         const lineRect = line.getBoundingClientRect();

//         line.style.width = `${buttonRect.left + buttonRect.width / 2 - lineRect.left}px`;
//         line.style.transform = `translateX(${lineRect.left}px)`;
//       }
//     };

//     updateLine();
//     window.addEventListener("resize", updateLine);

//     return () => {
//       window.removeEventListener("resize", updateLine);
//     };
//   }, [selectedCard]);

//   const handleButtonClick = (index) => {
//     setSelectedCard(index);
//   };

//   return (
//     <>
//       <div className="sec8-container">
//         <h1 className="sec8-head">
//           Why we <span style={{ color: "#26D6EB" }}>Stand Out</span> from others
//         </h1>
//         <h6 className="m-4 mt-0" style={{ fontWeight: "700" }}>
//           |How We Work
//         </h6>

//         <div className="sec8-cards">
//           <Row xs={1} sm={2} md={3} lg={5} className="g-4 mx-auto">
//             {cardDetails.map((card, index) => (
//               <Col key={index}>
//                 <Card className={`sec8-card ${selectedCard === index ? "active" : ""}`}>
//                   <Card.Body>
//                     <Button
//                       className="sec8-card-index"
//                       onClick={() => handleButtonClick(index)}
//                     >
//                       {index + 1}
//                     </Button>
//                     <Card.Title className="sec8-card-title">
//                       {card.title}
//                     </Card.Title>
//                     <p className="sec8-text">{card.content}</p>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>

//         {/* Connecting Line */}
//         <div
//           className={`connecting-line ${selectedCard !== null ? "visible" : ""}`}
//         ></div>
//       </div>
//     </>
//   );
// }

// export default Section8;

// 