import { describe, expect, test } from "vitest";

function maxNumberOfFamilies(
  n: number,
  reservedSeats: [number, number][],
): number {
  const reservedSeatsByRow: Map<number, number> = new Map();
  for (const [row, seat] of reservedSeats) {
    reservedSeatsByRow.set(
      row,
      (reservedSeatsByRow.get(row) ?? 0) | (1 << (10 - seat)),
    );
  }

  let ans = 2 * (n - reservedSeatsByRow.size);

  for (const [row, seats] of reservedSeatsByRow.entries()) {
    const leftAvailable = !(0b0111100000 & seats);
    const middleAvailable = !(0b0001111000 & seats);
    const rightAvailable = !(0b0000011110 & seats);

    if (leftAvailable && rightAvailable) {
      ans += 2;
    } else if (leftAvailable || middleAvailable || rightAvailable) {
      ans += 1;
    }
  }

  return ans;
}

describe(maxNumberOfFamilies, () => {
  test("example 1", () => {
    expect(
      maxNumberOfFamilies(3, [
        [1, 2],
        [1, 3],
        [1, 8],
        [2, 6],
        [3, 1],
        [3, 10],
      ]),
    ).toEqual(4);
  });
  test("example 2", () => {
    expect(
      maxNumberOfFamilies(2, [
        [2, 1],
        [1, 8],
        [2, 6],
      ]),
    ).toEqual(2);
  });
  test("example 3", () => {
    expect(
      maxNumberOfFamilies(4, [
        [4, 3],
        [1, 4],
        [4, 6],
        [1, 7],
      ]),
    ).toEqual(4);
  });
});
