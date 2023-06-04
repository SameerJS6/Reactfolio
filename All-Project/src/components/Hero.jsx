import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import About from "./About";
import Ripple from "../hook/Ripple";

export default function Hero({ containerRef }) {
  return (
    <>
      <main>
        <div
          ref={containerRef}
          className="hero-gradient min-h-[410px] rounded-b-3xl text-onBackground sm:rounded-b-[2.5rem] md:rounded-b-[3rem] lg:min-h-[450px] xl:rounded-b-[4rem]"
        >
          <Navbar />

          <div className="grid place-content-center gap-4 px-4 py-12 text-center transition-colors duration-300 sm:px-8 md:px-10 xl:py-24">
            <h1
              className="text-[50px] font-medium leading-snug sm:text-6xl md:text-[80px] xl:text-[112px]"
              id="target"
              role="heading"
            >
              Learning by Building
            </h1>
            <p className="heroText mx-auto max-w-[85ch] py-4 text-base sm:text-lg md:text-[22px]">
              Showcasing My Impressive Collection of Self-Developed React
              Projects, Browse My React Projects: Experience clean and
              impressive creations firsthand.
            </p>
            <div className="heroBtn">
              <a
                href="#Projects"
                type="button"
                aria-label="Get Started"
                className="relative mx-auto w-fit overflow-hidden rounded-[48px] bg-primary px-6 py-4 text-xl font-medium text-onPrimary transition-all duration-300 hover:bg-opacity-[95%] active:rounded-3xl md:px-8 md:py-6 md:text-2xl"
              >
                Explore My Projects
                <Ripple
                  color="rgb(var(--on-surface))"
                  opacity={0.2}
                  duration={600}
                />
              </a>
            </div>
          </div>
        </div>

        <Cards />

        <About />
      </main>
    </>
  );
}
