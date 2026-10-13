import { expect, test } from "vitest";

function maxAlternatingSum(nums: number[]): number {
  const h = Math.floor(nums.length / 2);
  nums = nums.map((n) => n * n);
  nums.sort((a, b) => a - b);

  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += (i < h ? -1 : 1) * nums[i]!;
  }
  return acc;
}

test(maxAlternatingSum, () => {
  expect(maxAlternatingSum([1, 2, 3])).toEqual(12);
  expect(maxAlternatingSum([1, -1, 2, -2, 3, -3])).toEqual(16);
  expect(maxAlternatingSum([7, 19])).toEqual(312);
});
