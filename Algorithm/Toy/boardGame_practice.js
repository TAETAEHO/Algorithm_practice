/**
 * 정사각형의 보드와 문자열 operation을 입력받아서 해당칸을 지나가면서 획득한 숫자의 합을 구하는 문제
 */

// Solution 1.
const boardGame = (board, operation) => {
  // board의 크기를 나타내기 위한 변수 생성
  let boardLen = board.length;
  // (x, y) 좌표 변수 생성
  let X = 0;
  let Y = 0;
  // 최종적으로 리턴할 숫자의 합을 나타내기 위한 변수 생성
  let sum = 0;

  for (let i = 0; i < operation.length; i++) {
    // operation이 U D L R인 경우에 맞게 값 변경
    if (operation[i] === "U") {
      Y--;
    } else if (operation[i] === "D") {
      Y++;
    } else if (operation[i] === "L") {
      X--;
    } else if (operation[i] === "R") {
      X++;
    }

    // (x,y)가 범위를 벗어난 경우 체크
    if (!isValid(Y, X, boardLen)) {
      return "OUT";
    }

    // sum
    sum += board[Y][X];
  }
  return sum;
};

// 범위를 벗어난 경우를 나타내기 위한 함수
const isValid = (y, x, boardLen) => {
  if (y > boardLen || y < 0 || x > boardLen || x < 0) {
    return false;
  } else {
    return true;
  }
};

// Solution 2. -> with look-up table
const boardGame = (board, operation) => {
  // board의 크기를 나타내기 위한 변수 생성
  let boardLen = board.length;

  // look-up table
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  // (x, y) 좌표 변수 생성
  let X = 0;
  let Y = 0;
  // 최종적으로 리턴할 숫자의 합을 나타내기 위한 변수 생성
  let sum = 0;

  for (let i = 0; i < operation.length; i++) {
    let [dY, dX] = DIR[operation[i]];

    Y += dY;
    X += dX;

    // (x,y)가 범위를 벗어난 경우 체크
    if (!isValid(Y, X, boardLen)) {
      return "OUT";
    }

    // sum
    sum += board[Y][X];
  }
  return sum;
};

// 범위를 벗어난 경우를 나타내기 위한 함수
const isValid = (y, x, boardLen) => {
  if (y > boardLen || y < 0 || x > boardLen || x < 0) {
    return false;
  } else {
    return true;
  }
};
