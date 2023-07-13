import React, { useEffect, useRef } from 'react';

import Img1 from '#/public/images/img3.png';

type Props = {};

const NotFound = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img1 = new Image();
    img1.onload = () => {
      ctx.drawImage(img1, 0, 0, Number(canvas?.width), Number(canvas?.height));
    };

    img1.src = Img1.src;
  });
  return (
    <div className="container mx-auto h-screen bg-yellow-300">
      <canvas
        style={{
          width: '100',
          height: '100%',
          border: ' 4px red solid',
        }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default NotFound;
