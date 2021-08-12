/**
 * 1원, 5원, 10원, 50원, 100원, 500원을 최소한 사용하여 거스름돈 k를 만든다.
 * 필요한 동전의 개수를 구해라
 */

// Solution
function coinChange(k) {
  // lookup table
  const coins = [500, 100, 50, 10, 5, 1];
  let sum = 0;

  for (let i = 0; i < coins.length; i++) {
    // k가 0보다 큰 경우에만
    if (k > 0) {
      // 몫 변수
      let quotient = Math.floor(k / coins[i]);
      k = k - quotient * coins[i];

      sum += quotient;
    }
  }
  return sum;
}

console.log(coinChange(4972));
