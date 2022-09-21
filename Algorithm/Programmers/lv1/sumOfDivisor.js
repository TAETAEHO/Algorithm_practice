/**
 * 프로그래머스 lv.1 - 약수의 합
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 *
 * n은 0 이상 3000이하인 정수입니다.
 */

function solution(n) {
  let sum = 0;
  //   let divisor = 1;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }

  //   while (n >= divisor) {
  //     if (n % divisor === 0) sum += divisor;

  //     divisor++;
  //   }

  return sum;
}

solution(12);
