import React, { useState, useEffect } from "react";
import "./Styles/Navbar.css";
import "./Styles/Animations.css";
import "@theme-toggles/react/css/InnerMoon.css";
import { InnerMoon } from "@theme-toggles/react";

export default function ThemeToggle() {
  const storedTheme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState(storedTheme === "dark");

  useEffect(() => {
    isDark
      ? document.body.classList.add("DarkMode")
      : document.body.classList.remove("DarkMode");
  }, [isDark]);

  const handleThemeToggle = () => {
    const newTheme = !isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <>
      <InnerMoon
        className="theme | fade-in-fwd"
        duration={750}
        toggled={isDark}
        toggle={handleThemeToggle}
      />
    </>
  );
}
