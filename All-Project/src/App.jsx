import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { gsap } from "gsap";
import SplitType from "split-type";
import debounce from "lodash.debounce";
import ResizeObserver from "resize-observer-polyfill";

export default function App() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  var tl = gsap.timeline();

  useEffect(() => {
    const handleResize = debounce(() => {
      const containerWidth = containerRef.current.offsetWidth;

      if (
        textRef.current &&
        containerWidth !== textRef.current.containerWidth
      ) {
        textRef.current.containerWidth = containerWidth;
        textRef.current.split();
      }
    }, 900);

    resizeObserverRef.current = new ResizeObserver(handleResize);
    resizeObserverRef.current.observe(containerRef.current);

    return () => resizeObserverRef.current.disconnect();
    // console.log(containerRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    const textElement = document.querySelector("#target");
    textRef.current = SplitType.create(textElement);
    textRef.current.containerWidth = containerRef.current.offsetWidth;
    // let text = SplitType.create("#target");

    gsap.to(".mainApp", { duration: 0, css: { visibility: "visible" } });
    tl.from(".heroNav", {
      duration: 1,
      y: -25,
      opacity: 0,
      ease: "back.out",
      delay: 0.25,
      stagger: 0.1,
    })
      .from(textRef.current.chars, {
        duration: 0.9,
        yPercent: 130,
        opacity: 0,
        ease: "back.out",
        stagger: 0.05,
        delay: -1.4,
      })
      .fromTo(
        ".heroText",
        {
          y: 20,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          delay: -0.9,
        }
      )
      .fromTo(
        ".heroBtn",
        {
          y: 20,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          delay: -0.9,
        }
      )
      .fromTo(
        ".projectText",
        {
          y: 20,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          delay: -0.9,
        }
      )
  }, []);
  return (
    <>
      <div className="mainApp mx-auto max-w-[1780px]">
        <Hero containerRef={containerRef} />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
