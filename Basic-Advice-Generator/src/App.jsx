import React, { useState, useEffect } from "react";
import GenerateImg from "./assets/icon-dice.svg";
import Divider from "./assets/pattern-divider-desktop.svg";
import MobileDivider from "./assets/pattern-divider-mobile.svg";

export default function App() {
  const [advice, setAdvice] = useState([]);
  const [error, setError] = useState(null);
  const URL = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let Data = await response.json();
      setAdvice(Data.slip);
    } catch (err) {
      setError(err.message);
      setAdvice(null);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <main className="mx-4 max-w-md md:mx-auto p-4 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out rounded-xl">
        {error && (
          <h1>{`There is a HTTP error: the Status is ${response.status}`} </h1>
        )}
        <div className="relative grid gap-4 text-center p-4 md:p-8">
          <p className="uppercase text-[var(--bg)] text-xs tracking-[3px] font-medium">
            advice #<span>{advice.id}</span>
          </p>
          <p className="font-extrabold text-[var(--white)] text-2xl transition-all duration-300">
            "{advice.advice}"
          </p>
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={Divider} />
              <img
                className="mx-auto mt-2 mb-8"
                src={MobileDivider}
                alt="A Divider Image"
              />
            </picture>
          </div>
          <button
            onClick={getAdvice}
            className="absolute left-1/2 mx-auto -translate-x-1/2 bottom-[-42px] transition-all duration-300 ease-in-out bg-[var(--neon)] rounded-[50%] border-none p-4 hover:scale-110 hover:-translate-y-1"
          >
            <img src={GenerateImg} alt="Generate Image" />
          </button>
        </div>
      </main>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
