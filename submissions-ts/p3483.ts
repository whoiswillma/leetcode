import { describe, expect, test } from "vitest";

function totalNumbers(digits: number[]): number {
  let nums = new Set();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      continue;
    }

    for (let j = 0; j < digits.length; j++) {
      if (i === j) {
        continue;
      }

      for (let k = 0; k < digits.length; k++) {
        if (i === k || j === k) {
          continue;
        }

        if (digits[k]! % 2 === 0) {
          nums.add(100 * digits[i]! + 10 * digits[j]! + digits[k]!);
        }
      }
    }
  }

  return nums.size;
}

describe(totalNumbers, () => {
  test("examples", () => {
    expect(totalNumbers([1, 2, 3, 4])).toEqual(12);
    expect(totalNumbers([0, 2, 2])).toEqual(2);
    expect(totalNumbers([6, 6, 6])).toEqual(1);
    expect(totalNumbers([1, 3, 5])).toEqual(0);
  });
});
