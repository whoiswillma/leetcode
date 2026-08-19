import { describe, expect, test } from "vitest";

function largestInteger(nums: number[], k: number): number {
  const n = nums.length;
  if (n === k) {
    return Math.max(...nums);
  }

  const count: Map<number, number> = new Map();
  for (const n of nums) {
    count.set(n, (count.get(n) ?? 0) + 1);
  }

  if (k === 1) {
    return Math.max(
      -1,
      ...[...count.entries()]
        .filter(([_, count]) => count === 1)
        .map(([n, _]) => n),
    );
  }

  return Math.max(
    count.get(nums[0]!) === 1 ? nums[0]! : -1,
    count.get(nums[n - 1]!) === 1 ? nums[n - 1]! : -1,
  );
}

describe(largestInteger, () => {
  test("example 1", () => {
    expect(largestInteger([3, 9, 2, 1, 7], 3)).toEqual(7);
  });
  test("example 2", () => {
    expect(largestInteger([3, 9, 7, 2, 1, 7], 4)).toEqual(3);
  });
  test("example 3", () => {
    expect(largestInteger([0, 0], 1)).toEqual(-1);
  });
  test("example 4", () => {
    expect(largestInteger([0, 0], 2)).toEqual(0);
  });
});
