import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
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
  defaultErrorComponent: () => <div>ここにerrorコンポーネントを実装</div>,
  defaultPendingComponent: () => <div>ここにpendingコンポーネントを実装</div>,
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
