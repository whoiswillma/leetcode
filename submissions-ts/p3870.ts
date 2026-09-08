import { describe, expect, test } from "vitest";

function countCommas(n: number): number {
  return Math.max(n - 999, 0);
}

describe(countCommas, () => {
  test("example", () => {
    expect(countCommas(1002)).toStrictEqual(3);
    expect(countCommas(998)).toStrictEqual(0);
  });
});
