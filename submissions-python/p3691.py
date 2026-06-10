import heapq
from typing import Callable


class SegmentTree:
    def __init__(self, values: list[int], op: Callable[[int, int], int]):
        self._n = n = len(values)
        self._segment_tree: list[int | None] = [None] * n * 4
        self._op = op

        self._build(values, 1, 0, n)

    def _build(self, values: list[int], vertex_id: int, tl: int, tr: int):
        assert tl < tr

        if tl + 1 == tr:
            self._segment_tree[vertex_id] = values[tl]
            return

        tm = (tl + tr) // 2
        self._build(values, 2 * vertex_id, tl, tm)
        self._build(values, 2 * vertex_id + 1, tm, tr)
        self._segment_tree[vertex_id] = self._op(
            self._segment_tree[2 * vertex_id], self._segment_tree[2 * vertex_id + 1]
        )

    def find(self, l: int, r: int) -> int | None:
        return self._find(l, r, 1, 0, self._n)

    def _find(self, l: int, r: int, vertex_id: int, tl: int, tr: int) -> int | None:
        if l >= r:
            return None
        if tl == l and tr == r:
            return self._segment_tree[vertex_id]

        tm = (tl + tr) // 2
        find_l = self._find(l, min(r, tm), 2 * vertex_id, tl, tm)
        find_r = self._find(max(l, tm), r, 2 * vertex_id + 1, tm, tr)

        if find_l is not None and find_r is not None:
            return self._op(find_l, find_r)
        elif find_l is not None:
            return find_l
        else:
            return find_r


class Solution:
    def maxTotalValue(self, nums: list[int], k: int) -> int:
        n = len(nums)
        max_tree = SegmentTree(nums, max)
        min_tree = SegmentTree(nums, min)

        def f(i, j):
            return max_tree.find(i, j + 1) - min_tree.find(i, j + 1)

        ans = 0
        q = [(-f(0, n - 1), 0, n - 1)]
        chosen = set()

        while k and q:
            score_neg, i, j = heapq.heappop(q)
            if (i, j) in chosen:
                continue
            chosen.add((i, j))

            ans += -score_neg

            if i + 1 < j:
                heapq.heappush(q, (-f(i + 1, j), i + 1, j))
                heapq.heappush(q, (-f(i, j - 1), i, j - 1))

            k -= 1

        return ans


def test_solution():
    assert Solution().maxTotalValue([1, 3, 2], 2) == 4
    assert Solution().maxTotalValue([4, 2, 5, 1], 3) == 12


def test_solution_2():
    assert Solution().maxTotalValue([28, 21, 50, 32], 10) == 141


def test_segment_tree():
    values = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    tree = SegmentTree(values, max)

    for i in range(len(values)):
        for j in range(i + 1, len(values)):
            assert tree.find(i, j) == max(values[i:j])
