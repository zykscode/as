'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

const Path = ({ isOpen, ...props }) => (
  <motion.path
    strokeWidth="1"
    className=" stroke-[#1a1a1a] dark:stroke-[#fdfdfd]"
    strokeLinecap="round"
    {...props}
    initial="closed"
    animate={isOpen ? 'open' : 'closed'}
  />
);

export const Menu = ({ setShowMobileMenu, showMobileMenu }) => (
  <button
    className={`rounded-full border border-[#1a1a1a] bg-transparent p-2 dark:border-[#fdfdfd]`}
    onClick={() => setShowMobileMenu(!showMobileMenu)}
  >
    <svg
      width="1em"
      height="1em"
      className="flex flex-col"
      viewBox="0 -1.5 21.5 21.5"
    >
      <Path
        isOpen={showMobileMenu}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        isOpen={showMobileMenu}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isOpen={showMobileMenu}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
