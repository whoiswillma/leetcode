import { describe, expect, test } from "vitest";

function minimumDeletions(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length;
  }

  let argmin = 0,
    argmax = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! < nums[argmin]!) {
      argmin = i;
    }
    if (nums[i]! > nums[argmax]!) {
      argmax = i;
    }
  }

  const [a, b] = argmin < argmax ? [argmin, argmax] : [argmax, argmin];
  return Math.min(b + 1, nums.length - a, a + 1 + nums.length - b);
}

describe(minimumDeletions, () => {
  test("examples", () => {
    expect(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])).toStrictEqual(5);
    expect(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])).toStrictEqual(3);
    expect(minimumDeletions([101])).toStrictEqual(1);
  });
});
