import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "api",
    environment: "node",
    setupFiles: "./vitest.setup.ts",
    watch: false,
  },
});
