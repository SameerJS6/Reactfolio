import React from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";

export default function App() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto ">
        <div className="main-container">
          <Navbar />
          <HeroContent />
        </div>
      </main>
    </>
  );
}
