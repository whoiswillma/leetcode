from typing import Optional

from data_structures import ListNode, collect, from_list


class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head.next:
            return None

        slow, fast = head, head.next

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        slow.next = slow.next.next
        return head


def test():
    assert collect(Solution().deleteMiddle(from_list([1, 3, 4, 7, 1, 2, 6]))) == (
        [1, 3, 4, 1, 2, 6]
    )
    assert collect(Solution().deleteMiddle(from_list([1, 2, 3, 4]))) == [1, 2, 4]
    assert collect(Solution().deleteMiddle(from_list([2, 1]))) == [2]
    assert collect(Solution().deleteMiddle(from_list([1]))) == []
