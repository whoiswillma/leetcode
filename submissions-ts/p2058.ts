import { describe, expect, test } from "vitest";
import { listFromArray, ListNode } from "./listnode";

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let i = 1,
    first = null,
    last = null,
    min = -1,
    max = -1,
    prev = head!,
    curr = prev.next!;

  while (curr.next) {
    const next = curr.next;

    if (
      (prev.val < curr.val && curr.val > next.val) ||
      (prev.val > curr.val && curr.val < next.val)
    ) {
      if (first !== null && last !== null) {
        min = Math.min(min === -1 ? Infinity : min, i - last);
        max = i - first;
      }

      if (first === null) {
        first = i;
      }
      last = i;
    }

    prev = curr;
    curr = curr.next;
    i++;
  }

  return [min, max];
}

describe(nodesBetweenCriticalPoints, () => {
  test("examples", () => {
    expect(nodesBetweenCriticalPoints(listFromArray(3, 1))).toStrictEqual([
      -1, -1,
    ]);
    expect(
      nodesBetweenCriticalPoints(listFromArray(5, 3, 1, 2, 5, 1, 2)),
    ).toStrictEqual([1, 3]);
  });
  test("example 3", () => {
    expect(
      nodesBetweenCriticalPoints(listFromArray(1, 3, 2, 2, 3, 2, 2, 2, 7)),
    ).toStrictEqual([3, 3]);
  });
});
