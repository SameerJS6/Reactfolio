import React from "react";
// import DarkImage from "../assets/image-about-dark.jpg";
// import LightImage from "../assets/image-about-light.jpg";
import DarkImage from "../assets/image2.jpg";
import LightImage from "../assets/image3.jpg";

export default function FooterContent() {
  return (
    <>
      <div className="wrapper |">
        <div className="grid-wrapper ">
          <div className="mx-auto lg:mx-0">
            <img
              className="aspect-[3/2] object-cover shadow-lg transition-all duration-500 ease-in-out "
              src={DarkImage}
              alt="A Picture of a Chair and a Table"
            />
          </div>
          <div className="p-8 md:p-12 lg:p-16 lg:pb-12">
            <h3 className="font-bold tracking-[5px] md:tracking-[7px] uppercase pb-4 text-xl md:text-2xl ">
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
          <div className="mx-auto lg:mx-0 ">
            <img
              className="aspect-[3/2] object-cover shadow-lg transition-all duration-500 ease-in-out "
              src={LightImage}
              alt="A Picture of a Chair in a White Background"
            />
          </div>
        </div>
      </div>
    </>
  );
}
