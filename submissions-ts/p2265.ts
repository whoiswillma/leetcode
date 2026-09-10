import { describe, expect, test } from "vitest";
import { treeFromPreOrder, TreeNode } from "./treenode";

type R = {
  ans: number;
  sum: number;
  count: number;
};

function averageOfSubtree(root: TreeNode | null): number {
  return rec(root).ans;
}

function rec(node: TreeNode | null): R {
  if (node === null) {
    return {
      ans: 0,
      sum: 0,
      count: 0,
    };
  }

  const left = rec(node.left),
    right = rec(node.right);

  const sum = left.sum + right.sum + node.val;
  const count = left.count + right.count + 1;

  return {
    ans: left.ans + right.ans + (Math.floor(sum / count) === node.val ? 1 : 0),
    sum,
    count,
  };
}

describe(averageOfSubtree, () => {
  test("examples", () => {
    expect(averageOfSubtree(treeFromPreOrder(4, 8, 5, 0, 1, null, 6))).toEqual(
      5,
    );
    expect(averageOfSubtree(treeFromPreOrder(1))).toEqual(1);
  });
});
