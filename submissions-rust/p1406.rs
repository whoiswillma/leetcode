struct Solution {}

impl Solution {
    pub fn stone_game_iii(stone_value: Vec<i32>) -> String {
        let n = stone_value.len();
        let mut dp = vec![0; n + 3];

        for i in (0..n).rev() {
            dp[i] = stone_value[i] - dp[i + 1];
            for j in 1..3 {
                if i + j >= n {
                    break;
                }
                dp[i] = dp[i].max(stone_value[i..i + j + 1].iter().sum::<i32>() - dp[i + j + 1])
            }
        }

        if dp[0] > 0 {
            "Alice".to_string()
        } else if dp[0] < 0 {
            "Bob".to_string()
        } else {
            "Tie".to_string()
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(Solution::stone_game_iii(vec![1, 2, 3, 7]), "Bob");
        assert_eq!(Solution::stone_game_iii(vec![1, 2, 3, -9]), "Alice");
        assert_eq!(Solution::stone_game_iii(vec![1, 2, 3, 6]), "Tie");
    }
}
