/**
 * 세로와 가로의 길이가 각각 M, N
 * 1은 장애물, 0은 갈 수 있는 길
 *  로봇의 위치와 목표 지점이 함께 주어질 경우, 로봇이 목표 지점까지 도달하는 데 걸리는 최소 시간을 리턴해야 합니다.
 *
 * 큐로 문제를 접근한다.
 */

// Solution 1
const robotPath = (room, src, dst) => {
  // 지나왔던 길인지 아닌지 판별하는 변수
  const visited = new Array(room.length).fill(0).map(() => new Array());
  // 1 -> 카운트(시간)
  let queue = [[...src, 1]];
  // 세로, 가로 길이
  let M = room.length - 1;
  let N = room[0].length - 1;
  let DIR = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    let result = queue.shift();
    let [Y, X, cnt] = result;

    for (let i = 0; i < 4; i++) {
      let dY = Y + DIR[i][0];
      let dX = X + DIR[i][1];

      // 유효성 검사
      if (dY < 0 || dX < 0 || dY > M || dX > N) continue;
      if (room[dY][dX] === 1) continue;
      if (visited[dY][dX]) continue;

      visited[dY][dX] = 1;
      queue.push([dY, dX, cnt + 1]);

      if (dY === dst[0] && dX === dst[1]) return result[2];
    }
  }
};

// Solution 2
const robotPath = (room, src, dst) => {
  // 출발지
  room[src[0]][src[1]] = 1;

  // 세로, 가로 길이
  let M = room.length - 1;
  let N = room[0].length - 1;
  let DIR = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 유효성 검사
  let isValid = (y, x) => y >= 0 && y <= M && x >= 0 && x <= N;

  let queue = [src];

  // 목적지까지 움직이는 함수
  let moveDirection = (curDir) => {
    const [Y, X] = curDir;

    // 상하좌우
    for (let i = 0; i < 4; i++) {
      let dY = Y + DIR[i][0];
      let dX = X + DIR[i][1];

      // 유효성 검사
      if (isValid(dY, dX) && room[dY][dX] === 0) {
        queue.push([dY, dX]);

        room[dY][dX] = room[Y][X] + 1;
      }
    }
  };

  while (queue.length > 0) {
    let curDir = queue.shift();
    moveDirection(curDir);
  }

  return room[dst[0]][dst[1]] - 1;
};

console.log(
  robotPath(
    [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0],
    ],
    [4, 2],
    [2, 2]
  )
);
