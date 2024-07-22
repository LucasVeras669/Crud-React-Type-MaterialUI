import { ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes/routes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
