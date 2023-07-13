import type { RefObject } from 'react';
import { useCallback, useEffect } from 'react';

interface Props {
  elementRef: RefObject<HTMLElement>;
  containerRef: RefObject<HTMLElement>;
}

export const useMouseMove = ({ elementRef, containerRef }: Props) => {
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      const elm = elementRef.current;
      if (elm) {
        elm.style.backgroundPosition = `${-offsetX}px ${-offsetY}px`;
      }
    },
    [elementRef],
  );

  const handleMouseEnter = useCallback(() => {
    const elm = elementRef.current;
    const container = containerRef.current;
    if (elm && container) {
      setTimeout(() => {
        elm.classList.add('transition-none');
        container.removeEventListener('mouseenter', handleMouseEnter);
      }, 250);
    }
  }, [elementRef, containerRef]);

  const handleMouseLeave = useCallback(() => {
    const elm = elementRef.current;
    const container = containerRef.current;
    if (elm && container) {
      elm.style.backgroundPosition = 'initial';
      elm.classList.remove('transition-none');
      container.addEventListener('mouseenter', handleMouseEnter);
    }
  }, [elementRef, containerRef, handleMouseEnter]);

  useEffect(() => {
    const container = containerRef.current;
    const elm = elementRef.current;

    if (container && elm) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container && elm) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [
    containerRef,
    elementRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  ]);
};
