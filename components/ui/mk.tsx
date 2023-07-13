'use client';

import { useEffect, useState } from 'react';
import NormalizeWheel from 'normalize-wheel';

interface BoxContent {
  background: string;
  foreground: string;
}

interface NickJonesProps {
  content: BoxContent[];
}

const NickJones: React.FC<NickJonesProps> = ({ content }) => {
  const [vw, setVw] = useState(window.innerWidth);
  const [sequenceLength] = useState(content.length);
  const gratio = 1.618;
  const spConstant = 0.2763;
  const squareSize = vw / gratio;
  const scaleRatio = (vw - squareSize) / squareSize;
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [boxes, setBoxes] = useState<HTMLElement[]>([]);
  const beizer = 'cubic-bezier(0.25, 0.1, 0.0, 1.0)';
  const ease = 0.05;
  const [scroll, setScroll] = useState({
    current: 0,
    target: 0,
    limit: squareSize * sequenceLength,
  });
  let frame: number;
  let snapTarget: number | undefined;
  let timeout: NodeJS.Timeout;

  const init = () => {
    const shrinkagePointX = window.innerWidth * spConstant;
    const shrinkagePointY = squareSize * spConstant;
    const originX = shrinkagePointX * Math.pow(gratio, 2);
    const originY = shrinkagePointY * Math.pow(gratio, 2);

    if (container) {
      container.style.transformOrigin = `${originX}px ${originY}px`;
    }

    const newBoxes: HTMLElement[] = [];

    content.forEach((_, index) => {
      const div = boxes[index] ?? document.createElement('div');
      div.setAttribute('class', 'nj-item');
      div.innerHTML = `
        <h2 class='nj-heading'>Content ${index + 1}</h2>
      `;

      const scale = Math.pow(scaleRatio, index);
      div.style.cssText = `
        position: absolute;
        border: 2px solid black;
        background-color: white;
        width: ${squareSize / 10}rem;
        height: ${squareSize / 10}rem;
        transform-origin: ${originX / 10}rem ${originY / 10}rem;
        transform: rotate(${90 * index}deg) scale(${scale});
      `;

      if (!boxes.length) {
        container?.appendChild(div);
      }

      newBoxes.push(div);
    });

    setBoxes(newBoxes);
  };

  const updateScroll = () => {
    setScroll((prevScroll) => {
      const min = (-squareSize * content.length) / 2;
      const clampedTarget = clamp(min, prevScroll.limit, prevScroll.target);
      const lerpedCurrent = lerp(prevScroll.current, clampedTarget, ease);

      spinContainer(lerpedCurrent);

      return {
        ...prevScroll,
        current: lerpedCurrent,
      };
    });

    frame = window.requestAnimationFrame(updateScroll);
  };

  const spinContainer = (current: number) => {
    const lastBoxIndex = content.length - 1;
    const maxAngle = 90 * lastBoxIndex;
    const degreeUnit = maxAngle / scroll.limit;
    const currentDegree = degreeUnit * current;
    const maxIndex = lastBoxIndex;
    const scaleUnit = maxIndex / scroll.limit;
    const currentScale = Math.pow(gratio, scaleUnit * current);

    if (container) {
      container.style.transform = `rotate(${-currentDegree}deg) scale(${currentScale})`;
    }

    const scrolledPercentage = Math.round((current / scroll.limit) * 100);
    const deg = (scrolledPercentage * maxAngle) / 100;
    const closest90Deg = Math.round(deg / 90) * 90;
    snapTarget = closest90Deg / degreeUnit;

    if (closest90Deg % 90 === 0) {
      const rotations = closest90Deg / 90;
      const colors = content[rotations];

      document.body.style.backgroundColor = colors.background;

      boxes.forEach((item, index) => {
        item.style.backgroundColor = colors.foreground;
        item.style.color = colors.background;
        item.style.borderColor = colors.background;
        item.style.display = rotations >= index + 2 ? 'none' : 'grid';
      });
    }
  };

  const snapScroll = () => {
    if (snapTarget === undefined || snapTarget < 0) return;

    const transitionTime = 500;
    setScroll((prevScroll) => ({
      ...prevScroll,
      target: snapTarget,
      current: snapTarget,
    }));
    if (container) {
      container.style.transition = `transform ${transitionTime}ms ${beizer}`;

      setTimeout(() => {
        container.style.transition = 'unset';
      }, transitionTime);
    }
  };

  const onResize = () => {
    setVw(window.innerWidth);
    const newSquareSize = window.innerWidth / gratio;
    const newScaleRatio = (window.innerWidth - newSquareSize) / newSquareSize;
    setSquareSize(newSquareSize);
    setScaleRatio(newScaleRatio);
    setScroll((prevScroll) => ({
      ...prevScroll,
      limit: newSquareSize * content.length,
    }));

    init();
  };

  const onMouseWheel = (e: WheelEvent) => {
    const { pixelY } = NormalizeWheel(e);
    setScroll((prevScroll) => ({
      ...prevScroll,
      target: prevScroll.target + pixelY * 0.3,
    }));

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      snapScroll();
    }, 300);
  };

  const lerp = (current: number, target: number, ease: number) => {
    return current + (target - current) * ease;
  };

  const clamp = (min: number, max: number, value: number) => {
    return Math.min(Math.max(value, min), max);
  };

  useEffect(() => {
    setContainer(document.querySelector('.nj-container'));
    setBoxes(document.querySelectorAll('.nj-item'));

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    init();
  }, [vw, squareSize, scaleRatio]);

  useEffect(() => {
    updateScroll();
  }, [scroll]);

  useEffect(() => {
    document.addEventListener('wheel', onMouseWheel);
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('wheel', onMouseWheel);
      window.removeEventListener('resize', onResize);
      clearTimeout(timeout);
    };
  }, []);

  return null; // Replace with your JSX return statement
};

const App: React.FC = () => {
  const content: BoxContent[] = [
    { background: '#CA90DE', foreground: '#45316D' },
    { background: '#CA90DE', foreground: '#45316D' },
    { background: '#B82C33', foreground: '#2F3337' },
    { background: '#000000', foreground: '#2DBA51' },
    { background: '#6BD4FF', foreground: '#406E89' },
    { background: '#53BDAD', foreground: '#35293F' },
    { background: '#E95E4A', foreground: '#301A31' },
    { background: '#D9CCBA', foreground: '#23242E' },
    { background: '#CA90DE', foreground: '#45316D' },
  ];

  return (
    <div>
      <NickJones content={content} />
    </div>
  );
};

export default App;
