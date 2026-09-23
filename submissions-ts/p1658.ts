import { expect, test } from "vitest";

function minOperations(nums: number[], x: number): number {
  const n = nums.length;

  let ans = -1,
    i = 0,
    s = nums.reduce((acc, v) => acc + v, 0);

  for (let j = 0; j < n; j++) {
    while (i < n && s > x) {
      s -= nums[i]!;
      i += 1;
    }

    if (s == x && j <= i && (ans === -1 || n + j - i < ans)) {
      ans = n + j - i;
    }

    s += nums[j]!;
  }

  return ans;
}

test(minOperations, () => {
  expect(minOperations([1, 1, 4, 2, 3], 5)).toEqual(2);
  expect(minOperations([5, 6, 7, 8, 9], 4)).toEqual(-1);
  expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toEqual(5);

  expect(minOperations([3, 5, 2, 2], 4)).toEqual(2);
  expect(minOperations([1, 1], 3)).toEqual(-1);
});
