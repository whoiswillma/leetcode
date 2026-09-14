import { expect, test } from "vitest";

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const [x0, y0, x1, y1] = rec1,
    [x2, y2, x3, y3] = rec2;

  const left = Math.max(x0!, x2!);
  const right = Math.min(x1!, x3!);
  const xOverlap = Math.max(0, right - left);

  const top = Math.min(y1!, y3!);
  const bottom = Math.max(y0!, y2!);
  const yOverlap = Math.max(0, top - bottom);

  return xOverlap > 0 && yOverlap > 0;
}

test(isRectangleOverlap, () => {
  expect(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])).toBe(true);
  expect(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])).toBe(false);
  expect(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3])).toBe(false);
});
