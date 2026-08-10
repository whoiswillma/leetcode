struct Solution {}

use std::collections::HashMap;

impl Solution {
    pub fn winner_square_game(n: i32) -> bool {
        let mut memo = HashMap::new();
        Self::wins(&mut memo, n)
    }

    fn wins(memo: &mut HashMap<i32, bool>, n: i32) -> bool {
        if n == 0 {
            return false;
        }

        if let Some(&ans) = memo.get(&n) {
            return ans;
        }

        let ans = (1..n.isqrt() + 1).any(|m| !Self::wins(memo, n - m.pow(2)));
        memo.insert(n, ans);
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert!(Solution::winner_square_game(1));
        assert!(!Solution::winner_square_game(2));
        assert!(Solution::winner_square_game(4));
        assert!(Solution::winner_square_game(8));
        assert!(Solution::winner_square_game(10000));
    }
}
