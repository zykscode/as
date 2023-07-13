'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import React from 'react';


function Vuju() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  return <div>vuju</div>;
}

export default Vuju;
