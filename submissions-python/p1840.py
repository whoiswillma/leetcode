class Solution:
    def maxBuilding(self, n: int, r: list[list[int]]) -> int:
        r.append([1, 0])
        r.sort()

        if r[-1][0] != n:
            r.append([n, n - 1])

        m = len(r)

        for i in range(1, m):
            r[i][1] = min(
                r[i][1],
                r[i - 1][1] + (r[i][0] - r[i - 1][0]),
            )

        for i in range(m - 2, 0, -1):
            r[i][1] = min(
                r[i][1],
                r[i + 1][1] + (r[i + 1][0] - r[i][0]),
            )

        ans = 0
        for i in range(m - 1):
            best = ((r[i + 1][0] - r[i][0]) + r[i][1] + r[i + 1][1]) // 2
            ans = max(ans, best)

        return ans


def test():
    assert Solution().maxBuilding(n=5, r=[[2, 1], [4, 1]]) == 2
    assert Solution().maxBuilding(n=6, r=[]) == 5
    assert Solution().maxBuilding(n=10, r=[[5, 3], [2, 5], [7, 4], [10, 3]]) == 5
