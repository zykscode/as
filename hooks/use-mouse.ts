import React, { useEffect, useRef } from "react";
import { compose, withProps } from "recompose";
import "./JamfComponent.css";

const useMouseMovement = (containerRef, moverRef) => {
  useEffect(() => {
    const container = containerRef.current;
    const mover = moverRef.current;

    const handleMouseMove = (e) => {
      mover.style.backgroundPositionX = -e.offsetX * 1.8 + "px";
      mover.style.backgroundPositionY = -e.offsetY + 80 + "px";
    };

    const handleMouseEnter = () => {
      setTimeout(() => {
        mover.classList.add("no-more-slidey");
        container.removeEventListener("mouseenter", handleMouseEnter);
      }, 250);
    };

    if (container && mover) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (container && mover) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [containerRef, moverRef]);
};

const JamfComponent = ({ background }) => {
  const containerRef = useRef(null);
  const moverRef = useRef(null);

  useMouseMovement(containerRef, moverRef);

  return (
    <div className="module-jamf" id="module-jamf">
      <a
        href="http://synd.co/2DNywdE"
        className="jamf-container"
        id="jamf-container"
        target="_blank"
        rel="noopener"
        ref={containerRef}
      >
        <div className="jamf-mover" id="jamf-mover" ref={moverRef}></div>
      </a>
    </div>
  );
};

export default compose(
  withProps(({ background }) => ({
    style: {
      backgroundImage: `url(${background})`,
    },
  }))
)(JamfComponent);
