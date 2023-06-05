import React from "react";
import Ripple from "../hook/Ripple";

export default function Footer() {
  return (
    <footer className="mt-10 sm:mt-12">
      <svg
        className="mx-auto w-[93%] transition-colors duration-300"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        width="1400"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="a"
            width="91"
            height="8"
            patternUnits="userSpaceOnUse"
            fill="none"
          >
            <g clipPath="url(#clip0_2426_11367)" fill="none">
              <path
                d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                stroke="rgba(var(--on-background) / 40%)"
                strokeLinecap="square"
                fill="none"
              ></path>
            </g>
          </pattern>
        </defs>
        <pattern
          id="a"
          width="91"
          height="8"
          patternUnits="userSpaceOnUse"
          fill="none"
        >
          <g clipPath="url(#clip0_2426_11367)" fill="none">
            <path
              d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
              stroke="#E1E3E1"
              strokeLinecap="square"
              fill="none"
            ></path>
          </g>
        </pattern>
        <rect width="100%" height="100%" fill='url("#a")'></rect>
      </svg>

      <nav
        role="Footer Navigation"
        className="mx-6 my-9 flex flex-col items-center justify-between gap-5 rounded-3xl bg-primary bg-opacity-[0.05] py-3 pl-2 pr-1 transition-colors duration-300 sm:my-10 sm:ml-6 sm:mr-5 sm:flex-row sm:rounded-full sm:py-4 sm:pl-6 sm:pr-5 md:my-12 md:gap-2 md:pl-7 md:pr-6 lg:mx-14 lg:px-14 lg:py-7"
      >
        <div>
          <a
            href="/"
            className="text-2xl font-bold transition-all duration-[350ms] ease-in-out sm:text-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="thumbnail-icon h-10 w-10 fill-onBackground transition-colors duration-300 sm:h-12 sm:w-12 "
              viewBox="-0.86 0 201.72 200"
              width="24"
              height="24"
            >
              <path
                d="M-0.86,100c0-55.23,44.77-100,100-100c23.29,0,44.72,7.96,61.72,21.31c-12.94,-7.21-27.85,-11.31-43.72,-11.31c-49.71,0-90,40.29-90,90c0,49.71,40.29,90,90,90c15.87,0,30.78,-4.11,43.72,-11.31c-16.99,13.35-38.43,21.31-61.72,21.31c-55.23,0-100,-44.77-100,-100zM200.86,100c0,44.18-35.82,80-80,80c-18.63,0-35.78,-6.37-49.38,-17.05c10.36,5.77,22.28,9.05,34.98,9.05c39.76,0,72-32.24,72-72c0-39.76-32.24-72-72-72c-12.69,0-24.62,3.28-34.98,9.05c13.6,-10.68,30.74,-17.05,49.38,-17.05c44.18,0,80,35.82,80,80zM123.05,145.32l-18.83,-34.68v0.13h-28.05v34.68h-11.43v-90.91h38.83c22.21,0,31.43,10.78,31.43,28.44c0,14.42-5.97,23.51-19.74,26.49l20,35.84zM76.17,63.64v38.31h26.88c14.42,0,20.52,-6.36,20.52,-19.09c0,-12.99,-5.97,-19.22,-20.52,-19.22z"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <ul className="grid grid-cols-2 items-center gap-4  px-2 font-medium sm:flex sm:flex-row md:gap-6 xl:text-lg">
          <li
            data-tooltip-place="top"
            data-tooltip-content="Go to Project"
            data-tooltip-delay-show={300}
            className="navLinks overflow-hidden rounded-3xl py-2 transition-all duration-300 ease-in-out hover:-translate-y-1 active:rounded-2xl"
          >
            <a
              className="relative cursor-pointer overflow-hidden rounded-3xl px-4 py-3 transition-all duration-300 ease-in-out hover:bg-onPrimaryContainer hover:bg-opacity-5 active:rounded-2xl"
              onClick={() => setIsOpen(false)}
              href="#Projects"
            >
              Project
              <Ripple
                color="rgb(var(--on-surface))"
                opacity={0.25}
                duration={350}
              />
            </a>
          </li>
          <li
            data-tooltip-place="top"
            data-tooltip-content="Go to About"
            data-tooltip-delay-show={300}
            className="navLinks overflow-hidden rounded-3xl py-2 transition-all duration-300 ease-in-out hover:-translate-y-1 active:rounded-2xl"
          >
            <a
              className="relative cursor-pointer overflow-hidden rounded-3xl px-4 py-3 transition-all duration-300 ease-in-out hover:bg-onPrimaryContainer hover:bg-opacity-5 active:rounded-2xl"
              onClick={() => setIsOpen(false)}
              href="#About"
            >
              About
              <Ripple
                color="rgb(var(--on-surface))"
                opacity={0.25}
                duration={350}
              />
            </a>
          </li>
          <a
            data-tooltip-place="top"
            data-tooltip-delay-show={300}
            className="github-tooltip | relative col-span-2 mx-auto flex scale-[140%] items-center gap-2 self-center overflow-hidden rounded-[100vmax] px-4 py-1.5 text-xs transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:bg-onPrimaryContainer hover:bg-opacity-10  max-sm:my-2 sm:scale-[115%] sm:gap-0 sm:rounded-[50%] sm:bg-transparent sm:p-2 sm:px-2 sm:indent-[-9999px]"
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
                    fill: "rgb(var(--on-surface)",
                    fillOpacity: "1",
                  }}
                  d="M 11.964844 0 C 5.347656 0 0 5.269531 0 11.792969 C 0 17.003906 3.425781 21.417969 8.179688 22.976562 C 8.773438 23.09375 8.992188 22.722656 8.992188 22.410156 C 8.992188 22.136719 8.972656 21.203125 8.972656 20.226562 C 5.644531 20.929688 4.953125 18.820312 4.953125 18.820312 C 4.417969 17.453125 3.625 17.101562 3.625 17.101562 C 2.535156 16.378906 3.703125 16.378906 3.703125 16.378906 C 4.914062 16.457031 5.546875 17.589844 5.546875 17.589844 C 6.617188 19.386719 8.339844 18.878906 9.03125 18.566406 C 9.132812 17.804688 9.449219 17.277344 9.785156 16.984375 C 7.132812 16.710938 4.339844 15.695312 4.339844 11.167969 C 4.339844 9.878906 4.8125 8.824219 5.566406 8.003906 C 5.445312 7.710938 5.03125 6.5 5.683594 4.878906 C 5.683594 4.878906 6.695312 4.566406 8.972656 6.089844 C 9.949219 5.832031 10.953125 5.703125 11.964844 5.699219 C 12.972656 5.699219 14.003906 5.835938 14.957031 6.089844 C 17.234375 4.566406 18.242188 4.878906 18.242188 4.878906 C 18.898438 6.5 18.480469 7.710938 18.363281 8.003906 C 19.136719 8.824219 19.589844 9.878906 19.589844 11.167969 C 19.589844 15.695312 16.796875 16.691406 14.125 16.984375 C 14.558594 17.355469 14.933594 18.058594 14.933594 19.171875 C 14.933594 20.753906 14.914062 22.019531 14.914062 22.410156 C 14.914062 22.722656 15.132812 23.09375 15.726562 22.976562 C 20.480469 21.414062 23.910156 17.003906 23.910156 11.792969 C 23.929688 5.269531 18.558594 0 11.964844 0 Z M 11.964844 0 "
                />
              </g>
            </svg>
            Visit Github
            <Ripple
              color="rgb(var(--on-surface))"
              opacity={0.4}
              duration={350}
            />
          </a>
        </ul>
      </nav>
    </footer>
  );
}
