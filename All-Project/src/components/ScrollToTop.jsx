import React, { useState, useEffect } from "react";
import Ripple from "../hook/Ripple";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const SCROLL_THRESHOLD = 600;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      currentPosition > SCROLL_THRESHOLD
        ? setIsVisible(true)
        : setIsVisible(false);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      role="button"
      onClick={handleScrollToTop}
      aria-label="Scroll To Top"
      className={`fixed bottom-6 right-6 cursor-pointer overflow-hidden rounded-[50%] bg-primaryContainer p-5 shadow-md transition-all duration-300 hover:bg-opacity-95 lg:bottom-8 lg:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="rgb(var(--on-primary-container))"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
      <Ripple color="rgb(var(--on-background))" duration={300} opacity={0.25} />
    </button>
  );
}
