import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="py-4 container">
      <nav className="flex justify-between items-center ">
        <Link href={"/"} className="text-xl font-semibold tracking-tight">
          Countries Info
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
