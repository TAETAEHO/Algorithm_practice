/**
 * 프로그래머스 lv.1 - 약수의 개수와 덧셈
 * 두 정수 left와 right가 매개변수로 주어집니다.
 * left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
 * 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

// Solution 1 => 내 풀이
function solution(left, right) {
  let sum = 0;
  let result = [];

  for (let i = left; i <= right; i++) {
    let index = 1;
    let cnt = 0;

    while (index <= i) {
      if (i % index === 0) cnt++;
      index++;
    }

    result.push([i, cnt]);
  }

  result.map((el) => {
    if (el[1] % 2 === 0) sum += el[0];
    else sum -= el[0];
  });

  return sum;
}

// Solution2 => 다른 사람 풀이(제곱근이 정수면 약수의 갯수는 홀수다)
function solution2(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) sum -= i;
    else sum += i;
  }

  return sum;
}

solution(13, 17);
