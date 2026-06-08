from typing import List


class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        lt = []
        eq = 0
        gt = []

        for n in nums:
            if n < pivot:
                lt.append(n)
            elif n == pivot:
                eq += 1
            else:
                gt.append(n)

        return lt + [pivot] * eq + gt


assert Solution().pivotArray(nums=[9, 12, 5, 10, 14, 3, 10], pivot=10) == [
    9,
    5,
    3,
    10,
    10,
    12,
    14,
]
assert Solution().pivotArray(nums=[-3, 4, 3, 2], pivot=2) == [-3, 2, 4, 3]
