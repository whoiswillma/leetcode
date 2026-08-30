import { describe, expect, test } from "vitest";

function lexicographicallySmallestArray(
  nums: number[],
  limit: number,
): number[] {
  const sorted = nums.toSorted((a, b) => a - b);
  const groups = [[sorted[0]!]];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i]! - sorted[i - 1]! <= limit) {
      groups[groups.length - 1]!.push(sorted[i]!);
    } else {
      groups.push([sorted[i]!]);
    }
  }

  const numToGroup = new Map();
  for (let i = 0; i < groups.length; i++) {
    for (const n of groups[i]!) {
      numToGroup.set(n, i);
    }
  }

  for (const group of groups) {
    group.reverse();
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = groups[numToGroup.get(nums[i])!]!.pop()!;
  }

  return nums;
}

describe(lexicographicallySmallestArray, () => {
  test("examples", () => {
    expect(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2)).toStrictEqual([
      1, 3, 5, 8, 9,
    ]);
    expect(
      lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3),
    ).toStrictEqual([1, 6, 7, 18, 1, 2]);
    expect(lexicographicallySmallestArray([1, 7, 28, 19, 10], 2)).toStrictEqual(
      [1, 7, 28, 19, 10],
    );
  });
});
