/**
 * 다양한 동전들을 가지고 특정 금액을 만들 수 있는 모든 경우의 수를 리턴해야 합니다.
 */

// // Solution -> 중복순열로 경우의 수를 모두 구한 다음에 그 경우의 수를 리턴한다.
// const coinChange = function (total, coins) {
//   // TODO: 여기에 코드를 작성합니다.
//   /**
//    * 중복순열로 만든다.
//    * 중복순열 배열의 요소들의 합이 total과 같으면 그걸 리턴
//    */
//   coins.sort((a, b) => b - a);
//   let result = [];
//   let sum = 0;

//   // recursive
//   let permutation = (coins, sum, buckets) => {
//     // base case
//     // 리턴하면 다시 39번째 라인으로 가서 리턴됐을 때도 sum 값을 세팅해야 할거같다.
//     if (sum === total) {
//       result.push(buckets);
//       return;
//     }

//     if (sum > total) {
//       return;
//     }

//     for (let i = 0; i < coins.length; i++) {
//       let curEl = coins[i];

//       sum += curEl;

//       if (sum > total) {
//         sum -= curEl;
//         continue;
//       }

//       permutation(coins, sum, buckets.concat(curEl));
//     }
//   };

//   // 중복순열
//   permutation(coins, sum, []);
//   return result.length;
// };

// Solution 2. knapsack
function coinChange(total, coins) {
  // flag 생성
  let flag = new Array(total + 1).fill(0);
  coins.sort((a, b) => a - b);

  coins.forEach((el) => {
    flag[el]++;

    for (let i = el + 1; i < flag.length; i++) {
      if (flag[i - el] > 0) flag[i] += flag[i - el];
    }
  });

  return flag[total];
}
console.log(coinChange(10, [1, 5]));
