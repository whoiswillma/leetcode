import { describe, expect, it } from "vitest";

function longestSubsequence(nums: number[]): number {
  const l = nums.length;
  const xor = nums.reduce((acc, n) => acc ^ n, 0);
  return xor ? l : nums.some((n) => n) ? l - 1 : 0;
}

describe("longestSubsequence", () => {
  it("example 1", () => {
    expect(longestSubsequence([1, 2, 3])).toEqual(2);
  });
  it("example 2", () => {
    expect(longestSubsequence([2, 3, 4])).toEqual(3);
  });
});
