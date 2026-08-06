struct Solution {}

impl Solution {
    pub fn smallest_number(mut n: i32, t: i32) -> i32 {
        loop {
            let p = n
                .to_string()
                .chars()
                .map(|c| c.to_digit(10).unwrap() as i32)
                .product::<i32>();
            if p % t == 0 {
                return n;
            }
            n += 1;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(Solution::smallest_number(10, 2), 10);
        assert_eq!(Solution::smallest_number(15, 3), 16);
    }
}
