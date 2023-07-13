import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { MenuItem } from './menu-item';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ items, toggle }) => (
  <motion.ul className="mt-16 flex flex-col gap-4 " variants={variants}>
    <li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 text-lg font-medium"
      onClick={toggle}
    >
      <Link href={'/'}>Homepage</Link>
    </li>
    {items.map((item, i) => (
      <MenuItem toggle={toggle} i={i} item={item} key={item.href} />
    ))}
  </motion.ul>
);
