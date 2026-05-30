from typing import List

from sortedcontainers import SortedList


class Solution:
    def __init__(self):
        self.mx = 50000

    def update(self, idx: int, val: int):
        self._update(idx, val, 1, 0, self.mx)

    def _update(self, idx: int, val: int, p: int, l: int, r: int) -> None:
        if l == r:
            self.seg[p] = val
            return

        mid = (l + r) // 2
        if idx <= mid:
            self._update(idx, val, 2 * p, l, mid)
        else:
            self._update(idx, val, 2 * p + 1, mid + 1, r)

        self.seg[p] = max(self.seg[2 * p], self.seg[2 * p + 1])

    def query(self, L: int, R: int):
        return self._query(L, R, 1, 0, self.mx)

    def _query(self, L: int, R: int, p: int, l: int, r: int) -> int:
        if L <= l and r <= R:
            return self.seg[p]

        mid = (l + r) // 2
        res = 0
        if L <= mid:
            res = max(res, self._query(L, R, 2 * p, l, mid))
        if R > mid:
            res = max(res, self._query(L, R, 2 * p + 1, mid + 1, r))

        return res

    def getResults(self, queries: List[List[int]]) -> List[bool]:
        self.seg = [0] * 4 * self.mx
        st = SortedList([0, self.mx])
        self.update(self.mx, self.mx)
        ans = []

        for q in queries:
            if q[0] == 1:
                x = q[1]
                idx = min(len(st) - 1, st.bisect_right(x))

                r = st[idx]
                l = st[idx - 1] if idx > 0 else st[0]
                self.update(x, x - l)
                self.update(r, r - x)
                st.add(x)
            else:
                x, sz = q[1], q[2]
                idx = min(len(st) - 1, st.bisect_right(x))
                pre = st[0] if idx == 0 else st[idx - 1]

                max_space = max(x - pre, self.query(0, pre))
                ans.append(max_space >= sz)

        return ans


assert Solution().getResults(queries=[[1, 2], [2, 3, 3], [2, 3, 1], [2, 2, 2]]) == [
    False,
    True,
    True,
]

assert Solution().getResults(
    queries=[[1, 7], [2, 7, 6], [1, 2], [2, 7, 5], [2, 7, 6]]
) == [True, True, False]
