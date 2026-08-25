import { describe, expect, test } from "vitest";

function findKthSmallest(coins: number[], k: number): number {
  coins.sort((a, b) => a - b);
  const n = coins.length;
  const m = 1 << n;

  let l: bigint = BigInt(k);
  let r: bigint = BigInt(coins[0]!) * BigInt(k) + 1n;

  const bitCount: number[] = new Array(m).fill(0);
  const lcm: bigint[] = new Array(m).fill(0n);

  const gcd = (a: bigint, b: bigint): bigint => {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  for (let mask = 1; mask < m; mask++) {
    let curLcm: bigint = 1n;
    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) {
        const coin: bigint = BigInt(coins[i]!);
        const g: bigint = gcd(curLcm, coin);
        const tmp: bigint = curLcm / g;

        if (tmp <= r / coin) {
          curLcm = tmp * coin;
        } else {
          curLcm = r + 1n;
          break;
        }
        bitCount[mask]!++;
      }
    }
    lcm[mask] = curLcm;
  }

  const count = (x: bigint): bigint => {
    let res: bigint = 0n;
    for (let mask = 1; mask < m; mask++) {
      if (lcm[mask]! > x) continue;

      if (bitCount[mask]! & 1) {
        res += x / lcm[mask]!;
      } else {
        res -= x / lcm[mask]!;
      }
    }
    return res;
  };

  while (l < r) {
    const mid: bigint = (l + r) / 2n;
    if (count(mid) >= k) {
      r = mid;
    } else {
      l = mid + 1n;
    }
  }

  return Number(l);
}

describe(findKthSmallest, () => {
  test("example 1", () => {
    expect(findKthSmallest([3, 6, 9], 3)).toEqual(9);
  });
  test("example 1", () => {
    expect(findKthSmallest([5, 2], 7)).toEqual(12);
  });
});
