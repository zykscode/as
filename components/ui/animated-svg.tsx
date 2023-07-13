'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const AnimatedSvg = (props: Props) => {
  return (
    <motion.svg
      width="5em"
      height="1em"
      viewBox="0 0 100 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 13 C 8.44 13 13.718 11.79 22.272 8.598 L 24.04 7.937 C 33.64 4.347 39.647 3 50 3 C 60.271 3 65.362 4.222 74.629 7.928 C 84.112 11.722 89.438 13 100 13 L 100 0 L 0 0 Z"
        className="fill-primary-light fill-mode-forwards dark:fill-primary-dark"
      ></path>
      <path
        d="M 0 14 C 8.44 14 13.718 12.79 22.272 9.598 L 24.04 8.937 C 33.64 5.347 39.647 4 50 4 C 60.271 4 65.362 5.222 74.629 8.928 C 84.112 12.722 89.438 14 100 14 L 100 12 C 89.729 12 84.638 10.778 75.371 7.072 C 65.888 3.278 60.562 2 50 2 C 39.374 2 33.145 3.397 23.34 7.063 L 21.573 7.725 C 13.223 10.84 8.163 12 0 12 Z"
        className="fill-primaryFg-light fill-mode-backwards dark:fill-primaryFg-dark"
      ></path>
    </motion.svg>
  );
};

export default AnimatedSvg;
