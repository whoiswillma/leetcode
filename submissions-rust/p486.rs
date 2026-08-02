struct Solution {}

use std::cmp::{max, min};

impl Solution {
    pub fn predict_the_winner(nums: Vec<i32>) -> bool {
        2 * Self::score(&nums, 0, nums.len(), true) >= nums.iter().sum::<i32>()
    }

    fn score(nums: &Vec<i32>, i: usize, j: usize, turn: bool) -> i32 {
        if i == j {
            return 0;
        } else if i + 1 == j {
            return if turn { nums[i] } else { 0 };
        }

        if turn {
            max(
                nums[i] + Self::score(nums, i + 1, j, false),
                nums[j - 1] + Self::score(nums, i, j - 1, false),
            )
        } else {
            min(
                Self::score(nums, i + 1, j, true),
                Self::score(nums, i, j - 1, true),
            )
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert!(!Solution::predict_the_winner(vec![1, 5, 2]));
        assert!(Solution::predict_the_winner(vec![1, 5, 233, 7]));
    }

    #[test]
    fn test_2() {
        assert!(!Solution::predict_the_winner(vec![1, 3, 1]));
    }
}
