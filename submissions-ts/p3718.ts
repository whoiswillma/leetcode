import { describe, expect, test } from "vitest";

function missingMultiple(nums: number[], k: number): number {
  const n = new Set(nums);
  let i = k;
  while (true) {
    if (!n.has(i)) {
      return i;
    }

    i += k;
  }
}

describe(missingMultiple, () => {
  test("examples", () => {
    expect(missingMultiple([8, 2, 3, 4, 6], 2)).toEqual(10);
    expect(missingMultiple([1, 4, 7, 10, 15], 5)).toEqual(5);
  });
});
