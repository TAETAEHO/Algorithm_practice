/**
 * BFS 연습
 * 0과 양수로 이루어진 2차원 배열을 입력받아 연결된 정점의 그룹의 개수를 구한다.
 * 무향 그래프
 */

// Solution
let connectedVertices = (edges) => {
  // 최종적으로 연결된 정점의 개수를 리턴할 변수 생성
  let cnt = 0;

  // edegs의 요소 중 가장 큰 수의 크기만큼 matrix를 만든다.
  // 1. edges의 요소 중에서 가장 큰 수 찾기
  let maxNumOfEdges = Math.max(...edges.flat(Infinity));

  let matrix = [];

  // 2. 요소 중 가장 큰 수의 크기만큼 matrix 만들어주기
  for (let i = 0; i <= maxNumOfEdges; i++) {
    matrix.push(new Array(maxNumOfEdges + 1).fill(0));
  }

  // 만들어진 matrix에서 edges의 정점들은 1로 이어줘야한다. -> 무향그래프 이므로 [0][1], [1][0] 모두 1로 이어준다.
  edges.forEach((edge) => {
    matrix[edge[0]][edge[1]] = 1;
    matrix[edge[1]][edge[0]] = 1;
  });

  // maxNumOfEdges 크기만큼 지나왔던 경로를 파악하기 위한 flag변수를 만들어준다.
  // 지나온 길은 true, 지나오지 않은 길은 false
  let flag = new Array(maxNumOfEdges + 1).fill(false);

  // matrix를 탐색하면서 연결된 정점들의 개수를 파악한다.
  for (let i = 0; i < matrix.length; i++) {
    // 큐를 생성해주어 i번째의 요소를 담아둔다.
    let queue = [i];

    // enqueue, dequeue 구현
    let enqueue = (el) => queue.push(el);
    let dequeue = () => queue.shift();

    // queue의 길이가 있을때까지 반복수행하면서 지나온길을 탐색한다. -> flag[i]가 true가 아닐 경우에만
    if (!flag[i]) {
      while (queue.length > 0) {
        // queue에서 하나씩 뽑아와서 현재를 나타내는 변수(임의 변수)에 담아준다.
        let curIdx = dequeue();

        // matrix를 탐색하면서 간선이 연결된 경우와 flag가 false인 경우를 탐색한다.
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[curIdx][i] === 1 && !flag[i]) {
            // 이미 지나온 길이므로 flag를 true로 바꿔준다.
            flag[i] = true;
            // 큐에 i를 넣어준다.
            enqueue(i);
          }
        }
      }
      // while문이 끝나면 cnt++
      cnt++;
    }
  }
  return cnt;
};

console.log(
  connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
  ])
);
