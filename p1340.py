class Solution:
    def maxJumps(self, arr: list[int], d: int) -> int:
        n = len(arr)
        max_jumps: list[int] = [-1] * n

        def jumpable(i: int) -> list[int]:
            ans = []

            for j in range(i + 1, min(len(arr), i + d + 1), 1):
                if arr[i] > arr[j]:
                    ans.append(j)
                else:
                    break

            for j in range(i - 1, max(0, i - d) - 1, -1):
                if arr[i] > arr[j]:
                    ans.append(j)
                else:
                    break

            return ans

        def f(i: int) -> int:
            if max_jumps[i] != -1:
                return max_jumps[i]

            ans = 1

            for j in jumpable(i):
                ans = max(ans, 1 + f(j))

            max_jumps[i] = ans
            return ans

        return max(f(i) for i in range(n))


assert Solution().maxJumps(arr=[6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], d=2) == 4

assert Solution().maxJumps(arr=[3, 3, 3, 3, 3], d=3) == 1

assert Solution().maxJumps(arr=[7, 6, 5, 4, 3, 2, 1], d=1) == 7
