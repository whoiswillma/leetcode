export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function treeFromPreOrder(...vals: (number | null)[]): TreeNode | null {
  return treeFromPreOrderRec(vals, 1);
}

function treeFromPreOrderRec(
  vals: (number | null)[],
  i: number,
): TreeNode | null {
  const val = vals[i - 1];
  if (val === null || val === undefined) {
    return null;
  }

  return new TreeNode(
    val,
    treeFromPreOrderRec(vals, 2 * i),
    treeFromPreOrderRec(vals, 2 * i + 1),
  );
}
