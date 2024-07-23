import { AppRoutes } from "./routes/routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
