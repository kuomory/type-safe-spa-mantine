import { Center, Loader, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorPage } from "./components/ErrorPage";
import { routeTree } from "./routeTree.gen";
import { theme } from "./theme";
import { queryClient, trpcClient } from "./trpc";
import "@mantine/core/styles.css";

const context = {
  trpc: trpcClient,
};
export type TanStackRouterContext = typeof context;

const router = createRouter({
  routeTree,
  context: context,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: ErrorPage,
  defaultPendingComponent: () => (
    <Center p="xl">
      <Loader />
    </Center>
  ),
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// biome-ignore lint/style/noNonNullAssertion: Recommended by Vite.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
);
