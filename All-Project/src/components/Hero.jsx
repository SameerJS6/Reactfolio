import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import About from "./About";

export default function Hero() {
  return (
    <>
      <main>
        <div className="hero-gradient min-h-[410px] rounded-b-3xl sm:rounded-b-[2.5rem] md:rounded-b-[3rem] lg:min-h-[450px] xl:rounded-b-[4rem]">
          <Navbar />

          <div className="grid place-content-center gap-4 px-4 py-12 text-center sm:px-8 md:px-10 xl:py-24">
            <h1
              className="text-[50px] font-medium leading-snug sm:text-6xl md:text-[80px] xl:text-[112px]"
              role="heading"
            >
              Learning by Building
            </h1>
            <p
              className="mx-auto max-w-[85ch] py-4 text-base sm:text-lg md:text-[22px]"
              role="Sub Heading"
            >
              Showcasing My Impressive Collection of Self-Developed React
              Projects, Browse My React Projects: Experience clean and
              impressive creations firsthand.
            </p>
            {/* <p>
              Welcome to Reactfolio, where you can explore my diverse range of
              self-developed React projects. Discover innovative web
              applications that demonstrate the power and versatility of React.{" "}
            </p> */}
            <a
              href="#Projects"
              type="button"
              aria-label="Get Started"
              className="mx-auto w-fit rounded-[48px] bg-[#025ac2] px-6 py-4 text-xl font-medium text-white transition-all duration-300 hover:bg-opacity-[85%] active:rounded-3xl md:px-8 md:py-6 md:text-2xl"
            >
              Explore My Projects
            </a>
          </div>
        </div>

        <Cards />

        <About />
      </main>
    </>
  );
}
