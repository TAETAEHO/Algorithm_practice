/**
 * 방향이 있는 간선과 방향이 없는 간선들의 목록들을 받아 2차원 배열의 인접행렬을 반환하는 함수를 작성
 * ex> edges = [
	[0, 3, "directed"],
	[0, 2, "directed"],
	[1, 3, "directed"],
	[2, 1, "directed"],
]
 */

// Solution 1.
function createMatrix(edges) {
  let flat = edges.flat(Infinity);
  let onlyNum = [];

  // 숫자만 필터링
  for (let i = 0; i < flat.length; i++) {
    if (typeof flat[i] === "number") onlyNum.push(flat[i]);
  }

  let maxNum = Math.max(...onlyNum);
  let matrix = [];

  // 가장 큰 수 만큼 M * M 행렬 만들기
  for (let i = 0; i <= maxNum; i++) {
    matrix.push(new Array(maxNum + 1).fill(0));
  }

  // 무향은 [0][1], [1][0] 둘다 1로 만들어주기
  for (let edge of edges) {
    matrix[edge[0]][edge[1]] = 1;

    if (edge[2] === "undirected") matrix[edge[1]][edge[0]] = 1;
  }
  return matrix;
}
