import { test, expect } from "vitest";

function createGrid(m: number, n: number): string[] {
  const down = "#".repeat(n - 1) + ".";
  return [".".repeat(n), ...new Array(m - 1).fill(down)];
}

test(createGrid, () => {
  expect(createGrid(3, 3)).toEqual(["...", "##.", "##."]);
  expect(createGrid(2, 3)).toEqual(["...", "##."]);
});
