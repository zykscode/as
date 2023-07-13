'use client';

import { useEffect, useState } from 'react';

interface Props {
  items: (string | React.ReactNode)[];
  speed: number;
  direction: 'left' | 'right';
}

interface State {
  position: number;
  intervalId: number | null;
}

const RepeatingItems: React.FC<Props> = ({ items, speed, direction }) => {
  const [state, setState] = useState<State>({
    position: 0,
    intervalId: null,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setState((prevState) => {
        const newPosition =
          prevState.position + (direction === 'left' ? -1 : 1) * speed;
        return {
          position: newPosition,
          intervalId: prevState.intervalId,
        };
      });
    }, 16);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        left: `${state.position}px`,
      }}
    >
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default RepeatingItems;
