'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  src: StaticImageData;
  alt: string;
};

const DraggableImage: React.FC<Props> = ({ src, alt }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const containerWidth = imageRef.current?.clientWidth || 0;
    const containerHeight = imageRef.current?.clientHeight || 0;
    setContainerSize({ width: containerWidth, height: containerHeight });
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      const newX = Math.min(
        Math.max(
          imagePosition.x + deltaX,
          containerSize.width - (imageRef.current?.offsetWidth || 0),
        ),
        0,
      );
      const newY = Math.min(
        Math.max(
          imagePosition.y + deltaY,
          containerSize.height - (imageRef.current?.offsetHeight || 0),
        ),
        0,
      );
      setImagePosition({ x: newX, y: newY });
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative h-1/2 w-1/2 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`left-${imagePosition.x} top-${imagePosition.y} ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        ref={imageRef}
      >
        <Image src={src} alt={alt} />
      </div>
    </div>
  );
};

export default DraggableImage;
