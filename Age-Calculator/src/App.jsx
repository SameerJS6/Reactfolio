import React from "react";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main className="mx-4 max-w-xl rounded-s-3xl rounded-ee-[5rem] rounded-se-3xl bg-white px-6 py-8 shadow-md sm:mx-0 md:rounded-s-3xl md:rounded-ee-[9rem] md:rounded-se-3xl md:pl-8 md:pr-10">
        <div className="grid gap-6">
          {/* The Input Section  */}
          <div className="theInputSection relative">
            <form
              className="flex flex-col gap-8 md:gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-4 md:w-10/12 md:gap-6">
                <div className="flex flex-col gap-1 md:gap-2">
                  <label
                    className="text-xs font-bold uppercase tracking-widest text-[#716f6f] md:text-sm"
                    htmlFor="day"
                  >
                    Day
                  </label>
                  <input
                    className="w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] focus-visible:outline-1 focus-visible:outline-[#854dff] md:px-4 md:text-3xl"
                    type="number"
                    name="day"
                    id="day"
                  />
                  <p className="translate-y-2 text-[10px] italic text-[#ff5757] opacity-100 transition-all duration-300 sm:text-xs">
                    The field is required
                  </p>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <label
                    className="text-xs font-bold uppercase tracking-widest text-[#716f6f] md:text-sm"
                    htmlFor="month"
                  >
                    Month
                  </label>
                  <input
                    className="w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] focus-visible:outline-1 focus-visible:outline-[#854dff] md:px-4 md:text-3xl"
                    type="number"
                    name="month"
                    id="month"
                  />
                  <p className="translate-y-2 text-[10px] italic text-[#ff5757] opacity-100 transition-all duration-300 sm:text-xs">
                    The field is required
                  </p>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <label
                    className="text-xs font-bold uppercase tracking-widest text-[#716f6f] md:text-sm"
                    htmlFor="year"
                  >
                    Year
                  </label>
                  <input
                    className="w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] focus-visible:outline-1 focus-visible:outline-[#854dff] md:px-4 md:text-3xl"
                    type="number"
                    name="year"
                    id="year"
                  />
                  <p className="translate-y-2 text-[10px] italic text-[#ff5757] opacity-100 transition-all duration-300 sm:text-xs">
                    The field is required
                  </p>
                </div>
              </div>

              <div className="z-10 scale-[85%] self-center rounded-[50%] md:scale-100 md:self-end">
                <button
                  className="group aspect-square w-full rounded-[50%] border-none bg-[#854dff] px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-[#7c41fd]"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="44"
                    viewBox="0 0 46 44"
                    className="transition-all duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-90"
                  >
                    <g fill="none" stroke="#fff" stroke-width="2">
                      <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                    </g>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          {/* The Output Section  */}
          <div className="grid gap-1 text-5xl font-extrabold italic text-[#141414] sm:text-6xl md:text-[4rem] lg:text-7xl">
            <h1 className="">
              <span className="text-[#854dff]">--</span> years
            </h1>
            <h2 className="">
              <span className="text-[#854dff]">--</span> months
            </h2>
            <h3 className="">
              <span className="text-[#854dff]">--</span> days
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}
