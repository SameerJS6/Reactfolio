import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    gsap.to(".container", { duration: 0, css: { visibility: "visible" } });
    gsap.fromTo(
      ".nav-gsap",
      { opacity: 0, y: -50, duration: 1, ease: Power3.easeOut },
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".title-gsap",
      { opacity: 0, y: 100, duration: 1, ease: Power3.easeIn },
      { opacity: 1, y: 0 }
    );
    gsap.fromTo(
      ".arrow-gsap",
      { opacity: 0, y: -50, duration: 1, ease: Power3 },
      { opacity: 1, y: 0 }
    );
    gsap.to(".grid-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: Power3.easeOut,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".grid-content",
        start: "-200px 40%",
        end: "200px 30%",
        toggleActions: "restart",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(".grid-content-2", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: Power3.easeOut,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".grid-content-2",
        start: "-270px 10%",
        end: "50px 30%",
        toggleActions: "restart",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(".grid-content-3", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: Power3.easeOut,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".grid-content-3",
        start: "-270px 10%",
        end: "300px 30%",
        toggleActions: "restart",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.to(".grid-content-testimonial", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: ".grid-content-testimonial",
        start: "-500px 20%",
        end: "100px",
        toggleActions: "restart",
        // markers: true,
        scrub: 1,
      },
    });
    gsap.to(".card", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: ".card",
        start: "-200px 20%",
        end: "150px 20%",
        toggleActions: "restart",
        // markers: true,
        scrub: 1,
      },
    });
    gsap.to(".foot", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: ".foot",
        start: "-300px 20%",
        end: "10px 50%",
        toggleActions: "restart",
        // markers: true,
      },
    });
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
