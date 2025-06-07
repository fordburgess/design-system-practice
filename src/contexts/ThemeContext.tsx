import { useContext, createContext, useState, type ReactNode, useEffect } from "react";
import { themeConfig } from "../styles/themeConfig";

type ThemeName = keyof typeof themeConfig;
type ThemeStyles = typeof themeConfig.default;

type ThemeContextTypes = {
  theme: ThemeName;
  setTheme: React.Dispatch<React.SetStateAction<ThemeName>>;
  themeStyles: ThemeStyles;
}

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const existingTheme: ThemeName | null = localStorage.getItem('theme') as ThemeName;

  const [theme, setTheme] = useState<ThemeName>(existingTheme ? existingTheme : 'default');
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
