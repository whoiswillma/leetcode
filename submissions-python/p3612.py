class Solution:
    def processStr(self, s: str) -> str:
        result = []

        for c in s:
            match c:
                case "*":
                    if result:
                        result.pop()
                case "#":
                    result += result
                case "%":
                    result = list(reversed(result))
                case _:
                    result.append(c)

        return "".join(result)
