from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        l = []

        while head is not None:
            l.append(head.val)
            head = head.next

        return max(l[i] + l[-i - 1] for i in range(len(l) // 2))


def node_from_list(l: list[int]) -> Optional[ListNode]:
    head = tail = ListNode()

    for v in l:
        tail.next = tail = ListNode(v)

    return head.next


assert Solution().pairSum(node_from_list([5, 4, 2, 1])) == 6
assert Solution().pairSum(node_from_list([4, 2, 2, 3])) == 7
assert Solution().pairSum(node_from_list([1, 100000])) == 100001
print("All tests pass!")
