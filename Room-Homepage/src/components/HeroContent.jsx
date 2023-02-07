import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import FooterContent from "./FooterContent";
// All the Desktop Images Imports
import Image1 from "../assets/desktop-image-hero-1.jpg";
import Image2 from "../assets/desktop-image-hero-2.jpg";
import Image3 from "../assets/desktop-image-hero-3.jpg";
// All the Mobile Images Imports
import MobileImage1 from "../assets/mobile-image-hero-1.jpg";
import MobileImage2 from "../assets/mobile-image-hero-2.jpg";
import MobileImage3 from "../assets/mobile-image-hero-3.jpg";

import Arrow from "../assets/icon-arrow.svg";
import ArrowLeft from "../assets/icon-angle-left.svg";
import ArrowRight from "../assets/icon-angle-right.svg";

const Data = [
  {
    id: 1,
    img: Image1,
    mobileImg: MobileImage1,
    title: "Discover innovative ways to decorate",
    content:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of  you and what you love.",
  },
  {
    id: 2,
    img: Image2,
    mobileImg: MobileImage2,
    title: "We are available all across the globe",
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    img: Image3,
    mobileImg: MobileImage3,
    title: "Manufactured with the best materials",
    content:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
export default function HeroContent() {
  return (
    <>
      <section>
        <div className="hero-wrapper | grid ">
          <div className="relative">
            <picture>
              <source media="(min-width: 376px)" srcSet={Image1} />
              <img
                className="w-full"
                src={MobileImage1}
                alt="A Image of Chair and Table"
              />
            </picture>

            <div className="arrows | flex absolute right-0 bottom-0 bg-blue-600 xl:-right-32">
              <div>
                <button className="w-14 md:w-16 aspect-square bg-[var(--black)]  shadow-md transition-all duration-300 ease-in-out hover:bg-[var(--gray-400)] hover:shadow-lg">
                  <img className="mx-auto" src={ArrowLeft} alt="Left Arrow" />
                </button>
              </div>

              <div>
                <button className="w-14 md:w-16 aspect-square bg-[var(--black)]  shadow-md transition-all duration-300 ease-in-out hover:bg-[var(--gray-400)] hover:shadow-lg">
                  <img className="mx-auto" src={ArrowRight} alt="Right Arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid place-content-center gap-4 md:gap-6 lg:gap-8 p-8 pl-4 md:p-12 md:pl-5 lg:px-16">
            <h1 className="leading-none text-3xl md:w-[21ch] xl:w-[18ch]  tracking-normal md:text-4xl xl:text-[2.5rem] 2xl:text-5xl font-bold text-[var(--black)] pl-4 md:pl-7 md:leading-none">
              Discover innovative ways to decorate
            </h1>
            <p className="text-[var(--gray)] text-sm pl-4 md:pl-7">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <button className="flex gap-4 items-center  rounded-full p-4 md:px-7 md:py-3 uppercase font-bold tracking-[10px] w-fit text-[var(--black)] transition-all duration-300 ease-in-out hover:bg-slate-100">
              shop now
              <img src={Arrow} alt="Arrow For Shop Now" />
            </button>
          </div>
        </div>
      </section>
      <FooterContent />
    </>
  );
}
