'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useScroll } from 'react-use';

const ScrollVelocity = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState('down');

  const onScroll = () => {
    setScrollY(useScroll().y);
  };

  const ref = useRef();

  return (
    <div
      onScroll={onScroll}
      style={{
        scrollBehavior: 'smooth',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence
        initial={false}
        onEnter={() => {
          setIsScrolling(true);
          ref.current.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        onExit={() => setIsScrolling(false)}
      >
        {children}
      </AnimatePresence>
    </div>
  );
};

export default ScrollVelocity;
