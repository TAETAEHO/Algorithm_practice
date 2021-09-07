/**
 * 주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환
 *
 * 
 * [
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
		[0, 1, 0, 0],
	],
	0,
	2
 * 정점 0에서 2로 가는 길이 존재하는지 확인합니다.
 * 0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.
 */

// Solution 1.
function getDirection(matrix, from, to) {
  let visited = [from];

  const checkDirection = (matrix, from, to) => {
    // base case
    if (matrix[from][to] === 1) return true;

    for (let i = 0; i < matrix[from].length; i++) {
      // 유효성 검사
      if (matrix[from][i] === 1 && !visited.includes(i)) {
        visited.push(i);

        let result = checkDirection(matrix, i, to);

        if (result) return true;
      }
    }
    return false;
  };

  // return function
  return checkDirection(matrix, from, to);
}
