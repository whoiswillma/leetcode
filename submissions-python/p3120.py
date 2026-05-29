import string


class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        chars = set(word)
        return sum(c in chars and c.upper() in chars for c in string.ascii_lowercase)


assert Solution().numberOfSpecialChars(word="aaAbcBC") == 3
assert Solution().numberOfSpecialChars(word="abc") == 0
assert Solution().numberOfSpecialChars(word="abBCab") == 1
