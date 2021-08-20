/**
 * 자연수의 집합(set)과 자연수(bound)를 입력받아 아래의 조건을 만족하는 가장 큰 수를 리턴한다.
 *
 * 집합의 요소를 최대 한번씩만 더해서 만들어야 한다.
 * bound를 넘지 않아야 한다.
 */

// Solution -> 미완 [1, 10, 100, 50, 30], 170을 입력받은 경우 해결 못함
function subsetSum(set, bound) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let maxEl = 0;
  let subSum = 0;
  let minTemp = [];

  // [10, 20, 15, 25, 30], 5 이런 케이스의 경우
  for (let el of set) {
    if (el > bound) minTemp.push(el);
  }

  if (minTemp.length === set.length) return 0;

  for (let i = 0; i < set.length; i++) {
    // subSum 부분도 수정이 필요하다.
    subSum = set[i] + set[i + 1];
    for (let j = i + 1; j < set.length; j++) {
      sum = set[i] + set[j];

      if (set[j] > set[j + 1]) maxEl = set[j];
      if (sum > bound) continue;
      if (sum > max) max = sum;
    }
    if (max === Number.MIN_SAFE_INTEGER) return maxEl;
    if (bound >= subSum) return bound;
  }
  return max;
}
