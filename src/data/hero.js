import React from "react";
import { slidesData } from "./slidesdata";

const Slider = () => {
  return (
    <div className="slider">
      {slidesData.map((slide) => (
        <div
          key={slide.id}
          className="slide"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <h2>Slide {slide.id}</h2>
        </div>
      ))}
    </div>
  );
};

export default Slider;
