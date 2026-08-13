import { describe, expect, it } from "vitest";

type SegmentTreeNode = {
  pre: number;
  suf: number;
  maxLen: number;
  leftChar: string;
  rightChar: string;
};

function longestRepeating(
  s: string,
  queryCharacters: string,
  queryIndices: number[],
): number[] {
  const n = s.length;
  const nodes: SegmentTreeNode[] = Array.from({ length: 4 * n }, () => ({
    pre: 0,
    suf: 0,
    maxLen: 0,
    leftChar: "",
    rightChar: "",
  }));

  function build(u: number, l: number, r: number) {
    if (l === r) {
      nodes[u] = {
        pre: 1,
        suf: 1,
        maxLen: 1,
        leftChar: s[l]!,
        rightChar: s[l]!,
      };
      return;
    }

    const mid = Math.floor((l + r) / 2);
    build(2 * u, l, mid);
    build(2 * u + 1, mid + 1, r);
    pushUp(u, l, r);
  }

  function update(u: number, l: number, r: number, pos: number, ch: string) {
    if (l === r) {
      nodes[u]!.leftChar = nodes[u]!.rightChar = ch;
      return;
    }

    const mid = Math.floor((l + r) / 2);
    if (pos <= mid) {
      update(2 * u, l, mid, pos, ch);
    } else {
      update(2 * u + 1, mid + 1, r, pos, ch);
    }
    pushUp(u, l, r);
  }

  function pushUp(u: number, l: number, r: number) {
    const mid = Math.floor((l + r) / 2);
    const leftLen = mid - l + 1;
    const rightLen = r - mid;
    const leftNode = nodes[2 * u]!;
    const rightNode = nodes[2 * u + 1]!;

    nodes[u] = {
      pre:
        leftNode.pre === leftLen && leftNode.rightChar === rightNode.leftChar
          ? leftNode.pre + rightNode.pre
          : leftNode.pre,
      suf:
        rightNode.suf === rightLen && leftNode.rightChar === rightNode.leftChar
          ? rightNode.suf + leftNode.suf
          : rightNode.suf,
      maxLen:
        leftNode.rightChar === rightNode.leftChar
          ? Math.max(
              leftNode.maxLen,
              rightNode.maxLen,
              leftNode.suf + rightNode.pre,
            )
          : Math.max(leftNode.maxLen, rightNode.maxLen),
      leftChar: leftNode.leftChar,
      rightChar: rightNode.rightChar,
    };
  }

  build(1, 0, n - 1);
  const k = queryIndices.length;
  const ans: number[] = [];

  for (let i = 0; i < k; i++) {
    update(1, 0, n - 1, queryIndices[i]!, queryCharacters[i]!);
    ans.push(nodes[1]!.maxLen);
  }

  return ans;
}

describe("longestRepeating", () => {
  it("", () => {
    expect(longestRepeating("babacc", "bcb", [1, 3, 3])).toEqual([3, 3, 4]);
    expect(longestRepeating("abyzz", "aa", [2, 1])).toEqual([2, 3]);
  });
});
