import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: 1,
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  use: {
    baseURL: "http://localhost:3000",
  },
  projects: [
    { name: "mobile-iphone-se", use: { ...devices["iPhone SE"] } },
    { name: "mobile-iphone-14", use: { ...devices["iPhone 14"] } },
    { name: "tablet", use: { ...devices["iPad Mini"] } },
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
  ],
});
