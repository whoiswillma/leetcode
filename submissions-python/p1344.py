class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        a = 30 * (hour % 12) + minutes / 2
        b = 6 * minutes
        return min((a - b) % 360, (b - a) % 360)


def test():
    assert Solution().angleClock(3, 30) == 75
    assert Solution().angleClock(3, 15) == 7.5
