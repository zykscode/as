'use client';

import React, { createContext, useEffect } from 'react';

type ThemeContextType = {
  useTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  useTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const handleThemeChange = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, []);

  useEffect(() => {
    const onStorageChange = () => {
      handleThemeChange();
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ useTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
