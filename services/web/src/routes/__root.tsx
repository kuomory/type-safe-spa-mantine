import { AppShell, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/Header";
import { contextModals } from "../components/modals";
import type { TanStackRouterContext } from "../main";
import { theme } from "../theme";

const RootLayout = () => (
  <MantineProvider theme={theme}>
    <ModalsProvider modals={contextModals}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header display="grid">
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      <TanStackRouterDevtools />
    </ModalsProvider>
  </MantineProvider>
);

export const Route = createRootRouteWithContext<TanStackRouterContext>()({
  component: RootLayout,
});
