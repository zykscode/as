'use client';

import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import home from '#/public/images/img3.png';

type Props = {};

const MoveImage = (props: Props) => {
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const zoomScale = 1.5; // Adjust the zoom scale as per your preference

  const handleMouseEnter = () => {
    scale.set(zoomScale);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    x.set(0);
    y.set(0);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (offsetX - centerX) * (zoomScale - 1);
    const moveY = (offsetY - centerY) * (zoomScale - 1);

    x.set(moveX);
    y.set(moveY);
  };

  return (
    <div
      className="h-full w-full overflow-hidden bg-yellow-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          translateX: x,
          translateY: y,
          scale,
        }}
      >
        <Image className="object-contain " src={home} alt="hello" />
      </motion.div>
    </div>
  );
};

export default MoveImage;
