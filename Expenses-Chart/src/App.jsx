import React from "react";
import "./App.css";
import Main from "./components/Main";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <>
      <div className="container slide-in">
        <div> <Topbar /> </div>
        <div> <Main /> </div>
      </div>
 
      </>
  );
}
