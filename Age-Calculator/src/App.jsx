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
              <div className="grid grid-cols-3 gap-4 md:w-10/12 md:gap-6">
                <div className="relative">
                  <input
                    className="peer w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] sm:text-3xl md:px-4"
                    type="number"
                    name="day"
                    id="day"
                    placeholder=" "
                  />
                  <label
                    className="pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#716f6f] peer-focus-visible:-top-2 peer-focus-visible:left-3 peer-focus-visible:text-xs peer-focus-visible:text-[#854dff] max-[350px]:peer-placeholder-shown:text-base max-[350px]:peer-focus-visible:text-xs max-[300px]:peer-placeholder-shown:text-base max-[300px]:peer-focus-visible:-top-1.5 max-[300px]:peer-focus-visible:text-xs sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-3xl sm:peer-focus-visible:-top-2 sm:peer-focus-visible:text-xs md:left-4 md:text-sm md:peer-placeholder-shown:left-3 md:peer-placeholder-shown:top-4 md:peer-placeholder-shown:text-2xl md:peer-focus-visible:-top-2 md:peer-focus-visible:text-xs"
                    htmlFor="day"
                  >
                    Day
                  </label>
                  <p className="translate-y-2 text-[10px] italic text-[#ff5757] opacity-100 transition-all duration-300 sm:text-xs">
                    The field is required
                  </p>
                </div>
                <div className=" relative">
                  <input
                    className="peer w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] md:px-4 md:text-3xl"
                    type="number"
                    name="month"
                    id="month"
                    placeholder=" "
                  />
                  <label
                    className="pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#716f6f] peer-focus-visible:-top-2 peer-focus-visible:left-3 peer-focus-visible:text-xs peer-focus-visible:text-[#854dff] max-[350px]:peer-placeholder-shown:text-base max-[350px]:peer-focus-visible:text-xs max-[300px]:peer-placeholder-shown:text-base max-[300px]:peer-focus-visible:-top-1.5 max-[300px]:peer-focus-visible:text-xs sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-3xl sm:peer-focus-visible:-top-2 sm:peer-focus-visible:text-xs md:left-4 md:text-sm md:peer-placeholder-shown:left-3 md:peer-placeholder-shown:top-4 md:peer-placeholder-shown:text-2xl md:peer-focus-visible:-top-2 md:peer-focus-visible:text-xs"
                    htmlFor="month"
                  >
                    Month
                  </label>
                  <p className="translate-y-2 text-[10px] italic text-[#ff5757] opacity-100 transition-all duration-300 sm:text-xs">
                    The field is required
                  </p>
                </div>
                <div className="relative">
                  <input
                    className="peer w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] md:px-4 md:text-3xl"
                    type="number"
                    name="year"
                    id="year"
                    placeholder=" "
                  />
                  <label
                    className="pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#716f6f] peer-focus-visible:-top-2 peer-focus-visible:left-3 peer-focus-visible:text-xs peer-focus-visible:text-[#854dff] max-[350px]:peer-placeholder-shown:text-base max-[350px]:peer-focus-visible:text-xs max-[300px]:peer-placeholder-shown:text-base max-[300px]:peer-focus-visible:-top-1.5 max-[300px]:peer-focus-visible:text-xs sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-3xl sm:peer-focus-visible:-top-2 sm:peer-focus-visible:text-xs md:left-4 md:text-sm md:peer-placeholder-shown:left-3 md:peer-placeholder-shown:top-4 md:peer-placeholder-shown:text-2xl md:peer-focus-visible:-top-2 md:peer-focus-visible:text-xs"
                    htmlFor="year"
                  >
                    Year
                  </label>
                  <p className="translate-y-2 text-[10px] italic text-[#ff5757] opacity-100 transition-all duration-300 sm:text-xs">
                    The field is required
                  </p>
                </div>
              </div>

              <div className="z-10 scale-[85%] self-center rounded-[50%] md:scale-100 md:self-end">
                <button
                  className="group aspect-square w-full rounded-[50%] border-none bg-[#854dff] px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-[#7c41fd] focus-visible:outline-offset-2"
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
