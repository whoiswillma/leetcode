import { describe, expect, test } from "vitest";

function firstStableIndex(nums: number[], k: number): number {
  for (let i = 0; i < nums.length; i++) {
    const score =
      Math.max(...nums.slice(0, i + 1)) - Math.min(...nums.slice(i));
    if (score <= k) {
      return i;
    }
  }
  return -1;
}

describe(firstStableIndex, () => {
  test("examples", () => {
    expect(firstStableIndex([5, 0, 1, 4], 3)).toStrictEqual(3);
    expect(firstStableIndex([3, 2, 1], 1)).toStrictEqual(-1);
    expect(firstStableIndex([0], 0)).toStrictEqual(0);
  });
});
