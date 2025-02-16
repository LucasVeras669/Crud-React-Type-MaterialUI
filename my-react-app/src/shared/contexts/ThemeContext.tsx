import { Box, ThemeProvider } from "@mui/material";
import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextData {
  children: React.ReactNode
  themeName: "light" | "dark";
  toggleTheme: () => void;
  
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IThemeContextData> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName=> oldThemeName === 'light' ? 'dark': 'light')
  }, []);
 
  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme
    return DarkTheme
  }, [themeName]);



  return (
    <ThemeContext.Provider value={{themeName,toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box height= '100vh' width= '100vw' bgcolor={theme.palette.background.default}>
        {children}
        </Box>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};
