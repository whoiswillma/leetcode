import { describe, expect, it } from "vitest";

function stoneGameIX(stones: number[]): boolean {
  let counts = new Array(3).fill(0);
  for (const n of stones) {
    counts[n % 3] += 1;
  }

  return counts[0] % 2 === 0
    ? counts[1] >= 1 && counts[2] >= 1
    : Math.abs(counts[1] - counts[2]) > 2;
}

describe("stoneGameIX", () => {
  it("example 1", () => {
    expect(stoneGameIX([2, 1])).toBeTruthy();
  });
  it("example 2", () => {
    expect(stoneGameIX([2])).toBeFalsy();
  });
  it("example 3", () => {
    expect(stoneGameIX([5, 1, 2, 4, 3])).toBeFalsy();
  });
});
