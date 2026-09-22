import { expect, test } from "vitest";

function resultArray(nums: number[], k: number, queries: number[][]): number[] {
  let ans = [];

  for (const [i, v, s, x] of queries) {
    nums[i!] = v!;

    let q = 0;
    let prod = 1;
    for (let j = s!; j < nums.length; j++) {
      prod *= nums[j]!;
      prod %= k;

      if (prod === x) {
        q += 1;
      }
    }

    ans.push(q);
  }

  return ans;
}

test(resultArray, () => {
  expect(
    resultArray([1, 2, 3, 4, 5], 3, [
      [2, 2, 0, 2],
      [3, 3, 3, 0],
      [0, 1, 0, 1],
    ]),
  ).toEqual([2, 2, 2]);
  expect(
    resultArray([1, 2, 4, 8, 16, 32], 4, [
      [0, 2, 0, 2],
      [0, 2, 0, 1],
    ]),
  ).toEqual([1, 0]);
});
