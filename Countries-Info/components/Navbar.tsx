import React from "react";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="py-4 container">
      <nav className="flex justify-between items-center ">
        <h1 className="text-xl font-semibold tracking-tight">Countries Info</h1>
        <ThemeToggle />
      </nav>
    </header>
  );
}
