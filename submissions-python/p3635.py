from typing import List


class Solution:
    def earliestFinishTime(
        self,
        landStartTime: List[int],
        landDuration: List[int],
        waterStartTime: List[int],
        waterDuration: List[int],
    ) -> int:
        def solve(
            a_start: list[int], a_dur: list[int], b_start: list[int], b_dur: list[int]
        ) -> int:
            a_fin = min(a_start + a_dur for a_start, a_dur in zip(a_start, a_dur))
            return min(
                max(a_fin, b_start) + b_dur for b_start, b_dur in zip(b_start, b_dur)
            )

        return min(
            solve(landStartTime, landDuration, waterStartTime, waterDuration),
            solve(waterStartTime, waterDuration, landStartTime, landDuration),
        )


assert (
    Solution().earliestFinishTime(
        landStartTime=[2, 8], landDuration=[4, 1], waterStartTime=[6], waterDuration=[3]
    )
    == 9
)

assert (
    Solution().earliestFinishTime(
        landStartTime=[5], landDuration=[3], waterStartTime=[1], waterDuration=[10]
    )
    == 14
)
