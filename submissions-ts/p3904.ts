import { describe, expect, test } from "vitest";

function firstStableIndex(nums: number[], k: number): number {
  const n = nums.length;

  const suffixMin: number[] = new Array(n);
  suffixMin[n - 1] = nums[n - 1]!;
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(suffixMin[i + 1]!, nums[i]!);
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]!);
    const score = max - suffixMin[i]!;
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
