'use client';

import { useEffect, useState } from 'react';

interface Theme {
  isDark: boolean;
}

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>({ isDark: false });

  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme({ isDark });
  }, []);

  const toggleTheme = (): void => {
    const isDark = !theme.isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme({ isDark });
  };

  return [theme, toggleTheme];
};
