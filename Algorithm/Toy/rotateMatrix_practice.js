/**
 * 2차원 배열을 입력받아 90도 회전한 matrix를 출력한다.
 */

// Solution 1
const rotate = (matrix) => {
  // 리턴할 배열 변수 생성
  let newMatrix = [];

  // matrix 탐색
  for (let i = 0; i < matrix[0].length; i++) {
    // [j][i]로 출력하여 넣어줄 배열 변수 생성
    let rotatedArr = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      // 새로운 배열에 넣어준다.
      rotatedArr.push(matrix[j][i]);
    }
    // newMatrix에 넣어준다.
    newMatrix.push(rotatedArr);
  }

  return newMatrix;
};

// Solution 2 -> k번 회전
const rotateMatrix = (matrix, k = 1) => {
  // 빈 배열을 입력받은 경우
  if (matrix.length === 0) {
    return [];
  }

  // k번 회전
  for (let i = 0; i < k; i++) {
    matrix = rotate(matrix);
  }

  return matrix;
};

const rotate = (matrix) => {
  // 리턴할 배열 변수 생성
  let newMatrix = [];

  // matrix 탐색
  // 1 x 1 matrix를 고려하여 i는 matrix[0].length까지 탐색
  // matrix.length까지 탐색할 경우 가로 세로의 길이가 다른 matrix는 탐색할 수 없다.
  for (let i = 0; i < matrix[0].length; i++) {
    // [j][i]로 출력하여 넣어줄 배열 변수 생성
    let rotatedArr = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      // 새로운 배열에 넣어준다.
      rotatedArr.push(matrix[j][i]);
    }
    // newMatrix에 넣어준다.
    newMatrix.push(rotatedArr);
  }

  return newMatrix;
};
