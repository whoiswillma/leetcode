import heapq


class Solution:
    def maxIceCream(self, costs: list[int], coins: int) -> int:
        heapq.heapify(costs)

        ans = 0
        while costs and costs[0] <= coins:
            coins -= heapq.heappop(costs)
            ans += 1

        return ans


def test():
    assert Solution().maxIceCream(costs=[1, 3, 2, 4, 1], coins=7) == 4
    assert Solution().maxIceCream(costs=[10, 6, 8, 7, 7, 8], coins=5) == 0
    assert Solution().maxIceCream(costs=[1, 6, 3, 1, 2, 5], coins=20) == 6
