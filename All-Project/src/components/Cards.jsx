import React from "react";
import Age from "../assets/1.jpg";
import Age2 from "../assets/2.jpg";
import { Tooltip } from "react-tooltip";
import Ripple from "../hook/Ripple";

export default function Cards() {
  return (
    <section
      className="relative my-6 px-4 py-2 sm:my-14 sm:py-2 md:my-[3.5rem] md:py-2 lg:my-20 lg:py-4"
      id="Projects"
    >
      <div className="m-6" role="heading">
        <h2 className="text-5xl font-medium" role="heading">
          Projects
        </h2>
      </div>
      <div className="card-grid mt-8 sm:gap-4 xl:mx-12">
        <article className="overflow-hidden rounded-3xl bg-[#e1e2ec] transition-all duration-300 hover:bg-[#d8e2ff] active:rounded-2xl sm:min-w-[321px] md:min-h-[350px]">
          <a
            data-tooltip-place="right"
            data-tooltip-delay-show={200}
            href="https://age-calculator-singh.netlify.app/"
            target="_blank"
            className="live-tooltip"
          >
            <div className="group relative rounded-[2rem] object-cover p-2 active:rounded-2xl">
              <img
                className="rounded-[2rem] transition-all duration-300 active:rounded-2xl"
                src={Age}
                alt="A Mockup of First Project"
              />

              <div className="absolute right-1.5 top-2 z-10 translate-y-4 rounded-[50%] bg-sky-50 bg-opacity-0 p-2 opacity-0 transition-all duration-500 ease-in-out hover:bg-opacity-75 group-hover:translate-y-0 group-hover:bg-opacity-25  group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 sm:h-12 sm:w-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="absolute inset-0 rounded-[2rem] object-cover p-2 opacity-0 transition-all duration-[350ms] ease-in-out active:rounded-2xl group-hover:opacity-100">
                <img
                  className="rounded-[2rem] transition-all duration-300 active:rounded-2xl"
                  src={Age2}
                  alt="A Another Mockup of First Project"
                />
              </div>
            </div>
          </a>
          <div className="grid gap-2 p-6">
            <p className="text-[24px] font-medium">Age Calculator</p>
            <p className="text-sm sm:text-base">
              This Challenge sharpens JavaScript and form validation skills,
              especially working with dates. Great test!
            </p>
            <div className="mt-2 flex items-center gap-2">
              <a
                data-tooltip-place="bottom"
                data-tooltip-delay-show={200}
                className="live-tooltip relative scale-[125%] self-center overflow-hidden rounded-[50%] p-2 transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:bg-lime-50 sm:scale-110"
                href="https://age-calculator-singh.netlify.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <Ripple color={"#F8EC70"} opacity={1} />
              </a>

              <a
                data-tooltip-place="right"
                data-tooltip-delay-show={200}
                className="github-tip relative scale-[125%] self-center overflow-hidden rounded-[50%] p-2 transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:bg-lime-50 sm:scale-110"
                href="https://github.com/SameerJS6"
                target={"_blank"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 23"
                  version="1.1"
                  className="h-5 w-5 transition-colors delay-75 duration-500 sm:h-6 sm:w-6"
                >
                  <g id="surface1">
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "evenodd",
                        fill: "var(--on-background)",
                        fillOpacity: "1",
                      }}
                      d="M 11.964844 0 C 5.347656 0 0 5.269531 0 11.792969 C 0 17.003906 3.425781 21.417969 8.179688 22.976562 C 8.773438 23.09375 8.992188 22.722656 8.992188 22.410156 C 8.992188 22.136719 8.972656 21.203125 8.972656 20.226562 C 5.644531 20.929688 4.953125 18.820312 4.953125 18.820312 C 4.417969 17.453125 3.625 17.101562 3.625 17.101562 C 2.535156 16.378906 3.703125 16.378906 3.703125 16.378906 C 4.914062 16.457031 5.546875 17.589844 5.546875 17.589844 C 6.617188 19.386719 8.339844 18.878906 9.03125 18.566406 C 9.132812 17.804688 9.449219 17.277344 9.785156 16.984375 C 7.132812 16.710938 4.339844 15.695312 4.339844 11.167969 C 4.339844 9.878906 4.8125 8.824219 5.566406 8.003906 C 5.445312 7.710938 5.03125 6.5 5.683594 4.878906 C 5.683594 4.878906 6.695312 4.566406 8.972656 6.089844 C 9.949219 5.832031 10.953125 5.703125 11.964844 5.699219 C 12.972656 5.699219 14.003906 5.835938 14.957031 6.089844 C 17.234375 4.566406 18.242188 4.878906 18.242188 4.878906 C 18.898438 6.5 18.480469 7.710938 18.363281 8.003906 C 19.136719 8.824219 19.589844 9.878906 19.589844 11.167969 C 19.589844 15.695312 16.796875 16.691406 14.125 16.984375 C 14.558594 17.355469 14.933594 18.058594 14.933594 19.171875 C 14.933594 20.753906 14.914062 22.019531 14.914062 22.410156 C 14.914062 22.722656 15.132812 23.09375 15.726562 22.976562 C 20.480469 21.414062 23.910156 17.003906 23.910156 11.792969 C 23.929688 5.269531 18.558594 0 11.964844 0 Z M 11.964844 0 "
                    />
                  </g>
                </svg>
                <Ripple color={"#F8EC70"} opacity={1} />
              </a>
            </div>
          </div>
          <Tooltip
            anchorSelect=".live-tooltip"
            content="Visit Live Site"
            noArrow={true}
          />
          <Tooltip
            anchorSelect=".github-tip"
            content="Visit Code"
            noArrow={true}
          />
        </article>
        <article></article>
        <article></article>
      </div>

      <button
        type="button"
        className="absolute -bottom-7 left-1/2 -translate-x-1/2 overflow-hidden rounded-3xl bg-sky-100 px-4 py-2 font-medium transition-all duration-300 hover:bg-sky-200 active:rounded-xl sm:-bottom-10 lg:-bottom-14 lg:px-5 lg:text-lg"
      >
        Show More
        <Ripple color={"rgb(2 132 199)"} opacity={0.35} />
      </button>
    </section>
  );
}
