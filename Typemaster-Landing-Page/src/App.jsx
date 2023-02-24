import React from "react";
import Logo from "./assets/logo.svg";
// Hero Section Image Imports
import HeroImg from "./assets/desktop/image-keyboard.jpg";
import TabletHeroImg from "./assets/tablet/image-keyboard.jpg";
import MobileHeroImg from "./assets/mobile/image-keyboard.jpg";
// Image Grid Imports
import image1 from "./assets/desktop/image-phone-and-keyboard.jpg";
import Tabletimage1 from "./assets/tablet/image-phone-and-keyboard.jpg";
import Mobileimage1 from "./assets/mobile/image-phone-and-keyboard.jpg";

import image2 from "./assets/desktop/image-glass-and-keyboard.jpg";
import Tabletimage2 from "./assets/tablet/image-glass-and-keyboard.jpg";
import Mobileimage2 from "./assets/mobile/image-glass-and-keyboard.jpg";
import Data from "../data.json";

export default function App() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <div>
          {/* Navbar Section  */}
          <nav className="flex items-center justify-between my-8 px-4 md:px-12 lg:px-20 xl:px-32">
            <img src={Logo} alt="The logo" />
            <button className="uppercase font-extrabold rounded-xl p-4 bg-lightBlue text-darkBlue transition-all duration-300  ease-in-out hover:bg-darkBlue hover:text-white active:rounded-md">
              pre-order now
            </button>
          </nav>
          {/* Hero Section  */}
          <section className="hero | grid md:grid-cols-2 | gap-8 md:gap-4 lg:gap-8 | px-4 md:px-12 lg:px-20 xl:px-32 | my-8 md:my-16 lg:my-24">
            <div className="grid gap-4 md:gap-6 lg:gap-8 place-content-center">
              <h1 className="text-darkBlue font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase">
                typemaster keyboard
              </h1>
              <p className="text-textBlue font-medium xl:w-[50ch] lg:text-lg">
                Improve your productivity and gaming without breaking the bank.
                Upgrade to high quality mechanical typing experience.
              </p>
              <div className="flex items-center gap-4">
                <button className="uppercase font-bold rounded-lg p-3 lg:p-4 bg-orange text-white text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-lightBlue hover:text-orange active:rounded-[24px]">
                  pre-order now
                </button>
                <button className="uppercase font-bold rounded-lg p-3 lg:p-4 bg-transparent text-textBlue text-sm lg:text-base transition-all duration-300  ease-in-out hover:bg-lightBlue hover:text-darkBlue active:rounded-[24px]">
                  release on 5/27
                </button>
              </div>
            </div>
            <div>
              <picture>
                <source media="(min-width: 768px)" srcset={TabletHeroImg} />
                <source media="(min-width: 1024px)" srcset={HeroImg} />
                <img
                  className="rounded-2xl"
                  src={MobileHeroImg}
                  alt="A Picuture of a Keyboard"
                />
              </picture>
            </div>
          </section>
          {/* Image Grid Section  */}
          <section className="image image-container-grid | px-4 md:px-12 lg:px-20 xl:px-32 | my-12 lg:my-16">
            <div className="image-grid | gap-4 md:gap-6 xl:gap-8">
              <div className="h-full first-image-blend bg-orange rounded-2xl md:rounded-3xl">
                <picture>
                  <source media="(min-width: 768px)" srcset={Tabletimage1} />
                  <source media="(min-width: 1024px)" srcset={image1} />
                  <img
                    className="h-full aspect-square w-full object-cover rounded-2xl md:rounded-3xl mix-blend-multiply opacity-70"
                    src={Mobileimage1}
                    alt="A Picuture of a Keyboard"
                  />
                </picture>
              </div>

              <div>
                <picture>
                  <source media="(min-width: 768px)" srcset={Tabletimage2} />
                  <source media="(min-width: 1024px)" srcset={image2} />
                  <img
                    className="aspect-square w-full rounded-2xl md:rounded-3xl"
                    src={Mobileimage2}
                    alt="A Picuture of a Keyboard"
                  />
                </picture>
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left lg:justify-center md:flex-row lg:flex-col gap-4 md:gap-8 ">
              <h2 className="uppercase text-darkBlue font-extrabold text-2xl md:text-3xl xl:text-4xl">
                mechanical wireless keyboard
              </h2>
              <p className="text-textBlue font-medium text-sm lg:text-base md:self-end">
                The Typemaster keyboard boasts top-nocth build and practical
                design. It offers a wide variety of switches and keycaps, along
                with reliable wireless connectivity.
              </p>
            </div>
          </section>
          {/* Features Grid  */}
          <section className="grid md:grid-cols-2 xl:grid-cols-4 | gap-4 md:gap-0 lg:gap-8 | px-4 md:px-12 lg:px-20 xl:px-32 | mt-8 md:mt-16 lg:mt-20">
            {Data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="grid gap-6 lg:gap-4 xl:gap-8 p-4 rounded-xl transition-all duration-500 hover:shadow-md hover:bg-lightBlue hover:scale-105"
                >
                  <div className="bg-orange rounded-lg block p-4 w-fit shadow-md ">
                    <img src={items.icon} alt={"Icons of" + items.icon} />
                  </div>
                  <h2 className="uppercase text-darkBlue font-extrabold text-xl">
                    {items.title}
                  </h2>
                  <p className="text-textBlue font-medium text-sm">
                    {items.info}
                  </p>
                </div>
              );
            })}
          </section>
          {/* Footer Section  */}
          <footer className="text-center text-textBlue font-medium text-sm md:text-base p-4 md:p-12">
            <span>Typemaster 2023 | All Rights Reserved</span>
          </footer>
        </div>
      </main>
    </>
  );
}
