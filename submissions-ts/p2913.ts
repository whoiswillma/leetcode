import { expect, test } from "vitest";

function sumCounts(nums: number[]): number {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const c = new Set<number>();

    for (let j = i; j < nums.length; j++) {
      c.add(nums[j]!);
      ans += c.size * c.size;
    }
  }

  return ans;
};

test(sumCounts, () => {
  expect(sumCounts([1, 2, 1])).toEqual(15);
  expect(sumCounts([1, 1])).toEqual(3);
})
