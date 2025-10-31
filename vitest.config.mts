import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "./tests",
    environment: "node",
    globals: true,
    testTimeout: 15_000,
    retry: 1,
    coverage: {
      provider: "v8",
    },
  },
});
