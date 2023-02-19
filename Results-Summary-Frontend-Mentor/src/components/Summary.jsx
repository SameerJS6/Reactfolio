import React from "react";
import Data from "/data";

export default function Summary() {
  return (
    <>
      <div>
        <article className="summary-container | grid gap-4 p-4 md:p-8">
          <span className="tracking-in | flex items-center gap-2 font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="opac-slide | w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Summary
          </span>
          <div className="grid gap-4 summary-container">
            {Data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="opac-slide | flex justify-between items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 ease hover:-translate-y-1 hover:shadow"
                  style={{
                    backgroundColor: `${items.backgroundColor}`,
                  }}
                >
                  <div
                    className={`flex gap-2 md:gap-4 bg-[${items.backgroundColor}]`}
                  >
                    <img src={items.icon} alt={items.category} />
                    <span
                      className="font-bold"
                      style={{ color: `${items.Color}` }}
                    >
                      {items.category}
                    </span>
                  </div>
                  <span className="font-bold text-right">
                    {items.score} <span className="font-medium">/ 100</span>
                  </span>
                </div>
              );
            })}
          </div>
          <button className="btn opac-slide| text-[var(--neutral-100)] border-none rounded-full text-lg px-4 py-3 transition-all duration-500 ease-in-out bg-[var(--neutral-400)]">
            <span className="flex items-center gap-2 relative justify-center">
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </article>
      </div>
    </>
  );
}
