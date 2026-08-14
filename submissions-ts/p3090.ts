import { describe, expect, it } from "vitest";

function maximumLengthSubstring(s: string): number {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let occurrences: Map<string, number> = new Map();

    for (let j = i; j < s.length; j++) {
      const char = s.charAt(j);

      occurrences.set(char, (occurrences.get(char) ?? 0) + 1);

      if (occurrences.get(char) === 3) {
        ans = Math.max(ans, j - i);
        break;
      }
    }

    if (Math.max(...occurrences.values()) <= 2) {
      ans = Math.max(ans, s.length - i);
    }
  }

  return ans;
}

describe("maximumLengthSubstring", () => {
  it("example 1", () => {
    expect(maximumLengthSubstring("bcbbbcba")).toEqual(4);
  });
  it("example 2", () => {
    expect(maximumLengthSubstring("aaaa")).toEqual(2);
  });
});
