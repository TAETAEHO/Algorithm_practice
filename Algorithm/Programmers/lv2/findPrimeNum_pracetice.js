/**
 * 프로그래머스 lv.2 - 소수 찾기(완전탐색)
 *
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 * 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 *
 * 예제 #1
 * [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.
 *
 * 예제 #2
 * [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.
 * 11과 011은 같은 숫자로 취급합니다.
 */

// Solution
function findPrimeNum(numbers) {
  let result = "";
  let stack = [];

  // permutation
  const permutation = (result, buckets) => {
    // base case
    if (result.length === numbers.length) return;

    for (let i = 0; i < numbers.length; i++) {
      // 같은 인덱스끼리는 못합침
      if (buckets.indexOf(i) !== -1) continue;

      let curEl = result + numbers[i];

      // 유효성 검사
      if (!stack.includes(curEl) && Number(curEl) >= 2) {
        if (isPrime(Number(curEl))) stack.push(curEl);
      }

      permutation(curEl, buckets.concat(i));
    }
  };

  // 중복불가 순열
  permutation(result, []);

  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] === "0") {
      stack.splice(stack.indexOf(stack[i]), 1);
      i--;
    }
  }

  return stack.length;
}

const isPrime = (num) => {
  if (num === 2) return true;
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(findPrimeNum("17"));
console.log(findPrimeNum("011"));
