/**
 * BFS를 연습한다.
 * BFS는 재귀적으로 해결할 수 없다.
 * Queue 개념을 이용하여 해결해야 한다.
 */

// Solution 1. Queue를 사용하여 구현
let bfs = (node) => {
  // 최종적으로 리턴할 배열 변수를 생성한다.
  let result = [];
  // queue를 만들어준다. 초기값에 node를 넣어준다.
  // [1, 2, 4, 5, 3] 트리 구조라고 가정한다. -> queue = [1]
  let queue = [node];

  // queue의 길이가 0보다 클때까지 while문으로 result를 채워준다.
  while (queue.length > 0) {
    // 큐의 첫번째 요소를 담을 수 있는 head변수를 하나 만들어준다. -> head = 1
    let head = queue[0];
    // 큐는 head를 제외한 나머지로 세팅해준다. -> queue = []
    queue = queue.slice(1);

    // result에 head 값을 넣어준다.
    result.push(head.value);

    // head의 children을 탐색해서 children들을 queue에 넣어준다. -> queue = [2, 3]
    head.children.forEach((el) => queue.push(el));
  }
  return result;
};

let Node = (value) => {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = (child) => {
  this.children.push(child);
  return child;
};
