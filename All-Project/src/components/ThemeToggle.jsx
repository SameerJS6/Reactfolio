import React, { useState, useEffect } from "react";

import Ripple from "../hook/Ripple";
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const localTheme = window.localStorage.getItem("theme");
    setTheme(
      localTheme === "dark" || (localTheme === null && prefersDarkTheme)
    );

    // It checks whether the user's device perfers dark theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // Function which updates the localStorage & theme state based on mediaQuery
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme);
      setTheme(mediaQuery.matches);
    };

    // Checks if the media Query object has an addEventListener or addListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
    }

    // Clean up - responsible for removing the eventlistener to prevent memeory leak
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    theme
      ? document.body.classList.add("DarkMode")
      : document.body.classList.remove("DarkMode");
  }, [theme]);

  const handleTheme = () => {
    const newtheme = theme ? "light" : "dark";
    window.localStorage.setItem("theme", newtheme);
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <Within
      toggled={theme}
      toggle={setTheme}
      duration={750}
      className="relative flex flex-row-reverse items-center gap-2 overflow-hidden rounded-[100vmax] p-3 text-onBackground transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:bg-onPrimaryContainer hover:bg-opacity-10 sm:gap-0 sm:rounded-[50%] sm:bg-transparent sm:p-2 sm:indent-[-9999px]"
      onClick={handleTheme}
    >
      {!theme ? "Switch to Dark Mode" : "Switch to Light Mode"}
      {/* Switch to Dark Mode */}
      <Ripple color="rgb(var(--on-surface))" opacity={0.3} duration={350} />
    </Within>
  );
}
