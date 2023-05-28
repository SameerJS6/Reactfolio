import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <div className="mx-auto max-w-[1780px]">
        {/* <Navbar /> */}
        <Hero />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
