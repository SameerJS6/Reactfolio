import React from "react";

export default function FormsInput({ handleSubmit, error, detail, setDetail }) {
  const { day, month, year } = detail;
  return (
    <div className="theInputSection relative">
      <form className="flex flex-col gap-8 md:gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 md:w-10/12 md:gap-6">
          <div className="fade-in relative">
            <input
              data-error={`${error.showDay ? "true" : "false"}`}
              className="peer w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] transition-all duration-200 ease-in-out sm:text-3xl md:px-4 "
              type="number"
              name="day"
              id="day"
              placeholder=" "
              value={day}
              onChange={(e) => setDetail({ ...detail, day: e.target.value })}
            />
            {/* Tempo Label for very small screen devices  */}
            <label
              className={`pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 peer-focus-visible:text-[#854dff] min-[350px]:hidden ${
                error.showDay ? "text-[#ff5757]" : "text-[#716f6f]"
              }`}
              htmlFor="day"
            >
              Day
            </label>
            {/* Below the Floating Label for Tablets  */}
            <label
              className={`pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#716f6f] peer-focus-visible:-top-2 peer-focus-visible:left-3 peer-focus-visible:text-xs peer-focus-visible:text-[#854dff] max-[350px]:hidden sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-3xl sm:peer-focus-visible:-top-2 sm:peer-focus-visible:text-xs md:left-4 md:text-xs md:peer-placeholder-shown:left-3 md:peer-placeholder-shown:top-4 md:peer-placeholder-shown:text-2xl md:peer-focus-visible:-top-2 md:peer-focus-visible:text-xs ${
                error.showDay
                  ? "text-[#ff5757] peer-placeholder-shown:text-[#ff5757] peer-focus-visible:text-[#ff5757]"
                  : ""
              }`}
              htmlFor="day"
            >
              Day
            </label>
            <p
              className={`translate-y-2 text-[10px] italic text-[#ff5757] transition-all duration-300 sm:text-xs ${
                error.showDay
                  ? "translate-y-2 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {error.dayMessage}
            </p>
          </div>
          <div className="fade-in relative">
            <input
              data-error={`${error.showMonth ? "true" : "false"}`}
              className="peer w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] transition-all duration-200 ease-in-out md:px-4 md:text-3xl"
              type="number"
              name="month"
              id="month"
              placeholder=" "
              value={month}
              onChange={(e) => setDetail({ ...detail, month: e.target.value })}
            />{" "}
            {/* Tempo Label for very small screen devices  */}
            <label
              className={`pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 peer-focus-visible:text-[#854dff] min-[350px]:hidden ${
                error.showMonth ? "text-[#ff5757]" : "text-[#716f6f]"
              }`}
              htmlFor="month"
            >
              Month
            </label>
            {/* Below the Floating Label for Tablets  */}
            <label
              className={`pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#716f6f] peer-focus-visible:-top-2 peer-focus-visible:left-3 peer-focus-visible:text-xs peer-focus-visible:text-[#854dff] max-[350px]:hidden sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-3xl sm:peer-focus-visible:-top-2 sm:peer-focus-visible:text-xs md:left-4 md:text-xs md:peer-placeholder-shown:left-3 md:peer-placeholder-shown:top-4 md:peer-placeholder-shown:text-2xl md:peer-focus-visible:-top-2 md:peer-focus-visible:text-xs ${
                error.showMonth
                  ? "text-[#ff5757] peer-placeholder-shown:text-[#ff5757] peer-focus-visible:text-[#ff5757]"
                  : ""
              }`}
              htmlFor="month"
            >
              Month
            </label>
            <p
              className={`translate-y-2 text-[10px] italic text-[#ff5757] transition-all duration-300 sm:text-xs ${
                error.showMonth
                  ? "translate-y-2 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {error.monthMessage}
            </p>
          </div>
          <div className="fade-in relative">
            <input
              data-error={`${error.showYear ? "true" : "false"}`}
              className="peer w-full rounded-lg border-[1.5px] border-[#dbdbdb] p-3 text-2xl font-extrabold text-[#141414] transition-all duration-200 ease-in-out md:px-4 md:text-3xl"
              type="number"
              name="year"
              id="year"
              placeholder=" "
              value={year}
              onChange={(e) => setDetail({ ...detail, year: e.target.value })}
            />{" "}
            {/* Tempo Label for very small screen devices  */}
            <label
              className={`pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 peer-focus-visible:text-[#854dff] min-[350px]:hidden ${
                error.showYear ? "text-[#ff5757]" : "text-[#716f6f]"
              }`}
              htmlFor="year"
            >
              Year
            </label>
            {/* Below the Floating Label for Tablets  */}
            <label
              className={`pointer-events-none absolute -top-2 left-3 bg-white text-xs font-bold uppercase tracking-widest text-[#716f6f] transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#716f6f] peer-focus-visible:-top-2 peer-focus-visible:left-3 peer-focus-visible:text-xs peer-focus-visible:text-[#854dff] max-[350px]:hidden sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-3xl sm:peer-focus-visible:-top-2 sm:peer-focus-visible:text-xs md:left-4 md:text-xs md:peer-placeholder-shown:left-3 md:peer-placeholder-shown:top-4 md:peer-placeholder-shown:text-2xl md:peer-focus-visible:-top-2 md:peer-focus-visible:text-xs ${
                error.showYear
                  ? "text-[#ff5757] peer-placeholder-shown:text-[#ff5757] peer-focus-visible:text-[#ff5757]"
                  : ""
              }`}
              htmlFor="year"
            >
              Year
            </label>
            <p
              className={`translate-y-2 text-[10px] italic text-[#ff5757] transition-all duration-300 sm:text-xs ${
                error.showYear
                  ? "translate-y-2 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {error.yearMessage}
            </p>
          </div>
        </div>

        <div className="slide-in-top z-10 scale-[85%] self-center rounded-[50%] md:scale-100 md:self-end ">
          <button
            className="group aspect-square w-full rounded-[50%] border-none bg-[#854dff] px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-[#7c41fd] focus-visible:outline-offset-2"
            type="submit"
            aria-label="Submit Button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
              className="transition-all duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-90"
            >
              <g fill="none" stroke="#fff" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
