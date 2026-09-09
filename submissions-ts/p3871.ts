import { describe, expect, test } from "vitest";

function countCommas(n: number): number {
  let ans = 0;
  for (let i = 0; i <= 5; i++) {
    const lower = Math.pow(10, 3 * i);
    const upper = Math.pow(10, 3 * (i + 1));
    ans += i * Math.max(Math.min(n, upper - 1) - lower + 1, 0);
  }
  return ans;
}

describe(countCommas, () => {
  test("example", () => {
    expect(countCommas(1002)).toStrictEqual(3);
    expect(countCommas(134234234242)).toStrictEqual(401701701729);
    expect(countCommas(998)).toStrictEqual(0);
  });
});
