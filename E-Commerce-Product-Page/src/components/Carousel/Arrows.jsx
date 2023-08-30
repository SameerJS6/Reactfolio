import React from "react";
import { useSliderContext } from "../../context/CarouselContext";

export default function Arrows() {
  const { handleNextClick, handlePrevClick } = useSliderContext();
  return (
    <>
      <button
        className="box arrows left-arrow scale-in"
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
      <button
        className="box arrows right-arrow scale-in"
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
    </>
  );
}
