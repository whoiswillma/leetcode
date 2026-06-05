from functools import cache


class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        #  calculate the sum of fluctuation values of all numbers in the range [0, num]
        def solve(num: int) -> int:
            # if the fluctuation value of numbers less than 3 is 0
            if num < 100:
                return 0
            s = str(num)
            n = len(s)

            @cache
            def dfs(
                *,
                pos: int = 0,
                prev: int = -1,
                curr: int = -1,
                isLimit: bool = True,
                isLeading: bool = True,
            ):
                # end position
                if pos == n:
                    return 1, 0

                # calculate the number of filling schemes and fluctuation value under current conditions
                cnt = 0
                waviness = 0
                up = int(s[pos]) if isLimit else 9
                for digit in range(up + 1):
                    sub_count, sub_sum = dfs(
                        pos=pos + 1,
                        prev=curr,
                        curr=-1 if isLeading and (digit == 0) else digit,
                        isLimit=isLimit and (digit == up),
                        isLeading=isLeading and (digit == 0),
                    )
                    # only calculate the fluctuation value when there are no leading zeros
                    if not (isLeading and (digit == 0)) and prev >= 0 and curr >= 0:
                        # when the digit is a peak or a valley, update the current fluctuation value
                        if (prev < curr and curr > digit) or (
                            prev > curr and curr < digit
                        ):
                            waviness += sub_count

                    cnt += sub_count
                    waviness += sub_sum

                return cnt, waviness

            _, totalSum = dfs()
            return totalSum

        return solve(num2) - solve(num1 - 1)


assert Solution().totalWaviness(120, 130) == 3
assert Solution().totalWaviness(198, 202) == 3
assert Solution().totalWaviness(4848, 4848) == 2
