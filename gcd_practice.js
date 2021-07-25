/**
 * 공약수 만큼 직원들에게 빼빼로 주기
 * 출근한 직원이 1명이라면 아몬드 빼빼로 4개와 누드 빼빼로 8개를 줄 수 있습니다.
 * 출근한 직원이 2명이라면 아몬드 빼빼로 2개와 누드 빼빼로 4개를 각각 줄 수 있습니다.
 * 출근한 직원이 3명이라면 빼빼로를 남기지 않고 공평하게 주는 방법은 없습니다.
 * 출근한 직원이 4명이라면 아몬드 빼빼로 1개와 누드 빼빼로 2개를 각각 줄 수 있습니다.
 */

// Solution
function divideChocolate(M, N) {
  // 최대공약수 구하기
  let GCD = (M, N) => (M % N === 0 ? N : GCD(N, M % N));
  console.log(GCD(4, 8));
  let gcd = GCD(M, N);
  let tempGcd = gcd;
  let tempResult = [];

  // 최대공약수만큼 탐색
  for (let i = 1; i < tempGcd; i++) {
    // 약수인 경우
    if (tempGcd % i === 0) {
      tempGcd = gcd / i;

      if (i >= gcd / i) {
        tempResult.push(i);
      } else {
        tempResult.push(i, gcd / i);
      }
    }
  }

  // tempResult 오름차순 소팅
  tempResult.sort((a, b) => a - b);

  let result = [];

  for (let el of tempResult) {
    result.push([el, M / el, N / el]);
  }

  return result;
}

console.log(divideChocolate(4, 8));
