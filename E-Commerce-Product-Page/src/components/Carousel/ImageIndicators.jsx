import React from "react";
import { useSliderContext } from "../../context/CarouselContext";

export default function ImageIndicators({}) {
  const { currentIndex, handleClick, images } = useSliderContext();
  return (
    <div className="image-wrapper">
      {images.map((image, index) => (
        <div
          key={index}
          className={`wrapper-content tilt-in-bottom-2 ${
            currentIndex === index ? "active-img" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <img className="imgCarousel" src={image} alt="MainImage" />
        </div>
      ))}
    </div>
  );
}
