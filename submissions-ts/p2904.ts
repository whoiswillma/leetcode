import { describe, expect, test } from "vitest";

function shortestBeautifulSubstring(s: string, k: number): string {
  let beautiful = "",
    i = 0,
    j = 0,
    numOnes = 0;

  while (i < s.length) {
    while (j < s.length && numOnes < k) {
      if (s.charAt(j) === "1") {
        numOnes += 1;
      }
      j += 1;
    }

    if (numOnes == k) {
      const sub = s.substring(i, j);
      if (
        !beautiful ||
        sub.length < beautiful.length ||
        (sub.length === beautiful.length && sub < beautiful)
      ) {
        beautiful = sub;
      }
    }

    console.log(i, j, s.substring(i, j), numOnes === k);

    if (s.charAt(i) === "1") {
      numOnes -= 1;
    }
    i += 1;
  }

  return beautiful;
}

describe(shortestBeautifulSubstring, () => {
  test("examples", () => {
    expect(shortestBeautifulSubstring("100011001", 3)).toEqual("11001");
    expect(shortestBeautifulSubstring("1011", 2)).toEqual("11");
    expect(shortestBeautifulSubstring("000", 1)).toEqual("");
  });

  test("failure 1", () => {
    expect(shortestBeautifulSubstring("1100100101011001001", 7)).toEqual(
      "1100100101011",
    );
  });
});
