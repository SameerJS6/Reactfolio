import React, { useState, useEffect, useRef } from "react";

import Hamburger from "hamburger-react";
import { Tooltip } from "react-tooltip";
import Ripple from "../hook/Ripple";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let Navref = useRef(null);
  const handleClickOutside = (e) => {
    if (
      Navref.current &&
      !Navref.current.contains(e.target) &&
      !e.target.closest(".hamburger-react")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  isOpen
    ? document.body.classList.add("scrollHidden")
    : document.body.classList.remove("scrollHidden");
  return (
    <>
      <header
        data-overlay={`${isOpen ? "true" : "false"}`}
        className="mx-auto flex max-w-[1440px] items-center justify-between py-4 pl-4 pr-2 sm:py-6 sm:pl-12 sm:pr-10 md:pl-14 md:pr-12 lg:px-28 xl:px-28"
      >
        <div>
          <a href="#" className="text-2xl font-bold sm:text-3xl transition-all duration-[350ms] ease-in-out">
            Sameer
          </a>
        </div>
        <nav
          ref={Navref}
          className={`navbar fixed top-0 flex w-[75%] flex-col items-start justify-center gap-6 max-sm:bg-surface pl-[10%] pr-[2%] transition-all duration-[350ms] ease-in-out sm:static sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:px-0 sm:opacity-100 lg:gap-6 ${
            isOpen
              ? "right-0 z-[5] rounded-s-2xl opacity-100"
              : "-right-72 rounded-none opacity-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-6 px-2 font-medium sm:flex-row sm:items-center xl:text-lg">
            <li
              data-tooltip-place="bottom"
              data-tooltip-content="Go to Project"
              data-tooltip-delay-show={300}
              className="navLinks overflow-hidden rounded-3xl py-2 transition-all duration-300 ease-in-out hover:-translate-y-1 active:rounded-2xl"
            >
              <a
                className="relative cursor-pointer overflow-hidden rounded-3xl px-4 py-3 transition-all duration-300 ease-in-out hover:bg-onPrimaryContainer hover:bg-opacity-10 active:rounded-2xl"
                onClick={() => setIsOpen(false)}
                href="#Projects"
              >
                Project
                <Ripple
                  color="rgb(var(--on-surface))"
                  opacity={0.3}
                  duration={350}
                />
              </a>
            </li>
            <li
              data-tooltip-place="bottom"
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
                  opacity={0.3}
                  duration={350}
                />
              </a>
            </li>
            <Tooltip
              anchorSelect=".navLinks"
              noArrow={true}
              className="navTip"
            />
          </ul>
          <div className="flex flex-col items-start gap-6 rounded-[100vmax] px-2 sm:flex-row sm:items-center sm:px-0">
            <a
              data-tooltip-place="bottom"
              data-tooltip-delay-show={300}
              data-tooltip-id="github-tooltip"
              className="github-tooltip relative right-8 flex scale-[140%] items-center gap-2 self-center overflow-hidden rounded-[100vmax]  px-2 py-1.5 text-xs transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:bg-onPrimaryContainer hover:bg-opacity-10 max-[300px]:right-0 sm:right-auto sm:scale-[115%] sm:gap-0 sm:rounded-[50%] sm:bg-transparent sm:p-2 sm:indent-[-9999px]"
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
            <Tooltip
              anchorSelect=".github-tooltip"
              noArrow={true}
              className="navTip"
              content="Visit Github Profile"
            />
            {/* <Within
              toggled={theme}
              toggle={setTheme}
              duration={750}
              className="relative flex flex-row-reverse items-center gap-2 overflow-hidden rounded-[100vmax] p-3 transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:bg-onPrimaryContainer hover:bg-opacity-10 sm:gap-0 sm:rounded-[50%] sm:bg-transparent sm:p-2 sm:indent-[-9999px]"
              onClick={handleTheme}
            >
              {!theme ? "Switch to Dark Mode" : "Switch to Light Mode"}
              
              <Ripple
                color="rgb(var(--on-surface))"
                opacity={0.3}
                duration={350}
              />
            </Within> */}
            <ThemeToggle />
          </div>
        </nav>
        <button
          className="z-20 rounded-[50%] transition-all duration-[350ms] hover:bg-onPrimaryContainer hover:bg-opacity-5 sm:hidden"
          aria-label="Hamburger Menu"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            duration={0.4}
            size={23}
            distance="sm"
            color="rgb(var(--on-background))"
          />
        </button>
      </header>
    </>
  );
}
