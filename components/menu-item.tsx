import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, item, toggle }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="h-full w-full p-3 text-xl font-normal hover:bg-item_blue hover:opacity-70"
    >
      <Link onClick={toggle} href={item.href}>
        {item.title}
      </Link>
    </motion.li>
  );
};
