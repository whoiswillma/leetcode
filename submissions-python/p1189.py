from collections import Counter

import pytest


class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        c = Counter(text)
        return min(c["b"], c["a"], c["l"] // 2, c["o"] // 2, c["n"])


@pytest.fixture
def solution():
    return Solution()


def test(solution):
    assert solution.maxNumberOfBalloons("nlaebolko") == 1
    assert solution.maxNumberOfBalloons("loonbalxballpoon") == 2
    assert solution.maxNumberOfBalloons("leetcode") == 0
