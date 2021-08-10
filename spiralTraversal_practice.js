/**
 * 2차원 M x N 배열을 나선형(spiral)으로 순회해야 한 문자열을 리턴해라
 */

// Solution
const spiralTraversal = (matrix) => {
  let spiralStr = "";

  while (true) {
    spiralStr = insertTop(matrix, spiralStr);

    // 1 * N의 경우
    if (matrix.length === 0) break;
    spiralStr = insertRight(matrix, spiralStr);
    spiralStr = insertBottom(matrix, spiralStr);

    // 2 * N의 경우
    if (matrix.length === 0) break;
    spiralStr = insertLeft(matrix, spiralStr);
  }

  return spiralStr;
};

// push Top Element -> matrix의 첫줄에 있는 요소들을 문자열에 추가
const insertTop = (matrix, spiralStr) => {
  for (let el of matrix[0]) {
    spiralStr += el;
  }

  matrix.shift();
  return spiralStr;
};

// push Right Element -> matrix의 오른쪽 맨 끝에 있는 요소들을 문자열에 추가
const insertRight = (matrix, spiralStr) => {
  for (let i = 0; i < matrix.length; i++) {
    spiralStr += matrix[i].pop();
  }

  return spiralStr;
};

// push Bottom Element -> matrix의 맨 아래쪽에 있는 요소들을 문자열에 추가(역순으로 집어넣어야한다.)
const insertBottom = (matrix, spiralStr) => {
  matrix[matrix.length - 1].reverse();

  for (let el of matrix[matrix.length - 1]) {
    spiralStr += el;
  }

  matrix.pop();
  return spiralStr;
};

// push Left Element -> matrix의 왼쪽 맨 끝에 있는 요소들을 문자열에 추가
const insertLeft = (matrix, spiralStr) => {
  for (let i = matrix.length - 1; i >= 0; i--) {
    spiralStr += matrix[i].shift();
  }

  return spiralStr;
};

console.log(
  spiralTraversal([
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
  ])
); // 'ABCFIHGDE'
