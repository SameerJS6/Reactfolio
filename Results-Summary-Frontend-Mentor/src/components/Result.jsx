import React from "react";
import Plant from "/plant.png";
import Flowers from "/flowers.png";

export default function Result() {
  return (
    <>
      <article>
        <div className="result-bg | relative grid gap-4 text-center border-none rounded-b-[2.5rem] md:rounded-3xl shadow-xl text-lg text-[var(--pale-blue)] p-8 h-full overflow-hidden">
          <h2 className="flex items-center gap-2 justify-center z-[1] tracking-in">
            Your Result
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
          <div className="score-bg opac-slide | rounded-[50%] border-none aspect-square mx-auto w-[150px] p-8">
            <h1 className="text-6xl font-extrabold">76</h1>
            <span>of 100</span>
          </div>
          <span className="flex justify-center items-center gap-2 text-3xl text-white | tracking-in">
            Great
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
          </span>
          <p className="opac-slide | z-[1] pointer-events-none">
            You scored higher thatn 65% of the people who have taken these
            tests.
          </p>

          <div className="plant-img left-right | absolute bottom-[-110px] right-[-130px] rotate-[-25deg]">
            <img src={Plant} alt="Plant Image" />
          </div>

          <div className="plant-img right-left | absolute top-[-132px] left-[-123px] rotate-[125deg] pointer-events-none">
            <img src={Flowers} alt="Flowers Image" />
          </div>
        </div>
      </article>
    </>
  );
}
