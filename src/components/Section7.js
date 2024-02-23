import React from "react";
import "../styles/section7.css";
import Slider from "react-infinite-logo-slider";
import { useState } from "react";

import img1 from "../images/section7/s1.jpg";
import img2 from "../images/section7/s2.jpg";
import img3 from "../images/section7/s3.jpg";
import img4 from "../images/section7/s4.jpg";
import img5 from "../images/section7/s5.jpg";
import img6 from "../images/section7/s6.jpg";

function Section7() {
  //   const [isSliderPaused, setIsSliderPaused] = useState(false);

  //   const handlePauseToggle = (e) => {
  //     e.stopPropagation();
  //     setIsSliderPaused((prevPaused) => !prevPaused);
  //   };

  return (
    <>
      <div className="sec7-container">
        <div className="sec7-div1">
          <h1>
            <span style={{ color: "#26D6EB" }}>Trusted by companies</span> small
            and large around the globe
          </h1>
          <button className="sec7-div1-btn">Search or Customer Queries</button>
        </div>
        <div className="sec7-div2">
          <Slider
            width="250px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
            // isPaused={isSliderPaused} // Pass the isPaused prop to control the slider
          >
            <Slider.Slide>
              <img src={img1} alt="any1" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img2} alt="any2" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img3} alt="any3" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img4} alt="any4" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img5} alt="any5" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img6} alt="any6" className="w-36 sec7-slider-img" />
            </Slider.Slide>
          </Slider>
          {/* <button className="sec7-slider-btn" onClick={handlePauseToggle}>
            {isSliderPaused ? "Resume" : "Pause"} Slider
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Section7;
