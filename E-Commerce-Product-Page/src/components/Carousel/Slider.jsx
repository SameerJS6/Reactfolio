import React from "react";
import { useSliderContext } from "../../context/CarouselContext";

export default function Slider({ onClick, isVisible }) {
  const { currentIndex, handleNextClick, handlePrevClick, images } =
    useSliderContext();
  return (
    <div className="main-img">
      {images.map((image, imageIndex) => {
        let position = "NextSlide";
        currentIndex === imageIndex ? (position = "ActiveSlide") : "";
        if (
          imageIndex === currentIndex - 1 ||
          (currentIndex === 0 && imageIndex === images.length - 1)
        ) {
          position = "PrevSlide";
        }
        return (
          <div
            key={imageIndex}
            onClick={onClick}
            className={`${position} translate lightbox-img`}
          >
            <img className="hero-img" src={image} alt={image} />
          </div>
        );
      })}

      {isVisible && (
        <button
          className="arrows left-arrow scale-in"
          onClick={handlePrevClick}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke=""
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      )}
      {isVisible && (
        <button
          className="arrows right-arrow scale-in"
          onClick={handleNextClick}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke=""
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
