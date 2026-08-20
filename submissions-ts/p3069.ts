import { describe, expect, test } from "vitest";

function resultArray(nums: number[]): number[] {
  const arr1 = [nums[0]!];
  const arr2 = [nums[1]!];

  for (const n of nums.slice(2)) {
    if (arr1[arr1.length - 1]! > arr2[arr2.length - 1]!) {
      arr1.push(n);
    } else {
      arr2.push(n);
    }
  }

  return [...arr1, ...arr2];
}

describe(resultArray, () => {
  test("example 1", () => {
    expect(resultArray([2, 1, 3])).toEqual([2, 3, 1]);
  });
  test("example 2", () => {
    expect(resultArray([5, 4, 3, 8])).toEqual([5, 3, 4, 8]);
  });
});
