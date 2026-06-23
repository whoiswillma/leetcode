class Solution:
    def zigZagArrays(self, n: int, l: int, r: int) -> int:
        m = 10**9 + 7

        s = r - l + 1

        memo = [0] * s

        for d in range(s):
            memo[d] = d

        for i in range(2, n):
            memo_ = [0] * s
            for d in range(1, s):
                memo_[d] = (memo_[d - 1] + memo[s - d]) % m
            memo = memo_

        ans = 0
        for j in range(s):
            ans += 2 * memo[j]
            ans %= m
        return ans % m


def test():
    assert Solution().zigZagArrays(n=3, l=4, r=5) == 2
    assert Solution().zigZagArrays(n=3, l=1, r=3) == 10
    assert Solution().zigZagArrays(n=4, l=4, r=10) == 742


def test_max():
    assert Solution().zigZagArrays(n=2000, l=1, r=2000) == 594850306
