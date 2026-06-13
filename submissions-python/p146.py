from typing import Optional


class Node:
    def __init__(
        self,
        key: int,
        value: int,
        prev: Optional["Node"] = None,
        next: Optional["Node"] = None,
    ):
        self.key = key
        self.value = value
        self.prev = prev
        self.next = next


class LRUCache:
    def __init__(self, capacity: int):
        self._cap = capacity
        self._head = Node(-1, -1, None, None)
        self._tail = Node(-1, -1, None, None)
        self._head.next, self._tail.prev = self._tail, self._head
        self._node_cache: dict[int, Node] = {}

    def get(self, key: int) -> int:
        node = self._node_cache.get(key)
        if node is None:
            return -1

        self._remove(node)
        self._prepend(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        if len(self._node_cache) == self._cap:
            node = self._tail.prev
            self._remove(node)
            del self._node_cache[node.key]

        node = Node(key, value)
        self._prepend(node)
        self._node_cache[key] = node

    def _prepend(self, node: Node):
        assert node is not self._head and node is not self._tail
        node.prev, node.next, self._head.next, self._head.next.prev = (
            self._head,
            self._head.next,
            node,
            node,
        )
        breakpoint()

    def _remove(self, node: Node):
        assert node is not self._head and node is not self._tail
        node.prev, node.next, node.prev.next, node.next.prev = (
            None,
            None,
            node.next,
            node.prev,
        )


def test():
    lru_cache = LRUCache(2)
    lru_cache.put(1, 1)
    lru_cache.put(2, 2)
    assert lru_cache.get(1) == 1
    lru_cache.put(3, 3)
    assert lru_cache.get(2) == -1
    lru_cache.put(4, 4)
    assert lru_cache.get(1) == -1
    assert lru_cache.get(3) == 3
    assert lru_cache.get(4) == 4
