import React from "react";
import "../App.css";
import "./Styles/topbar.css";

export default function Topbar() {
  return (
    <>
      <header>
        <div className="title">
          <p className="track-in">My balance</p>
          <h2 className="tracking-in-bottom">$921.48</h2>
        </div>

        <div className="logo rotate-in">
          <svg
            className="svg-logo"
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
      </header>
    </>
  );
}
