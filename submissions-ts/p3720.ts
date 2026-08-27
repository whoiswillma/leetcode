import { describe, expect, test } from "vitest";

const baseCodePoint = "a".codePointAt(0)!;

function lexGreaterPermutation(s: string, target: string): string {
  const count = new Array(26).fill(0);
  for (const c of s) {
    count[c.codePointAt(0)! - baseCodePoint]! += 1;
  }

  function popChar(min: number): number | null {
    while (min < 26) {
      if (count[min!]) {
        count[min!] -= 1;
        return min;
      }
      min += 1;
    }

    return null;
  }

  function popMinChar(): number | null {
    for (let i = 0; i < 26; i++) {
      if (count[i]!) {
        count[i] -= 1;
        return i;
      }
    }
    return null;
  }

  let ans = "";
  let matching = true;
  for (const t of target) {
    if (matching) {
      const ci = popChar(t.codePointAt(0)! - baseCodePoint);
      if (ci === null) {
        console.log("popChar(...) === null");
        return "";
      }

      const c = String.fromCharCode(ci + baseCodePoint);
      ans += c;
      if (c != t) {
        matching = false;
      }
    } else {
      const ci = popMinChar();
      if (ci === null) {
        console.log("popMinChar() === null");
        return "";
      }

      const c = String.fromCharCode(ci + baseCodePoint);
      ans += c;
    }
    console.log(t, matching, ans);
  }

  if (matching) {
    return "";
  } else {
    return ans;
  }
}

describe(lexGreaterPermutation, () => {
  test("examples", () => {
    expect(lexGreaterPermutation("abc", "bba")).toStrictEqual("bca");
    expect(lexGreaterPermutation("leet", "code")).toStrictEqual("eelt");
    expect(lexGreaterPermutation("baba", "bbaa")).toStrictEqual("");
    expect(lexGreaterPermutation("z", "z")).toStrictEqual("");
    expect(lexGreaterPermutation("ab", "aa")).toStrictEqual("ab");
  });
});
