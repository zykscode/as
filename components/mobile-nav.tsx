/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { motion } from 'framer-motion';
import * as React from 'react';
import type { MainNavItem } from 'types';

import { useLockBody } from '#/hooks/use-lock-body';

import { Navigation } from './navigation';

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  showMobileMenu: boolean;
  toggle: () => void;
}

const variants = {
  open: {
    x: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.6,
      staggerDirection: 1,
      duration: 1,
    },
  },
  closed: {
    x: '-100%',
    transition: {
      duration: 0.6,
      delay: 0.6,
      staggerChildren: 0.6,
      staggerDirection: -1,
    },
  },
};

export function MobileNav({ toggle, items, showMobileMenu }: MobileNavProps) {
  useLockBody(showMobileMenu);

  return (
    <motion.div
      animate={showMobileMenu ? 'open' : 'closed'}
      variants={variants}
      initial={false}
      className="absolute inset-0 -z-20 mt-12 h-screen w-full bg-gray-400 px-4 opacity-90 backdrop-blur-sm  dark:bg-gray-300 md:w-[240px]"
    >
      <Navigation toggle={toggle} items={items} />
    </motion.div>
  );
}
