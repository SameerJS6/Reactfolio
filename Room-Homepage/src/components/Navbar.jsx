import React, { useState } from "react";
import Hamburger from "../assets/icon-hamburger.svg";
import CloseHamburger from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import Ripples from "react-ripples";

export default function Navbar({ nav }) {
  const [isactive, setIsactive] = useState(false);
  return (
    <>
      <header
        ref={nav}
        className="absolute left-0 z-[1] w-full flex flex-row-reverse md:flex-row items-center md:gap-11 p-4 md:p-8 lg:px-12 xl:px-16"
      >
        <div
          className={`logo mx-auto md:mx-0 transition-all duration-500 ease-in-out ${
            isactive
              ? "opacity-0 translate-y-4 md:opacity-100 md:translate-y-0"
              : "opacity-100 translate-y-0 delay-[-75ms] md:delay-none"
          }`}
        >
          <img src={logo} alt="Logo Image" />
        </div>

        <nav
          className={`fixed left-0 w-full md:w-auto items-center justify-around p-4 bg-[var(--white)] md:bg-transparent md:static md:p-0 flex transition-all duration-500 ease-in-out ${
            isactive ? "top-0 opacity-100" : "-top-20 opacity-0 md:opacity-100"
          }`}
        >
          <div className="hamburger z-10 md:hidden rounded-full">
            <Ripples>
              <button
                onClick={() => setIsactive(false)}
                className=" w-9 rounded-full aspect-square"
              >
                <img
                  className="mx-auto"
                  src={CloseHamburger}
                  alt="Close Hamburger Menu Image"
                />
              </button>
            </Ripples>
          </div>

          <ul className="navbar | flex justify-center text-[var(--black)] md:text-[var(--white)] gap-7 md:gap-12 lg:gap-16 items-center w-full md:w-auto">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsactive(!isactive)}
          className={`w-9 aspect-square md:hidden rounded-full transition-all duration-500 ease-in-out ${
            isactive
              ? "opacity-0 translate-y-4 pointer-events-none"
              : "opacity-100 translate-y-0 delay-[-75ms]"
          }`}
        >
          <img className="mx-auto" src={Hamburger} alt="Hamburger Menu Image" />
        </button>
      </header>
    </>
  );
}
