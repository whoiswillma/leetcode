struct Solution {}

const MOD: i32 = 1000000007;

impl Solution {
    pub fn paths_with_max_score(board: Vec<String>) -> Vec<i32> {
        let board: Vec<Vec<char>> = board.iter().map(|s| s.chars().collect()).collect();

        let n = board.len();
        let mut max_score = vec![vec![-1; n]; n];
        let mut num_paths = vec![vec![-1; n]; n];

        max_score[n - 1][n - 1] = 0;
        num_paths[n - 1][n - 1] = 1;

        for i in (0..n).rev() {
            for j in (0..n).rev() {
                if board[i][j] == 'S' || board[i][j] == 'X' {
                    continue;
                }

                if i + 1 < n {
                    Self::update(&mut max_score, &mut num_paths, i, j, i + 1, j);
                }
                if j + 1 < n {
                    Self::update(&mut max_score, &mut num_paths, i, j, i, j + 1);
                }
                if i + 1 < n && j + 1 < n {
                    Self::update(&mut max_score, &mut num_paths, i, j, i + 1, j + 1);
                }

                if max_score[i][j] != -1
                    && let Some(d) = board[i][j].to_digit(10)
                {
                    max_score[i][j] += d as i32;
                }
            }
        }

        if max_score[0][0] != -1 {
            vec![max_score[0][0], num_paths[0][0]]
        } else {
            vec![0, 0]
        }
    }

    pub fn update(
        max_score: &mut Vec<Vec<i32>>,
        num_paths: &mut Vec<Vec<i32>>,
        i: usize,
        j: usize,
        u: usize,
        v: usize,
    ) {
        if max_score[u][v] == -1 {
            return;
        }
        if max_score[u][v] > max_score[i][j] {
            max_score[i][j] = max_score[u][v];
            num_paths[i][j] = num_paths[u][v];
        } else if max_score[u][v] == max_score[i][j] {
            num_paths[i][j] += num_paths[u][v];
            num_paths[i][j] %= MOD;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_1() {
        assert_eq!(
            Solution::paths_with_max_score(vec![
                "E23".to_string(),
                "2X2".to_string(),
                "12S".to_string()
            ]),
            vec![7, 1]
        );
    }

    #[test]
    fn test_2() {
        assert_eq!(
            Solution::paths_with_max_score(vec![
                "E12".to_string(),
                "1X1".to_string(),
                "21S".to_string()
            ]),
            vec![4, 2]
        )
    }

    #[test]
    fn test_3() {
        assert_eq!(
            Solution::paths_with_max_score(vec![
                "E11".to_string(),
                "XXX".to_string(),
                "11S".to_string()
            ]),
            vec![0, 0]
        )
    }
}
