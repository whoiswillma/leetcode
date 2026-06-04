class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        def is_peak_or_valley(s: str) -> bool:
            assert len(s) == 3
            return (s[0] < s[1] and s[1] > s[2]) or (s[0] > s[1] and s[1] < s[2])

        def waviness(n: int) -> int:
            s = str(n)
            return sum(is_peak_or_valley(s[i : i + 3]) for i in range(len(s) - 2))

        return sum(waviness(n) for n in range(num1, num2 + 1))


assert Solution().totalWaviness(120, 130) == 3
assert Solution().totalWaviness(198, 202) == 3
assert Solution().totalWaviness(4848, 4848) == 2
