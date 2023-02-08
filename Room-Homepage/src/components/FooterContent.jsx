import React from "react";
import DarkImage from "../assets/image2.jpg";
import LightImage from "../assets/image3.jpg";

const About = {
  title: "About our furniture",
  content: `Our multifunctional collection blends design and function to suit
  your individual taste. Make each room unique, or pick a cohesive
  theme that best express your interests and what inspires you. Find
  the furniture pieces you need, from traditional to contemporary
  styles or anything in between. Product specialists are available
  to help you create your dream space.`,
};
export default function FooterContent({ Image1ref, ContentBoxRef, Image3ref }) {
  return (
    <>
      <div>
        <div className="grid-wrapper grid">
          <div className="mx-auto lg:mx-0 | image-pseudo-2 overflow-hidden">
            <img
              ref={Image1ref}
              className="aspect-[3/2] object-cover shadow-lg"
              src={DarkImage}
              alt="A Picture of a Chair and a Table"
            />
          </div>
          <div ref={ContentBoxRef} className="p-8 md:p-12 lg:p-16 lg:pb-4">
            <h2 className="font-bold tracking-[5px] md:tracking-[7px] uppercase pb-4 text-xl md:text-2xl ">
              {About.title}
            </h2>
            <p className="text-[var(--gray)] text-sm ">{About.content}</p>
          </div>
          <div className="mx-auto lg:mx-0 | image-pseudo overflow-hidden">
            <img
              ref={Image3ref}
              className="aspect-[3/2] object-cover shadow-lg"
              src={LightImage}
              alt="A Picture of a Chair in a White Background"
            />
          </div>
        </div>
      </div>
    </>
  );
}
