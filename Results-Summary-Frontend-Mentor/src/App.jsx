import React from "react";
import Result from "./components/Result";
import Summary from "./components/Summary";
import Leaf from "/leaf.png";

export default function App() {
  return (
    <>
      <main className="relative max-w-2xl md:backdrop:p-4">
        <div className="main-container slide-in | grid gap-4 md:gap-0 md:grid-cols-2 bg-white border-none rounded-3xl">
          <Result />
          <Summary />
        </div>
        <div className="svg-bg scale-in | absolute top-[-34%] left-[-22%] -z-10 hidden md:block rotate-[-110deg] max-w-[22rem]">
          <img src={Leaf} alt="Leaf Image In Backgrounod" />
        </div>
      </main>
    </>
  );
}
