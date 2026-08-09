struct Solution {}

use std::collections::HashMap;

impl Solution {
    pub fn stone_game_ii(piles: Vec<i32>) -> i32 {
        let mut memo = HashMap::new();
        Self::f(&mut memo, &piles, 0, 1, true)
    }

    fn f(
        memo: &mut HashMap<(usize, usize, bool), i32>,
        piles: &[i32],
        i: usize,
        m: usize,
        alice: bool,
    ) -> i32 {
        if i == piles.len() {
            return 0;
        }

        let key = (i, m, alice);
        if let Some(&ans) = memo.get(&key) {
            return ans;
        }

        let mut ans = if alice { 0 } else { std::i32::MAX };

        for j in i + 1..(i + 2 * m).min(piles.len()) + 1 {
            let rec = Self::f(memo, piles, j, m.max(j - i), !alice);

            ans = if alice {
                ans.max(piles[i..j].iter().sum::<i32>() + rec)
            } else {
                ans.min(rec)
            };
        }

        memo.insert(key, ans);
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(Solution::stone_game_ii(vec![2, 7, 9, 4, 4]), 10);
        assert_eq!(Solution::stone_game_ii(vec![1, 2, 3, 4, 5, 100]), 104);
    }
}
