class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        alt = max_alt = 0

        for d in gain:
            alt += d
            max_alt = max(max_alt, alt)

        return max_alt


def test():
    assert Solution().largestAltitude([-5, 1, 5, 0, -7]) == 1
    assert Solution().largestAltitude([-4, -3, -2, -1, 4, 3, 2]) == 0
