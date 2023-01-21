import { useEffect } from "react";

export default function RippleAnimation(element, config) {
  const { color = "#333", size = 100, duration = 1000 } = config;

  useEffect(() => {
    const applyProperties = () => {
      element.current.classList.add("ripple-container");
    };
    const applyStyles = (e) => {
      const { offsetX, offsetY } = e;
      const { style } = element.current;
      const sizeOffset = 50;

      style.setProperty("--ripple-color", `${color}`);
      style.setProperty("--ripple-size", `${size}px`);
      style.setProperty("--ripple-duration", `${duration}ms`);
      style.setProperty("--ripple-top", `${offsetY - sizeOffset}px`);
      style.setProperty("--ripple-left", `${offsetX - sizeOffset}px`);
    };
    const onClick = (e) => {
      element.current.classList.remove("ripple-active");
      applyStyles(e);
      element.current.classList.add("ripple-active");
    };
    applyProperties();
    element.current.addEventListener("mouseup", onClick);

    const clearRef = element.current;
    return () => {
      clearRef.removeEventListener("mouseup", onClick);
    };
  }, [color, duration, element]);
}
