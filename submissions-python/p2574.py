from typing import List


class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        def prefix_sum(arr):
            ans = []

            running_sum = 0
            for v in arr:
                ans.append(running_sum)
                running_sum += v

            return ans

        left_sum = prefix_sum(nums)
        right_sum = reversed(prefix_sum(reversed(nums)))

        return [abs(l - r) for l, r in zip(left_sum, right_sum)]


assert Solution().leftRightDifference([10, 4, 8, 3]) == [15, 1, 11, 22]
assert Solution().leftRightDifference([1]) == [0]
