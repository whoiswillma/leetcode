import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/p*.ts"],
    pool: "threads",
    poolOptions: {
      threads: {
        execArgv: ["--cpu-prof", "--cpu-prof-dir=test-runner-profile"],
        singleThread: true,
      },
    },
  },
});
