class Solution:
    def mapWordWeights(self, words: list[str], weights: list[int]) -> str:
        return "".join(
            chr(ord("z") - sum(weights[ord(c) - ord("a")] for c in word) % 26)
            for word in words
        )


assert (
    Solution().mapWordWeights(
        words=["abcd", "def", "xyz"],
        weights=[
            5,
            3,
            12,
            14,
            1,
            2,
            3,
            2,
            10,
            6,
            6,
            9,
            7,
            8,
            7,
            10,
            8,
            9,
            6,
            9,
            9,
            8,
            3,
            7,
            7,
            2,
        ],
    )
    == "rij"
)
assert (
    Solution().mapWordWeights(
        words=["abcd", "def", "xyz"],
        weights=[
            5,
            3,
            12,
            14,
            1,
            2,
            3,
            2,
            10,
            6,
            6,
            9,
            7,
            8,
            7,
            10,
            8,
            9,
            6,
            9,
            9,
            8,
            3,
            7,
            7,
            2,
        ],
    )
    == "rij"
)
