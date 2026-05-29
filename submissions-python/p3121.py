from typing import Literal


class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        state: list[Literal["initial", "seen_lower", "special", "dead"]] = [
            "initial"
        ] * 26

        for c in word:
            i = ord(c.lower()) - ord("a")

            match (state[i], c.islower()):
                case ("initial", True):
                    state[i] = "seen_lower"
                case ("initial", False):
                    state[i] = "dead"
                case ("seen_lower", True):
                    state[i] = "seen_lower"
                case ("seen_lower", False):
                    state[i] = "special"
                case ("special", True):
                    state[i] = "dead"
                case ("special", False):
                    state[i] = "special"
                case ("dead", _):
                    state[i] = "dead"

        return sum(1 for s in state if s == "special")


assert Solution().numberOfSpecialChars(word="aaAbcBC") == 3
assert Solution().numberOfSpecialChars(word="abc") == 0
assert Solution().numberOfSpecialChars(word="AbBCab") == 0
