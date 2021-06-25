/*
1. 두 수를 입력 받아 거듭제곱을 리턴한다.
*/

// Solution 1. Math.pow를 이용한 거듭제곱 출력
function power(base, exponent) {
  // 컴퓨터가 출력할 수 있는 범위를 보존하기 위해 94906249로 나눈 결과값을 출력한다.
  return Math.pow(base, exponent) % 94906249;
}

// Solution 2. for문을 이용한 거듭제곱
function power(base, exponent) {
  let pow = 1;

  for (let i = 1; i <= exponent; i++) {
    pow = pow * base;
  }

  return pow;
}

// Solution 3. 분할정복을 이용한 거듭제곱 -> 시간복잡도 O(logN)
function power(base, exponent) {
  // 지수가 0이면 1이다.
  if (exponent === 0) {
    return 1;
  }

  // exponent를 반으로 나눈다. 홀수의 경우를 대비해 Math.floor한다.
  let halfExponent = Math.floor(exponent / 2);

  // 반으로 나눈 지수를 재귀적으로 돌린다.
  let recursive = power(base, halfExponent);

  let result = (recursive * recursive) % 94906249;

  // 지수가 홀수인 경우는 마지막에 base를 곱해준다.
  if (exponent % 2 !== 0) {
    result = (result * base) % 94906249;
  }
  return result;
}
