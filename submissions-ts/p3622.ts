import { describe, expect, test } from "vitest";

function checkDivisibility(n: number): boolean {
  const digits = [...n.toString()].map((c) => Number(c));
  const digitSum = digits.reduce((acc, n) => acc + n, 0);
  const digitProduct = digits.reduce((acc, n) => acc * n, 1);
  return n % (digitSum + digitProduct) === 0;
}

describe(checkDivisibility, () => {
  test("example 1", () => {
    expect(checkDivisibility(99)).toBeTruthy();
  });
  test("example 2", () => {
    expect(checkDivisibility(23)).toBeFalsy();
  });
});
