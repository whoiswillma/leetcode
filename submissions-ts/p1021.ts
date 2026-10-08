import { expect, test } from "vitest";

function removeOuterParentheses(s: string): string {
  let l = 0;
  const ans = [];

  for (const c of s) {
    if (c === "(") {
      if (l > 0) {
        ans.push(c);
      }

      l++;
    } else {
      l--;

      if (l > 0) {
        ans.push(c);
      }
    }
  }

  return ans.join("");
}

test(removeOuterParentheses, () => {
  expect(removeOuterParentheses("(()())(())")).toEqual("()()()");
  expect(removeOuterParentheses("(()())(())(()(()))")).toEqual("()()()()(())");
  expect(removeOuterParentheses("()()")).toEqual("");
});
