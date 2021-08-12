/**
 * LSCS 구하기
 * LSCS: 주어진 배열의 연속된 부분 배열의 합을 구한다고 할 때, 이 중 가장 큰 값(Largest Sum of Contiguous Subarray)
 * 연속된 부분 배열들: 배열 [1,2,3]의 연속 부분 배열은 [1], [1, 2], [1, 2, 3], [2], [2, 3], [3] 입니다.
 */

// Solution
const LSCS = function (arr) {
  // 최소 정수값
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // sum이 max보다 큰 경우
    if (sum > max) {
      max = sum;
    }

    // 음수의 경우 버리고 다시 시작
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(LSCS([1, 2, 3]));
