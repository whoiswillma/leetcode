import { describe, expect, test } from "vitest";

function uniformArray(nums1: number[]): boolean {
  return true;
}

describe(uniformArray, () => {
  test("examples", () => {
    expect(uniformArray([2, 3])).toBe(true);
    expect(uniformArray([4, 6])).toBe(true);
  });
});
