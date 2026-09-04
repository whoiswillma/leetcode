import { describe, expect, test } from "vitest";

function uniformArray(nums1: number[]): boolean {
  nums1.sort((a, b) => a - b);
  const even = nums1[0]! % 2 === 0;
  let minOdd = null;

  for (const n of nums1) {
    const nEven = n % 2 === 0;
    if (!nEven && minOdd === null) {
      minOdd = n;
    }

    if (nEven === even) {
      continue;
    }

    if (even && (minOdd === null || n === minOdd)) {
      return false;
    }
  }

  return true;
}

describe(uniformArray, () => {
  test("examples", () => {
    expect(uniformArray([1, 4, 7])).toBe(true);
    expect(uniformArray([2, 3])).toBe(false);
    expect(uniformArray([4, 6])).toBe(true);
  });
});
