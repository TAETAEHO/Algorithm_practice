/*
1. 2 * 1의 타일로 2 * n의 타일을 채울 수 있는 방법은 몇개인가?
*/

// Solution 1. Dynamic Programming을 이용한 tiling
const tiling = (n) => {
  /*
    1. n=0 -> 0개
    2. n=1 -> (a, b) -> 1개
    3. n=2 -> (ab, ab), (aa, bb) -> 2개
    4. n=3 -> (abc, abc), (aac, bbc), (aab, ccb) -> 3개
    5. n=4 -> (abcd, abcd), (aabb, ccdd), (accd, abbd), (abcc, abdd), (aacd, bbcd) -> 5개
    6. 피보나치 수열의 로직이랑 동일하다. -> n이 2이하일때는 n과 동일한 값 출력
    f(0) = 0
    f(1) = 1
    f(2) = 2 = f(1) + f(0)
    f(3) = 3 = f(2) + f(1)
    f(4) = 5 = f(3) + f(2)
    */

  // memoization을 위한 memo 배열 변수 선언
  let memo = [];

  // memoization을 위한 함수 선언
  const newTiling = (n) => {
    // n이 2이하일 때는 n을 리턴한다.
    if (n <= 2) {
      return n;
    } else {
      // memo 변수에 값이 있는지 확인한다.
      if (memo[n] !== undefined) {
        return memo[n];
      } else {
        // 없으면 재귀적으로 돌려준다.
        memo[n] = newTiling(n - 1) + newTiling(n - 2);
        return memo[n];
      }
    }
  };
  // 최종 newTiling 리턴
  return newTiling(n);
};
