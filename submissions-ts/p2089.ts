import { test, expect } from "vitest";

function targetIndices(nums: number[], target: number): number[] {
  let lessThan = 0, count = 0;

  for (const num of nums) {
    if (num < target) lessThan++;
    else if (num === target) count++;
  }

  const ans = [];
  for (let i = 0; i < count; i++) {
    ans.push(i + lessThan);
  }
  return ans
};

test(targetIndices, () => {
  expect(targetIndices([1, 2, 5, 2, 3], 2)).toEqual([1, 2]);
  expect(targetIndices([1, 2, 5, 2, 3], 3)).toEqual([3]);
  expect(targetIndices([1, 2, 5, 2, 3], 5)).toEqual([4]);
})
