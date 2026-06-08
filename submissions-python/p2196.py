from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        root: TreeNode | None = None
        val_to_node: dict[int, TreeNode] = {}
        node_to_parent: dict[int, int] = {}

        for parent_val, child_val, is_left in descriptions:
            parent = val_to_node.get(parent_val)
            if parent is None:
                parent = TreeNode(parent_val)
                val_to_node[parent_val] = parent

            child = val_to_node.get(child_val)
            if child is None:
                child = TreeNode(child_val)
                val_to_node[child_val] = child

            if is_left:
                parent.left = child
            else:
                parent.right = child

            node_to_parent[child.val] = parent.val

            if root is None or root == child:
                root = parent
                while root.val in node_to_parent:
                    root = val_to_node[node_to_parent[root.val]]

        return root
