class Solution:
    def processStr(self, s: str, k: int) -> str:
        s_len = [0] * (len(s) + 1)
        for i, c in enumerate(s):
            match c:
                case "*":
                    s_len[i + 1] = max(s_len[i] - 1, 0)
                case "#":
                    s_len[i + 1] = 2 * s_len[i]
                case "%":
                    s_len[i + 1] = s_len[i]
                case _:
                    s_len[i + 1] = 1 + s_len[i]

        for i in reversed(range(len(s))):
            s_len_i = s_len[i + 1]

            if k < 0 or k >= s_len_i:
                return "."

            match s[i]:
                case "*":
                    pass
                case "#":
                    k %= s_len_i // 2
                case "%":
                    k = s_len_i - k - 1
                case _ as c:
                    if k == s_len_i - 1:
                        return c

        return "."


def test_1():
    assert Solution().processStr(s="a", k=0) == "a"
    assert Solution().processStr(s="ab", k=1) == "b"
    assert Solution().processStr(s="ab", k=0) == "a"
    assert Solution().processStr(s="ab", k=2) == "."


def test_2():
    assert Solution().processStr(s="ab#", k=2) == "a"
    assert Solution().processStr(s="ab#", k=3) == "b"
    assert Solution().processStr(s="ab#", k=4) == "."
    assert Solution().processStr(s="ab##", k=4) == "a"


def test_3():
    assert Solution().processStr(s="ab*", k=0) == "a"
    assert Solution().processStr(s="ab*", k=1) == "."


def test_4():
    assert Solution().processStr(s="ab%", k=0) == "b"
    assert Solution().processStr(s="ab%", k=1) == "a"
    assert Solution().processStr(s="ab%", k=2) == "."


def test():
    assert Solution().processStr(s="a#b%*", k=1) == "a"
    assert Solution().processStr(s="cd%#*#", k=3) == "d"
    assert Solution().processStr(s="z*#", k=0) == "."
