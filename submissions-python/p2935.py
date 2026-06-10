class Solution:
    def maximumStrongPairXor(self, nums: list[int]) -> int:
        n = len(nums)
        result = 0

        for i in range(n):
            x = nums[i]

            for j in range(i + 1, n):
                y = nums[j]

                if abs(x - y) <= min(x, y):
                    result = max(result, x ^ y)

        return result


assert Solution().maximumStrongPairXor([1, 2, 3, 4, 5]) == 7
assert Solution().maximumStrongPairXor([10, 100]) == 0
assert Solution().maximumStrongPairXor([500, 520, 2500, 3000]) == 1020
