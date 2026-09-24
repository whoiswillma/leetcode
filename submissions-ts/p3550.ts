import { expect, test } from "vitest";

function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length && i <= 27; i++) {
    let n = nums[i]!;
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }

    if (sum === i) {
      return i;
    }
  }

  return -1;
}

test(smallestIndex, () => {
  expect(smallestIndex([1, 3, 2])).toEqual(2);
  expect(smallestIndex([1, 10, 11])).toEqual(1);
  expect(smallestIndex([1, 2, 3])).toEqual(-1);
  expect(
    smallestIndex([
      947, 143, 825, 194, 451, 855, 328, 882, 616, 706, 717, 471, 475, 79, 105,
      677, 765, 5, 214, 108, 448, 531, 88, 264, 693, 644, 990, 999, 179, 598,
      101,
    ]),
  ).toEqual(27);
});
