import React from "react";

export default function Results({ age }) {
  return (
    <div className="grid gap-1 text-5xl font-extrabold italic text-[#141414] sm:text-6xl md:text-[4rem] lg:text-7xl">
      <h1 className="tracking-in">
        <span className="text-[#854dff]">{age.year > 0 ? age.year : "--"}</span>{" "}
        years
      </h1>
      <h2 className="tracking-in">
        <span className="text-[#854dff]">
          {age.month >= 0 ? age.month : "--"}
        </span>{" "}
        months
      </h2>
      <h3 className="tracking-in">
        <span className="text-[#854dff]">{age.day >= 0 ? age.day : "--"}</span>{" "}
        days
      </h3>
    </div>
  );
}
