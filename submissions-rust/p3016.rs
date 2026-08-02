struct Solution {}

use std::collections::HashMap;

impl Solution {
    pub fn minimum_pushes(word: String) -> i32 {
        let mut count: Vec<usize> = word
            .chars()
            .fold(HashMap::new(), |mut counts, c| {
                *counts.entry(c).or_default() += 1;
                counts
            })
            .into_values()
            .collect();
        count.sort();
        count.reverse();

        count
            .into_iter()
            .enumerate()
            .map(|(i, n)| (1 + i / 8) * n)
            .sum::<usize>() as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(Solution::minimum_pushes("abcde".to_string()), 5);
        assert_eq!(Solution::minimum_pushes("xyzxyzxyzxyz".to_string()), 12);
        assert_eq!(
            Solution::minimum_pushes("aabbccddeeffgghhiiiiii".to_string()),
            24
        );
    }
}
