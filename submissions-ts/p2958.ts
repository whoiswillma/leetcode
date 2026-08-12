import { describe, it, expect } from "vitest";

function maxSubarrayLength(nums: readonly number[], k: number): number {
  let ans = 0;
  let start = 0;
  const frequency = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    frequency.set(num, (frequency.get(num) ?? 0) + 1);

    while (frequency.get(num)! > k) {
      frequency.set(nums[start]!, frequency.get(nums[start]!)! - 1);
      start += 1;
    }

    ans = Math.max(ans, i - start + 1);
  }

  return ans;
}

describe("maxSubarrayLength", () => {
  it("test cases", () => {
    expect(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)).toEqual(6);
    expect(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)).toEqual(4);
    expect(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)).toEqual(2);
  });
});
