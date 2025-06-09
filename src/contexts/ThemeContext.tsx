import { useContext, createContext, useState, type ReactNode, useEffect } from "react";
import { themeConfig } from "../styles/themeConfig";

export type ThemeName = keyof typeof themeConfig;
type ThemeStyles = typeof themeConfig.default;

type ThemeContextTypes = {
  theme: ThemeName;
  setTheme: React.Dispatch<React.SetStateAction<ThemeName>>;
  themeStyles: ThemeStyles;
}

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode,
  theme?: ThemeName
}

const ThemeProvider = ({ children, theme: themeOverride }: ThemeProviderProps) => { // added theme override in order to hardcode theme in storybook
  const existingTheme: ThemeName | null = localStorage.getItem('theme') as ThemeName;
  const initialTheme: ThemeName = themeOverride ? themeOverride : existingTheme;

  const [theme, setTheme] = useState<ThemeName>(initialTheme ? initialTheme : 'default');
  const themeStyles = themeConfig[theme];

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const val = useContext(ThemeContext);

  if (val == undefined) {
    throw new Error("Context is undefined");
  }

  return val;
}

export default ThemeProvider;
