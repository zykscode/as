'use client';

/* eslint-disable no-nested-ternary */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

type PathProps = {
  isHovered: boolean;
  isClicked: boolean;
  props: any;
};

const Path = ({ isHovered, isClicked, ...props }: PathProps) => (
  <motion.path
    strokeWidth={isClicked ? '4' : '4'}
    className=" stroke-[#fdfdfd] dark:stroke-[#1a1a1a]"
    strokeLinecap="round"
    {...props}
    initial="initial"
    animate={isClicked ? 'click' : isHovered ? 'hover' : 'initial'}
  />
);

const LargeScreenMenu: React.FC<any> = React.memo(
  ({ className, isClicked, toggle }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
      toggle();
    };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} cursor-pointer  rounded-full border-2 border-primary ${
          isClicked ? 'md:border' : ''
        } hover:border-2 md:border-0`}
        height={'1em'}
        width={'1em'}
        viewBox="0 0 100 100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <Path
          variants={{
            initial: {
              d: 'M 20,30 L 80,30',
              pathLength: 1,
            },
            hover: {
              pathLength: [0.33, 0.66, 0.66, 1],
            },
            click: {
              d: 'M 20,30 L 80,70',
              pathLength: 1,
            },
          }}
          isHovered={isHovered}
          isClicked={isClicked}
        />

        <Path
          variants={{
            initial: { d: 'M 20,50 L 80,50', pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [0.66, 0.5, 0.3, 1],
              opacity: 1,
            },
            click: {
              opacity: 0,
              transition: { duration: 0.1 },
            },
          }}
          isHovered={isHovered}
          isClicked={isClicked}
        />
        <Path
          variants={{
            initial: {
              d: 'M 20,70 L 80,70',
              pathLength: 0.66,
            },
            hover: {
              pathLength: [0.66, 0.5, 0.66, 1],
            },
            click: {
              d: 'M20,70L80,30',
              pathLength: 1,
            },
          }}
          isHovered={isHovered}
          isClicked={isClicked}
        />
      </svg>
    );
  },
);

LargeScreenMenu.displayName = 'LargeScreenMenu';

export default LargeScreenMenu;
