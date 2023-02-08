import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
// All the Gsap Imports
import gsap, { Power3, Power4 } from "gsap";
import { Timeline } from "gsap/gsap-core";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export default function App() {
  // All the Refs declaration
  let App = useRef(null);

  // Refs for Navbar
  let navref = useRef(null);

  // Refs for Hero Section
  let MainImg = useRef(null);
  let MainContent = useRef(null);
  let arrows = useRef(null);
  let MainImgReveal = CSSRulePlugin.getRule(".main-img::after");

  // Refs for FooterContent
  let Image1 = useRef(null);
  let contentbox = useRef(null);
  let Image3 = useRef(null);
  let Reveal2 = CSSRulePlugin.getRule(".image-pseudo::after");
  let ImageReveal = CSSRulePlugin.getRule(".image-pseudo-2::after");

  useEffect(() => {
    let tl = new Timeline();
    let tl2 = new Timeline();
    tl.to(App, { duration: 0, css: { visibility: "visible" } });
    tl.to(MainImgReveal, {
      duration: 1.5,
      width: "0%",
      ease: Power3.easeInOut,
    })
      .from(MainImg.current, {
        duration: 1.5,
        scale: 1.5,
        ease: Power4.easeInOut,
        delay: -1.5,
      })
      .from(MainContent.current, {
        x: 70,
        opacity: 0,
        duration: 1,
        delay: -1.2,
      })
      .from(arrows.current, {
        y: 70,
        opacity: 0,
        duration: 1.5,
        ease: Power3.easeInOut,
        delay: -1.4,
      })
      .from(navref.current, {
        y: -100,
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeInOut",
        delay: -1.6,
      });

    tl2
      .to([ImageReveal, Reveal2], {
        duration: 1.5,
        width: "0%",
        ease: Power3.easeInOut,
      })
      .from([Image1.current, Image3.current], {
        duration: 1.5,
        scale: 1.6,
        ease: Power4.easeInOut,
        delay: -2.2,
      })
      .from(contentbox.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: Power4.easeInOut,
        delay: -1.5,
      });
    return () => tl.kill();
  }, []);
  return (
    <>
      <main
        ref={(el) => (App = el)}
        className="max-w-[1440px] mx-auto invisible"
      >
        <div className="main-container | relative">
          <Navbar nav={navref} />
          <HeroContent
            MainImgRef={MainImg}
            MainContentRef={MainContent}
            arrowsRef={arrows}
            // All the Footer Refs
            Image1ref={Image1}
            ContentBoxRef={contentbox}
            Image3ref={Image3}
          />
        </div>
      </main>
    </>
  );
}
