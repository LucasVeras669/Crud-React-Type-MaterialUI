import { AppRoutes } from "./routes/routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </AppThemeProvider>
  );
};
