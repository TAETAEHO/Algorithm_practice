/**
 * 문자열을 입력받아 그 문자열로 구성될 수 있는 모든 부분집합을 구한다.
 * 멱집합의 개념
 * 배열 형태로 리턴한다.
 */

function powerSet(str) {
  // str 문자열을 배열로 만들어주고 소팅한다.
  let arr = str.split("").sort();
  // 최종적으로 리턴할 배열 변수를 만들어준다.
  let result = [];

  // result와 arr[i]를 받아서 부분집합을 만들 함수를 만들어준다.
  let subset = (result, target) => {
    // result 배열을 복사한다.
    // result.slice()를 사용해도 무방하다.
    let copy = [...result];

    // copy를 탐색한다.
    for (let i = 0; i < copy.length; i++) {
      // copy[i]에 target(arr[i]) 문자열을 합쳐준다.
      copy[i] += target;
      // 합쳐진 copy[i]를 result에 넣어준다.
      result.push(copy[i]);
    }
    return result;
  };

  // result를 탐색한다.
  for (let i = 0; i < arr.length; i++) {
    // result에 중복값이 있으면 안되니까 중복값이 없는 경우만 for문을 돌려준다.
    if (!result.includes(arr[i])) {
      // 재귀적으로 돌려준다.
      subset(result, arr[i]);
    }
  }
  // 최종적으로 result를 소팅해서 리턴한다.
  return result.sort();
}

// 멱집합 구하는 방법
function powerSet(arr) {
  // arr의 길이만큼 true, false로 값을 확인 시키기 위한 배열을 하나 만들어준다.
  // arr이 ['a', 'b', 'c']라고 가정하면 flag는 [false, false, false]가 된다.
  let flag = new Array(arr.length).fill(false);
  // 최종적으로 리턴 할 배열 변수를 만들어준다.
  let result = [];

  // 멱집합은 트리구조로 깊이 탐색을 하면서 계속 해서 그 요소가 부분집합에 포함된 경우와 포함되지 않은 경우를 확인해줘야한다.
  // 재귀함수를 이용해야한다.
  let dfs = (depth) => {
    // 탈출조건은 트리구조에서 제일 밑바닥까지 탐색한 경우이다. 즉, depth와 arr의 길이가 같을 때이다.
    if (depth === arr.length) {
      // flag 배열에 true인 요소에 같은 인덱스에 있는 arr의 요소들을 result에다가 넣어준다.
      result.push(arr.filter((value, index) => flag[index]));
    } else {
      // 왼쪽 노드들은 true로 바꿔준다. -> 요소가 포함된 경우
      flag[depth] = true;
      // depth를 하나씩 증가하면서 계속 재귀적으로 돌려준다.
      dfs(depth + 1);

      // 오른쪽 노드들은 false로 바꿔준다. -> 요소가 포함되지 않은 경우
      flag[depth] = false;
      // depth를 하나씩 증가하면서 계속 재귀적으로 돌려준다.
      dfs(depth + 1);
    }
  };
  // depth는 0부터 시작한다.
  dfs(0);
  return result;
}
