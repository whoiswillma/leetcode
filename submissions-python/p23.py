import heapq
from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        root = tail = ListNode()

        heap = []
        for i, node in enumerate(lists):
            if node is not None:
                heapq.heappush(heap, (node.val, i, node))

        while heap:
            _, list_i, node = heapq.heappop(heap)
            next_node = node.next
            node.next = None

            tail.next = node
            tail = node

            if next_node is not None:
                heapq.heappush(heap, (next_node.val, list_i, next_node))

        return root.next


def collect(node: Optional[ListNode]) -> list[int]:
    result = []

    while node is not None:
        result.append(node.val)
        node = node.next

    return result


def from_list(l: list[int]) -> Optional[ListNode]:
    root = tail = ListNode()

    for v in l:
        tail.next = ListNode(v)
        tail = tail.next

    return root.next


assert collect(
    Solution().mergeKLists(
        [from_list(l) for l in [[1, 4, 5], [1, 3, 4], [2, 6]]],
    )
) == [1, 1, 2, 3, 4, 4, 5, 6]
