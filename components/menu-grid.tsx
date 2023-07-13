import { motion } from 'framer-motion';
import * as React from 'react';

type Props = {
  i: number;
  isOpen: boolean;
};

const grid = {
  hidden: (i) => ({
    y: -1000,
    transition: {
      duration: 0.6,
      ease: 'linear',
      delay: i * 0.2 + 0.6,
    },
  }),
  show: (i) => ({
    y: 0,
    transition: {
      duration: 0.6,
      type: 'ease-in',
      delay: i * 0.2,
    },
  }),
};

export const MenuGrid = ({ i, isOpen }: Props) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'show' : 'hidden'}
      variants={{ hidden: grid.hidden(i), show: grid.show(i) }}
      className="h-screen bg-item_blue"
    />
  );
};
