class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def collect(node: ListNode | None) -> list[int]:
    result = []

    while node is not None:
        result.append(node.val)
        node = node.next

    return result


def from_list(l: list[int]) -> ListNode | None:
    root = tail = ListNode()

    for v in l:
        tail.next = ListNode(v)
        tail = tail.next

    return root.next
