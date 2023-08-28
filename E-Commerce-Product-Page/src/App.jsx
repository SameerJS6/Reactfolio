import React from "react";
import ImageSlider from "./components/ImageSlider";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-wrapper">
          <ImageSlider />
          <MainContent />
        </div>
      </div>
    </>
  );
}
