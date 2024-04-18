import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {ThemeColors, darkColors, lightColors} from '../../config/theme/theme';
import {useColorScheme} from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const coloScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  useEffect(() => {
    setCurrentTheme(coloScheme === 'dark' ? 'dark' : 'light');
  }, [coloScheme]);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colors: currentTheme === 'light' ? lightColors : darkColors,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
