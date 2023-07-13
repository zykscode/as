import React, { useState } from "react";
import { useScroll } from "react-use";
import { AnimatePresence } from "framer-motion";

const SnapScroll = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = () => {
    setScrollY(useScroll().y);
  };

  return (
    <div
      onScroll={onScroll}
      style={{
        scrollBehavior: "smooth",
        overflow: "hidden",
      }}
    >
      <AnimatePresence
        initial={false}
        onEnter={() => setIsScrolling(true)}
        onExit={() => setIsScrolling(false)}
      >
        {children}
      </AnimatePresence>
    </div>
  );
};

export default SnapScroll;
