import { expect, test } from "vitest";

function scoreOfParentheses(s: string): number {
  return parseConcat(s, 0)[0];
}

function parseConcat(s: string, i: number): [number, number] {
  let ans = 0;
  let cursor = i;

  while (s.charAt(cursor) === "(") {
    let subscore;
    [subscore, cursor] = parseNest(s, cursor);
    ans += subscore;
  }

  return [ans, cursor];
}

function parseNest(s: string, i: number): [number, number] {
  if (s.charAt(i + 1) === ")") {
    return [1, i + 2];
  }

  const [subscore, cursor] = parseConcat(s, i + 1);
  return [2 * subscore, cursor + 1];
}

test(scoreOfParentheses, () => {
  expect(scoreOfParentheses("()")).toEqual(1);
  expect(scoreOfParentheses("(())")).toEqual(2);
  expect(scoreOfParentheses("()()")).toEqual(2);
});
