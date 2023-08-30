import React from "react";
import ImageSlider from "./components/Carousel/ImageSlider";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { CarouselProvider } from "./context/CarouselContext";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-wrapper">
          <CarouselProvider>
            <ImageSlider />
          </CarouselProvider>
          <MainContent />
        </div>
      </div>
    </>
  );
}
