from collections import Counter
from functools import cache


class Solution:
    def maximumLength(self, nums: list[int]) -> int:
        c = Counter(nums)

        @cache
        def f(n: int) -> int:
            if n == 1:
                return 2 * ((c[n] - 1) // 2) + 1

            if c[n] >= 2 and n * n in c:
                return 2 + f(n * n)
            else:
                return 1

        return max(f(n) for n in c.keys())


def test():
    assert Solution().maximumLength(nums=[5, 4, 1, 2, 2]) == 3
    assert Solution().maximumLength(nums=[1, 3, 2, 4]) == 1
    assert Solution().maximumLength(nums=[1, 1]) == 1
    assert (
        Solution().maximumLength(
            nums=[
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                4,
                8,
                16,
                32,
                64,
                128,
                256,
                512,
                1024,
            ]
        )
        == 9
    )
    assert Solution().maximumLength(nums=[1, 1, 1, 1, 1, 1, 1, 1, 1]) == 9
