import React from "react";

export default function About() {
  return (
    <section className="mx-6 lg:mx-12 py-12 pb-4 lg:py-8 lg:pb-2" id="About">
      <div className="about-gradient my-4 mt-8 mb-4 grid min-h-[300px] rounded-3xl px-4 py-2 sm:my-10 sm:mt-20 sm:rounded-[2.5rem] sm:py-2  md:rounded-[3rem] lg:my-20 lg:mt-16 lg:min-h-[450px] lg:py-4">
        <div className="grid place-content-center items-center gap-2 px-2 py-12 text-left sm:gap-4 sm:px-8 xl:place-content-start xl:py-24">
          <h2
            className="text-[50px] sm:text-6xl md:text-[77px] lg:text-[80px] xl:text-[112px] xl:leading-snug"
            role="heading"
          >
            About
          </h2>
          <p
            className=" max-w-[60ch] text-base sm:text-lg md:text-xl lg:text-[22px]"
            role="Sub Heading"
          >
            Reactfolio, where you can explore my diverse range of
            self-developed React projects. Discover innovative web applications
            that demonstrate the power and versatility of React.
          </p>
        </div>
      </div>
    </section>
  );
}
