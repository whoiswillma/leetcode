import { expect, test } from "vitest";

function maxSumOfSquares(num: number, sum: number): string {
  const digits = [];

  for (let i = 0; i < num; i++) {
    const d = Math.min(sum, 9);
    digits.push(d);
    sum -= d;
  }

  return sum > 0 ? "" : digits.join("");
};

test(maxSumOfSquares, () => {
  expect(maxSumOfSquares(2, 3)).toEqual("30");
  expect(maxSumOfSquares(2, 17)).toEqual("98");
  expect(maxSumOfSquares(1, 10)).toEqual("");
})
