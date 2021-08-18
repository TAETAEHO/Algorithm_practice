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

// Solution -> 미완
function findPrimeNum(numbers) {
  let result = [];
  let number = "";

  const permutation = (number, buckets) => {
    // base case
    // numbers -> ['1', '7'], numbers.length = 2
    // number -> 초기값 : '', number.length = 0
    // number -> '1' -> '17' -> '7' -> '71' 이런식
    if (number.length === numbers.length) return;

    for (let i = 0; i < numbers.length; i++) {
      // 중복체크
      // '11' 이런식으로 같은걸 두개 붙여서 만들수 없으니까 같은 인덱스에 있는 거는 못붙이게 걸러준다.
      if (buckets.includes(i)) continue;

      // numbers[i]는 '1', '7'
      let curEl = number + numbers[i];

      // 유효성 검사
      if (!result.includes(curEl) && isPrime(Number(curEl))) {
        result.push(curEl);
      }

      permutation(curEl, buckets.concat(i));
    }
  };

  // permutation -> 중복가능
  permutation(number, []);

  for (let char of result) {
    if (char[0] === "0") result.splice(result.indexOf(char), 1);
  }

  return result.length;
}

const isPrime = (num) => {
  if (num === 2) return true;
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
