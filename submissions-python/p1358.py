class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        ans = 0

        last = [-1] * 3
        for i, c in enumerate(s):
            last[(ord(c) - ord("a"))] = i
            ans += min(last) + 1

        return ans


def test():
    assert Solution().numberOfSubstrings("abcabc") == 10
    assert Solution().numberOfSubstrings("aaacb") == 3
    assert Solution().numberOfSubstrings("abbbbbc") == 1
    assert Solution().numberOfSubstrings("aaaaabc") == 5
    assert Solution().numberOfSubstrings("abccccc") == 5
    assert Solution().numberOfSubstrings("acccccb") == 1
    assert Solution().numberOfSubstrings("bbb") == 0
