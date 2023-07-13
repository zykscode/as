'use client';

import React, { useEffect, useRef } from 'react';

type Props = {
  height: number;
  width: number;
  path: string;
  fallback?: string;
};

const Canvas = ({ height, width, path, fallback }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const sun = new Image();
    const moon = new Image();
    const earth = new Image();

    function init() {
      sun.src = 'canvas_sun.png';
      moon.src = 'canvas_moon.png';
      earth.src = 'canvas_earth.png';
      window.requestAnimationFrame(draw);
    }
    if (ctx) {
      console.log('allowed');

      const p = new Path2D(path);

      ctx.fillStyle = 'red'; // Customize the color
      ctx.strokeStyle = 'blue'; // Customize the outline color
      ctx.lineWidth = 2; // Customize the line width

      ctx.fill(p);
      ctx.stroke(p);
    } else {
      console.log('false');
    }
  }, [width, height, path]);

  return (
    <canvas
      className="bg-purple-600"
      ref={canvasRef}
      height={height}
      width={width}
    >
      {fallback}
    </canvas>
  );
};

export default Canvas;
