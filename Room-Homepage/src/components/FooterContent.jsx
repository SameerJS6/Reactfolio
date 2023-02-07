import React, { useRef, useEffect } from "react";
import DarkImage from "../assets/image2.jpg";
import LightImage from "../assets/image3.jpg";

import { gsap, Power3, Power4 } from "gsap";
import { Timeline } from "gsap/gsap-core";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

export default function FooterContent() {
  let Image1 = useRef(null);
  let contentbox = useRef(null);
  let Image3 = useRef(null);
  let App = useRef(null);

  let Reveal2 = CSSRulePlugin.getRule(".image-pseudo::after");
  let ImageReveal = CSSRulePlugin.getRule(".image-pseudo-2::after");

  const tl = new Timeline();
  useEffect(() => {
    tl.to(App, { duration: 0, css: { visibility: "visible" } });
    tl.to([ImageReveal, Reveal2], {
      duration: 1.5,
      width: "0%",
      ease: Power3.easeInOut,
    }).to([Image1, Image3], {
      duration: 1.5,
      scale: 1,
      ease: Power4.easeInOut,
      delay: -2.2,
    });
  });
  return (
    <>
      <div ref={(el) => (App = el)} className="wrapper | invisible">
        <div className="grid-wrapper ">
          <div className="mx-auto lg:mx-0 | image-pseudo-2 overflow-hidden">
            <img
              ref={(el) => (Image1 = el)}
              className="aspect-[3/2] object-cover shadow-lg transition-all duration-500 ease-in-out scale-[1.6]"
              src={DarkImage}
              alt="A Picture of a Chair and a Table"
            />
          </div>
          <div className="p-8 md:p-12 lg:p-16 lg:pb-4">
            <h3 className="content-title font-bold tracking-[5px] md:tracking-[7px] uppercase pb-4 text-xl md:text-2xl ">
              About our furniture
            </h3>
            <p className="text-[var(--gray)] text-sm ">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="mx-auto lg:mx-0 | image-pseudo overflow-hidden">
            <img
              ref={(el) => (Image3 = el)}
              className="aspect-[3/2] object-cover shadow-lg transition-all duration-500 ease-in-out scale-[1.6]"
              src={LightImage}
              alt="A Picture of a Chair in a White Background"
            />
          </div>
        </div>
      </div>
    </>
  );
}
