class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: list[int]) -> int:
        arr.sort()
        ans = 0

        for n in arr:
            if n > ans:
                ans += 1

        return ans


def test():
    assert (
        Solution().maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1]) == 2
    )
    assert Solution().maximumElementAfterDecrementingAndRearranging([100, 1, 1000]) == 3
    assert (
        Solution().maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5]) == 5
    )
