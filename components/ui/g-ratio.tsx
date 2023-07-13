'use client';

import React, { useLayoutEffect, useState } from 'react';

type Props = {
  num: number;
  children: React.ReactNode;
};

const Items = ({ i }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const smallScreen = windowWidth < 760;

  useLayoutEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    updateWindowDimensions(); // Set initial dimensions

    // Update dimensions on window resize
    window.addEventListener('resize', updateWindowDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
  const gratio = 1.618;
  const vw = windowWidth < windowHeight ? windowHeight : windowWidth;

  /**  shrinkage point constant (see resources in readme) */
  const spConstant = 0.2763;
  /** width of main square */
  const squareSize = vw / gratio;
  /** % difference in box sizes */
  const scaleRatio = (vw - squareSize) / squareSize;
  const scale = scaleRatio ** i;

  const skrinkagePointX = vw * spConstant;
  const skrinkagePointY = squareSize * spConstant;

  const originX = skrinkagePointX * gratio ** 2;
  const originY = skrinkagePointY * gratio ** 2;

  return (
    <div
      style={{
        willChange: 'transform, background-color, border-color',
        transition: 'background-color 0.3s ease-out, color 0.3s ease-out',
        position: 'absolute',
        display: 'grid',
        placeItems: 'center',
        width: `${squareSize}px`,
        height: `${squareSize}px`,
        borderCollapse: 'collapse',
        transformOrigin: `${originX}px ${originY}px`,
        transform: `rotate(${90 * i}deg) scale(${scale})`,
      }}
      className={`relative grid border-collapse place-items-center  border-2 `}
    >
      {i}
    </div>
  );
};

const GoldenRatio = ({ num, children }: Props) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden  p-4 landscape:block  ">
      {Array.from({ length: num }, (_, index) => (
        <Items i={index} key={index} />
      ))}
    </div>
  );
};

export default GoldenRatio;
