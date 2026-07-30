struct Solution {}

impl Solution {
    pub fn minimum_pushes(word: String) -> i32 {
        let mut n = word.len();
        let mut ans = 0;

        for i in (0..4).rev() {
            if n > 8 * i {
                ans += (i + 1) * (n - 8 * i);
                n = 8 * i;
            }
        }

        ans as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(Solution::minimum_pushes("abcde".to_string()), 5);
        assert_eq!(Solution::minimum_pushes("xycdefghij".to_string()), 12);
        assert_eq!(
            Solution::minimum_pushes("abcdefghijklmnopqrstuvwxyz".to_string()),
            56
        );
    }
}
