/**
 * 프로그래머스 lv.2 - DFS 타겟넘버
 * 문제 설명
 * n개의 음이 아닌 정수가 있습니다.
 * 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.
 * 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
 * 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때
 * 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return
 */

// Solution
function targetNumber(numbers, target) {
  let result = 0;

  const dfs = (depth, sum) => {
    // base case
    if (depth === numbers.length) {
      if (sum === target) result += 1;
      else return;
    } else {
      // 왼쪽
      dfs(depth + 1, sum + numbers[depth]);
      // 오른쪽
      dfs(depth + 1, sum - numbers[depth]);
    }
  };

  // dfs(트리 깊이, 합)
  dfs(0, 0);
  return result;
}

console.log(targetNumber([1, 1, 1, 1, 1], 3));
