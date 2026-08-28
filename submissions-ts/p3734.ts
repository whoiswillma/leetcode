import { describe, expect, test } from "vitest";

const base = "a".codePointAt(0)!;

function ord(c: string): number {
  return c.codePointAt(0)! - base;
}

function chr(o: number): string {
  return String.fromCodePoint(base + o);
}

function extend(
  prefix: string,
  odd: string,
  counts: number[],
  max: boolean,
): string {
  let left = prefix;

  if (max) {
    for (let k = 25; k >= 0; k--) {
      for (let l = 0; l < counts[k]!; l++) {
        left = left + chr(k);
      }
    }
  } else {
    for (let k = 0; k < 26; k++) {
      for (let l = 0; l < counts[k]!; l++) {
        left = left + chr(k);
      }
    }
  }

  return left + odd + left.split("").reverse().join("");
}

function lexPalindromicPermutation(s: string, target: string): string {
  if (s.length === 1) {
    return s > target ? s : "";
  }

  const counts = new Array(26).fill(0);
  for (const c of s) {
    counts[ord(c)] += 1;
  }

  let odd = "";
  for (let i = 0; i < 26; i++) {
    if (counts[i] % 2 == 1) {
      if (!odd) {
        odd = chr(i);
      } else {
        return "";
      }
    }

    counts[i] = Math.floor(counts[i] / 2);
  }

  // console.log(counts);

  let prefix = "";
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let found = false;
    for (let j = 0; j < 26; j++) {
      if (!counts[j]) {
        continue;
      }
      counts[j] -= 1;

      const palindrome = extend(prefix + chr(j), odd, counts, true);
      if (palindrome > target) {
        // console.log(i, prefix, chr(j), palindrome, counts);
        prefix = prefix + chr(j);
        found = true;
        break;
      }

      counts[j] += 1;
    }

    if (!found) {
      return "";
    }

    if (prefix.charCodeAt(i)! > target.charCodeAt(i)!) {
      return extend(prefix, odd, counts, false);
    }
  }

  return extend(prefix, odd, counts, false);
}

describe(lexPalindromicPermutation, () => {
  test("examples", () => {
    expect(lexPalindromicPermutation("baba", "abba")).toEqual("baab");
    expect(lexPalindromicPermutation("baba", "bbaa")).toEqual("");
  });
  test("example 3", () => {
    expect(lexPalindromicPermutation("abc", "abb")).toEqual("");
  });
  test("example 4", () => {
    expect(lexPalindromicPermutation("aac", "abb")).toEqual("aca");
  });
  test("example 5", () => {
    expect(lexPalindromicPermutation("z", "z")).toEqual("");
  });
  test("example 6", () => {
    expect(lexPalindromicPermutation("aabb", "aaaa")).toEqual("abba");
  });
  test("example 7", () => {
    expect(lexPalindromicPermutation("aaaabbbb", "abbaabba")).toEqual(
      "baabbaab",
    );
  });
});
