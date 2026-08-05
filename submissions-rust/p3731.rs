struct Solution {}

impl Solution {
    pub fn find_missing_elements(mut nums: Vec<i32>) -> Vec<i32> {
        nums.sort_unstable();

        let mut ans = Vec::new();
        let mut i = 1;

        for n in *nums.first().unwrap() + 1..*nums.last().unwrap() {
            if n < nums[i] {
                ans.push(n);
            } else {
                i += 1
            }
        }

        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(Solution::find_missing_elements(vec![1, 4, 2, 5]), [3]);
        assert_eq!(Solution::find_missing_elements(vec![7, 8, 6, 9]), []);
        assert_eq!(Solution::find_missing_elements(vec![5, 1]), [2, 3, 4]);
    }
}
