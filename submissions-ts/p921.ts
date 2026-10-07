import { expect, test } from "vitest";

function minAddToMakeValid(s: string): number {
  let s_ = s.replace("()", "");

  while (s_.length < s.length) {
    s = s_;
    s_ = s.replace("()", "");
  }
  s = s_;

  return s.length;
}

test(minAddToMakeValid, () => {
  expect(minAddToMakeValid("())")).toEqual(1);
  expect(minAddToMakeValid("(((")).toEqual(3);
});
