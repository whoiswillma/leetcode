import { expect, test } from "vitest";

function isValid(s: string): boolean {
  let p = 0;

  for (const c of s) {
    switch (c) {
      case "(":
        p++;
        break;
      case ")":
        if (p === 0) return false;
        p--;
        break;
    }
  }

  return p === 0;
}

function removeInvalidParentheses(s: string): string[] {
  let q = new Set([s]);

  while (!!q.size) {
    const ans: Set<string> = new Set();
    const q_: Set<string> = new Set([]);

    for (const ss of q) {
      if (isValid(ss)) {
        ans.add(ss);
      } else if (!ans.size) {
        for (let i = 0; i < ss.length; i++) {
          q_.add(ss.substring(0, i) + ss.substring(i + 1));
        }
      }
    }

    if (!!ans.size) {
      return [...ans];
    }

    q = q_;
  }

  return [];
}

test(isValid, () => {
  expect(isValid("(((")).toBe(false);
});

test(removeInvalidParentheses, () => {
  let result = removeInvalidParentheses("()())()");
  result.sort();
  expect(result).toEqual(["(())()", "()()()"]);

  result = removeInvalidParentheses("(a)())()");
  result.sort();
  expect(result).toEqual(["(a())()", "(a)()()"]);

  result = removeInvalidParentheses(")(");
  result.sort();
  expect(result).toEqual([""]);
});
