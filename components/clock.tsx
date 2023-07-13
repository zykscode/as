'use client';

import React, { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <span className=" text-xl font-semibold text-white dark:text-black">
      {time.toLocaleTimeString()}
    </span>
  );
}

export default Clock;
