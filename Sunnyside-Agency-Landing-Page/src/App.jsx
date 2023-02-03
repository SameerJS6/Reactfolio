import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { gsap, Power3 } from "gsap";

export default function App() {
  useEffect(() => {
    gsap.to(".container", { duration: 0, css: { visibility: "visible" } });
    gsap.fromTo(
      ".nav-gsap",
      { opacity: 0, y: -20, duration: 1, ease: Power3},
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".title-gsap",
      { opacity: 0, y: 20, duration: 0.8, ease: Power3 },
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".arrow-gsap",
      { opacity: 0, y: -20, duration: 0.8, ease: Power3 },
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".grid-content",
      { opacity: 0, y: 25, duration: 0.8, ease: Power3, stagger: 0.2 },
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".grid-content-testimonial",
      { opacity: 0, y: 25, duration: 0.8, ease: Power3, stagger: 0.2 },
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 25, duration: 1, ease: Power3, stagger: 0.2 },
      { opacity: 1, y: 0 }
    );
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
}
