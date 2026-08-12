struct Solution {}

impl Solution {
    pub fn missing_integer(nums: Vec<i32>) -> i32 {
        let mut j = 1;
        while j < nums.len() && nums[j] == nums[0] + j as i32 {
            j += 1
        }

        let mut s = nums[..j].iter().sum::<i32>();
        while nums.contains(&s) {
            s += 1
        }

        return s;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(Solution::missing_integer(vec![1, 2, 3, 2, 5]), 6);
        assert_eq!(Solution::missing_integer(vec![3, 4, 5, 1, 12, 14, 13]), 15);
    }
}
