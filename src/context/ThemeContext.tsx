import { createContext, useContext } from 'react';

interface ThemeContextType {
  background: string;
  textColor: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  background: 'white',
  textColor: 'black',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
