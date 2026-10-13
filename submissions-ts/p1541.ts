import { expect, test } from "vitest";

function minInsertions(s: string): number {
  let v = 0;
  let ans = 0;

  for (const c of s) {
    if (c === "(") {
      if (v === -1) {
        v = 2;
        ans += 2;
      } else {
        v += 2;
      }
    } else {
      if (v === -1) {
        v = 0;
        ans++;
      } else {
        v--;
      }
    }
  }

  if (v === -1) {
    ans += 2;
    v = 0;
  }

  return ans + v;
}

test(minInsertions, () => {
  expect(minInsertions("())")).toEqual(0);
  expect(minInsertions("())(())))")).toEqual(0);
  expect(minInsertions("(())())))")).toEqual(0);

  expect(minInsertions("(()))")).toEqual(1);
  expect(minInsertions("))())(")).toEqual(3);
  expect(minInsertions(")()")).toEqual(3);
  expect(minInsertions("()))")).toEqual(2);
});
