struct Solution {}

impl Solution {
    pub fn valid_sequence(word1: String, word2: String) -> Vec<i32> {
        let (n, m, word1, word2) = (
            word1.len(),
            word2.len(),
            word1.into_bytes(),
            word2.into_bytes(),
        );

        let (mut last, mut j) = (vec![-1; m], m - 1);
        for i in (0..n).rev() {
            if word1[i] == word2[j] {
                last[j] = i as i32;

                if j > 0 {
                    j -= 1;
                } else {
                    break;
                }
            }
        }

        let (mut res, mut skip, mut j) = (Vec::new(), false, 0);
        for i in 0..n {
            if j == m {
                break;
            }

            if word1[i] == word2[j] {
                res.push(i);
                j += 1;
            } else if !skip && (j == m - 1 || (i as i32) < last[j + 1]) {
                skip = true;
                res.push(i);
                j += 1;
            }
        }

        if j == m {
            res.into_iter().map(|n| n as i32).collect()
        } else {
            Vec::new()
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(
            Solution::valid_sequence("vbcca".to_string(), "abc".to_string()),
            [0, 1, 2]
        );
        assert_eq!(
            Solution::valid_sequence("bacdc".to_string(), "abc".to_string()),
            [1, 2, 4]
        );
        assert_eq!(
            Solution::valid_sequence("aaaaaa".to_string(), "aaabc".to_string()),
            []
        );
        assert_eq!(
            Solution::valid_sequence("abc".to_string(), "ab".to_string()),
            [0, 1]
        );
        assert_eq!(
            Solution::valid_sequence("abcdef".to_string(), "abcfg".to_string()),
            []
        );
        assert_eq!(
            Solution::valid_sequence("ghhgghhhhhh".to_string(), "gg".to_string()),
            [0, 1]
        );
    }
}
