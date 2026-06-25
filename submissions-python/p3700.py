import numpy as np

MOD = 10**9 + 7


class Solution:
    def zigZagArrays(self, n: int, l: int, r: int) -> int:
        def mul_mod(a, b):
            n, m = a.shape
            m, k = b.shape

        def matrix_power(base, exp: int, res):
            while exp:
                if exp & 1:
                    res = (base @ res) % MOD
                base = (base @ base) % MOD
                print(base)
                exp >>= 1

            return res

        m = r - l + 1
        if n == 1:
            return m

        mat = np.zeros((2 * m, 2 * m), dtype=np.uint64)
        for i in range(m):
            for j in range(i):
                mat[i][m + j] = 1
            for j in range(i + 1, m):
                mat[i + m][j] = 1

        state = matrix_power(mat, n - 1, np.ones(2 * m, dtype=np.uint64))

        ans = 0
        for v in state:
            print(v)
            ans = (ans + v) % MOD
        return int(ans)


def test():
    assert Solution().zigZagArrays(n=3, l=4, r=5) == 2
    assert Solution().zigZagArrays(n=3, l=1, r=3) == 10


def test_1():
    assert Solution().zigZagArrays(n=10**9, l=1, r=5) == 0


def test_max():
    assert Solution().zigZagArrays(n=10**9, l=1, r=75) == 16
