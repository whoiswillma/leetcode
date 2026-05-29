from typing import List


class TrieNode:
    def __init__(self, i: int, l: int):
        self._next: dict[str, "TrieNode"] = {}
        self._i = i
        self._l = l

    def insert(self, s: str, i: int):
        if len(s) < self._l:
            self._i = i
            self._l = len(s)

        if not s:
            return

        c, rem = s[0], s[1:]
        node = self._next.get(c) or TrieNode(i, len(s))
        node.insert(rem, i)
        self._next[c] = node

    def get(self, s: str):
        if not s:
            return self._i

        c, rem = s[0], s[1:]
        if (node := self._next.get(c)) is None:
            return self._i

        return node.get(rem)

    def print(self, c: str | None = None, level: int = 0):
        print(" " * level + f"c={c or '_'} i={self._i} l={self._l}")
        for c, node in self._next.items():
            node.print(c, level + 1)


class Solution:
    def stringIndices(
        self, wordsContainer: List[str], wordsQuery: List[str]
    ) -> List[int]:
        trie = TrieNode(-1, 10**4)

        for i, word in enumerate(wordsContainer):
            trie.insert("".join(reversed(word)), i)

        trie.print()

        return [trie.get("".join(reversed(query))) for query in wordsQuery]


assert Solution().stringIndices(
    wordsContainer=["abcd", "bcd", "xbcd"], wordsQuery=["cd", "bcd", "xyz"]
) == [1, 1, 1]
assert Solution().stringIndices(
    ["abcdefgh", "poiuygh", "ghghgh"], wordsQuery=["gh", "acbfgh", "acbfegh"]
) == [2, 0, 2]
