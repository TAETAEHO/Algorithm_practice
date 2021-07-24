/**
 * 프로그래머스 lv.1 - k번째 수
 */

// Solution 1
function kThNum(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    result.push(
      // commands의 i번째부터 j번째까지 slice먼저 진행 -> 인덱스니까 i-1, j까지 자른다.
      // 그 다음 오름차순으로 소팅하고 commands의 k번째 요소를 출력 -> 인덱스니까 k-1번쨰 요소를 출력하면 되겠다.
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return result;
}

console.log(
  kThNum(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

// Solution 2
function kThNum(array, commands) {
  return commands.map((command) => {
    // 구조분해할당 -> i, j, k
    let [startPoint, middlePoint, lastPoint] = command;

    // slice, sort를 진행한 것을 특정 배열에 담는다.
    let newArr = array
      .filter((value, idx) => idx >= startPoint - 1 && idx <= middlePoint - 1)
      .sort((a, b) => a - b);

    return newArr[lastPoint - 1];
  });
}
