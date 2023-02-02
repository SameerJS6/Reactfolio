import React from "react";
import Egg from "../assets/desktop/image-transform.jpg"
import Orange from "../assets/desktop/image-photography.jpg"
import Cherry from "../assets/desktop/image-graphic-design.jpg"
import Standout from "../assets/desktop/image-stand-out.jpg"

import MobileEgg from "../assets/mobile/image-transform.jpg"
import MobileOrange from "../assets/mobile/image-photography.jpg"
import MobileCherry from "../assets/mobile/image-graphic-design.jpg"
import MobileStandout from "../assets/mobile/image-stand-out.jpg"
export default function ContentGrid() {
  return (
    <>
      <article className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="grid place-content-center text-center md:text-left gap-4 lg:gap-8 p-8 lg:p-20 ">
          <h2 className="font-fraunces text-3xl md:text-4xl md:width-[15ch]">Transform your brand</h2>
          <p className="font-barlow font-bold text-[var(--neutral-gray-400)] text-sm lg:text-base">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            must of the marketing for you
          </p>
            <button className="grid-btn | font-fraunces font-extrabold md:mr-auto">
              Learn more
            </button>
        </div>
        <div className="grid-image">
          <picture>
            <source media="(min-width: 1024px)" srcSet={Egg} />
            <img src={MobileEgg} alt="A Picture of a Egg" />
          </picture>
        </div>
      </article>

      <article className="flex flex-col md:grid md:grid-cols-2">
        <div className="grid-image">
          <picture>
            <source media="(min-width: 1024px)" srcSet={Standout} />
            <img src={MobileStandout} alt="A Picture of a Pink cup" />
          </picture>
        </div>

        <div className="grid place-content-center text-center md:text-left gap-4 lg:gap-8 p-8 lg:p-20 ">
          <h2 className="font-fraunces text-3xl md:text-4xl md:width-[15ch]">Stand out to the right audience</h2>
          <p className="font-barlow font-bold text-[var(--neutral-gray-400)] text-sm lg:text-base">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <button className="grid-btn-2 | font-fraunces font-extrabold md:mr-auto">
            Learn more
          </button>
        </div>
      </article>

      <article className="flex flex-col md:grid md:grid-cols-2">
        <div className="main-content-grid | grid place-content-center gap-4">
          <picture>
            <source media="(min-width: 768px)" srcSet={Cherry} />
            <img src={MobileCherry} alt="A Picture of a Cherry"  />
          </picture>
          <div className="content | text-center py-20 px-8 md:p-8 lg:p-16 xl:p-20">
            <h2 className="font-fraunces leading-[3] md:leading-[2] lg:leading-[3] text-3xl md:text-4xl lg:text-5xl md:width-[15ch]  text-[var(--cyan)]">Graphic Design</h2>
            <p className="font-barlow text-[var(--cyan)] text-sm lg:text-base">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>

        <div className="main-content-grid | grid place-content-center gap-4">
        <picture>
            <source media="(min-width: 768px)" srcSet={Orange} />
            <img src={MobileOrange} alt="A Picture of a Orange"  />
          </picture>
          <div className="content | text-center py-20 px-8 md:p-8 lg:p-16 xl:p-20">
            <h2 className="font-fraunces leading-[3] md:leading-[2] lg:leading-[3] text-3xl md:text-4xl lg:text-5xl md:width-[15ch] text-[var(--blue)]">Photography</h2>
            <p className="font-barlow text-[var(--blue)] text-sm lg:text-base">
              Increase your credibility by getting the most stunning, high-quality
              photos that improve your business image.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
