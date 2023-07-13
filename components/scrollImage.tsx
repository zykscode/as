/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { motion, useMotionValue } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface ScrollableImageProps {
  imageUrl: StaticImageData;
  alt: string;
}

const ScrollableImage: React.FC<ScrollableImageProps> = ({ imageUrl, alt }) => {
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const zoomScale = 1.2; // Adjust the zoom scale as per your preference

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
    <motion.div
      className="h-full w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        translateX: x,
        translateY: y,
        scale,
      }}
    >
      <Image
        className="h-full w-full bg-item_pink"
        placeholder="blur"
        src={imageUrl}
        alt={alt}
      />
    </motion.div>
  );
};

export default ScrollableImage;
