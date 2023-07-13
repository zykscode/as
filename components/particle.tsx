'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  particleTrailWidth: number;
  strokeColor: string;
  theta: number;
  rotateSpeed: number;
  t: number;
  rotate: () => void;
}

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  const cursorRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {   
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    context.globalAlpha = 0.5;

    const generateParticles = (amount: number): void => {
      for (let i = 0; i < amount; i++) {
        particlesArrayRef.current[i] = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          particleTrailWidth: 4,
          strokeColor: generateColor(),
          theta: Math.random() * Math.PI * 2,
          rotateSpeed: 0.02,
          t: Math.random() * 150,
          rotate() {
            const ls = {
              x: this.x,
              y: this.y,
            };
            this.theta += this.rotateSpeed;
            this.x = cursorRef.current.x + Math.cos(this.theta) * this.t;
            this.y = cursorRef.current.y + Math.sin(this.theta) * this.t;
            context.beginPath();
            context.lineWidth = this.particleTrailWidth;
            context.strokeStyle = this.strokeColor;
            context.moveTo(ls.x, ls.y);
            context.lineTo(this.x, this.y);
            context.stroke();
          },
        };
      }
    };

    const generateColor = (): string => {
      const hexSet = '0123456789ABCDEF';
      let finalHexString = '#';
      for (let i = 0; i < 6; i++) {
        finalHexString += hexSet[Math.ceil(Math.random() * 15)];
      }
      return finalHexString;
    };

    const setSize = (): void => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    const anim = (): void => {
      requestAnimationFrame(anim);

      context.fillStyle = 'rgba(0,0,0,0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      particlesArrayRef.current.forEach((particle) => particle.rotate());
    };

    const handleMouseMove = (e: MouseEvent): void => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent): void => {
      e.preventDefault();
      cursorRef.current.x = e.touches[0].clientX;
      cursorRef.current.y = e.touches[0].clientY;
    };

    const handleResize = (): void => {
      setSize();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('resize', handleResize);

    generateParticles(101);
    setSize();
    anim();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="cw" />;
};

export default Canvas;
