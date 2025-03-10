// src/store/themeStore.ts
import { create } from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Check localStorage for the user's theme preference
const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : false;
};

const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: getInitialTheme(),
  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.isDarkMode;
      // Save the new theme preference to localStorage
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return { isDarkMode: newTheme };
    });
  },
}));

export default useThemeStore;