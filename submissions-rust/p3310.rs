struct Solution {}

use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn remaining_methods(n: i32, k: i32, invocations: Vec<Vec<i32>>) -> Vec<i32> {
        let mut g: HashMap<_, Vec<_>> = HashMap::new();
        for invocation in invocations.iter() {
            let (a, b) = (invocation[0], invocation[1]);
            g.entry(a).or_default().push(b);
        }

        let mut s = HashSet::new();
        let mut stack = vec![k];

        while let Some(a) = stack.pop() {
            if s.contains(&a) {
                continue;
            }

            s.insert(a);
            if let Some(bs) = g.get(&a) {
                for b in bs.iter() {
                    stack.push(*b);
                }
            }
        }

        let not_possible = invocations.iter().any(|i| {
            let (a, b) = (i[0], i[1]);
            !s.contains(&a) && s.contains(&b)
        });

        if not_possible {
            (0..n).collect()
        } else {
            (0..n).filter(|a| !s.contains(a)).collect()
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(
            Solution::remaining_methods(4, 1, vec![vec![1, 2], vec![0, 1], vec![3, 2]]),
            [0, 1, 2, 3]
        );
        assert_eq!(
            Solution::remaining_methods(5, 0, vec![vec![1, 2], vec![0, 2], vec![0, 1], vec![3, 4]]),
            [3, 4]
        );
        assert_eq!(
            Solution::remaining_methods(3, 2, vec![vec![1, 2], vec![0, 1], vec![2, 0]]),
            []
        );
    }
}
