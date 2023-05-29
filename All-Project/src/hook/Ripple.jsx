import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import "./ripple.css";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = (props) => {
  const { duration, color, opacity } = props;
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  //   const addRipple = (event) => {
  //     const rippleContainer = event.currentTarget.getBoundingClientRect();
  //     const size =
  //       rippleContainer.width > rippleContainer.height
  //         ? rippleContainer.width
  //         : rippleContainer.height;
  //     const x = event.pageX - rippleContainer.x - size / 2;
  //     const y = event.pageY - rippleContainer.y - size / 2;
  //     const newRipple = {
  //       x,
  //       y,
  //       size,
  //     };

  //     setRippleArray([...rippleArray, newRipple]);
  //   };

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const buttonWidth = rippleContainer.width;
    const buttonHeight = rippleContainer.height;
    const buttonOffsetTop = rippleContainer.top + window.pageYOffset;
    const buttonOffsetLeft = rippleContainer.left + window.pageXOffset;

    const x = event.pageX - buttonOffsetLeft;
    const y = event.pageY - buttonOffsetTop;

    const rippleSize = Math.max(buttonWidth, buttonHeight);
    const rippleX = x - rippleSize / 2;
    const rippleY = y - rippleSize / 2;

    const newRipple = {
      x: rippleX,
      y: rippleY,
      size: rippleSize,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div className="RippleContainer" onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                opacity: opacity,
                background: color,
                animation: `ripple ${duration}ms linear`,
              }}
            ></span>
          );
        })}
    </div>
  );
};

Ripple.propTypes = {
  duration: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

Ripple.defaultProps = {
  duration: 500,
  color: "#fff",
  opacity: 0.5,
};

export default Ripple;
