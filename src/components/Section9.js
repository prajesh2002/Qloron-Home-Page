import React from "react";
import "../styles/section9.css";
import img1 from "../images/section9.jpg";

function Section9() {
  return (
    <div className="sec9-container">
      <h1 className="sec9-head">Get In Touch</h1>

    <div className="sec9-inner-container">
      <div className="sec9-inner">
        <div className="sec9-left">
          <img src={img1} alt="" className="sec9-left-img" />
        </div>
        <div className="sec9-right">
          <div className="sec9-right-inner">
            <form action="form" className="sec9-form">
              <p>
                Please fill out our request for proposal form to get a quote or
                contact us about your upcoming project. We'll get back to you
                shortly.
              </p>

              <input
                type="text"
                className="sec9-form-input"
                placeholder="Full Name * "
                required
              />
              <br />
              <input
                type="text"
                className="sec9-form-input"
                placeholder="Email *"
                required
              />
              <br />
              <input
                type="text"
                className="sec9-form-input"
                placeholder="Phone Number (Optional)"
              />
              <br />
              <input
                type="text"
                className="sec9-form-input msg-input"
                placeholder="Message (Optional)"
              />
              <br />
              <button className="sec9-form-btn">Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
