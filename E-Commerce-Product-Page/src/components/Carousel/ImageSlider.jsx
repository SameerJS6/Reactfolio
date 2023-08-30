import React from "react";
import "../Styles/ImageSlider.css";
import "../Styles/Animations.css";
import Lightbox from "./Lightbox";
import Slider from "./Slider";
import ImageIndicators from "./ImageIndicators";
import { useSliderContext } from "../../context/CarouselContext";

export default function ImageSlider() {
  const { isOpen, setIsOpen } = useSliderContext();

  return (
    <>
      <section className="wrapper" data-active="false">
        <Slider isVisible={true} onClick={() => setIsOpen(true)} />
        <ImageIndicators />
      </section>

      {isOpen && <Lightbox />}
    </>
  );
}
