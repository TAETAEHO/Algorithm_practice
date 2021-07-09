/**
 * DFS 연습
 * 0과 양수로 이루어진 2차원 배열을 입력받아 연결된 정점의 그룹의 개수를 구한다.
 * 무향 그래프
 */

// Solution
let connectedVertices = (edges) => {
  // 연결된 간선이 몇개인지 최종적으로 리턴할 변수 생성
  let cnt = 0;

  // matrix를 만들기 위해 edges의 요소 중 가장 큰 숫자의 크기를 찾는다.
  let maxNumOfEdges = Math.max(...edges.flat(Infinity));

  let matrix = [];
  // 가장 큰 숫자의 크기만큼 matrix를 만든다.
  for (let i = 0; i <= maxNumOfEdges; i++) {
    matrix.push(new Array(maxNumOfEdges + 1).fill(0));
  }

  // 만들어진 matrix에서 edges의 정점들은 1로 이어준다.
  for (let edge of edges) {
    matrix[edge[0]][edge[1]] = 1;
    matrix[edge[1]][edge[0]] = 1;
  }

  // 간선 중복을 체크하기 위해 flag 변수를 생성한다.
  let flag = new Array(maxNumOfEdges + 1).fill(false);

  // matrix 탐색
  for (let i = 0; i < matrix.length; i++) {
    // 지나온 길이 아닌 경우 실행
    if (!flag[i]) {
      dfs(matrix, flag, i);
      cnt++;
    }
  }
  return cnt;
};

let dfs = (matrix, flag, from) => {
  // from부터 시작하니까 true로 바꿔준다.
  flag[from] = true;

  // matrix 탐색
  for (let i = 0; i < matrix[from].length; i++) {
    // 정점들이 연결되어 있고 중복된 길이 아닌 경우
    if (matrix[from][i] === 1 && !flag[i]) {
      flag[i] = true;
      dfs(matrix, flag, i);
    }
  }
};

// console.log(
//   connectedVertices([
//     [0, 1],
//     [2, 3],
//     [3, 4],
//     [3, 5],
//   ])
// );
