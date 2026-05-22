class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        if s[-1] != "0":
            return False

        n = len(s)
        memo = [False] * n
        memo[n - 1] = True

        k = 0

        for i in reversed(range(n - 1)):
            if i + minJump < n and memo[i + minJump]:
                k += 1
            if i + maxJump + 1 < n and memo[i + maxJump + 1]:
                k -= 1

            memo[i] = s[i] == "0" and k > 0

        return memo[0]


assert Solution().canReach(s="011010", minJump=2, maxJump=3)
assert not Solution().canReach(s="01101110", minJump=2, maxJump=3)
