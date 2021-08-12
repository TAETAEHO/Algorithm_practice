/**
 * M * N 배열 grid가 주어졌을 때, '1'은 땅을 의미하고 '0' 은 물을 의미한다
 * 주어진 2차원 배열에 존재하는 섬의 개수를 리턴
 */

const countIsland = (grid) => {
  // 빈 배열의 경우
  if (grid.length === 0) return 0;

  let M = grid.length;
  let N = grid[0].length;
  let cnt = 0;

  // finding Island function
  let findIsland = (row, col) => {
    // 유효성 검사
    if (row < 0 || col < 0 || row >= M || col >= N) return;
    if (grid[row][col] === "0") return;

    grid[row][col] = "0";

    findIsland(row - 1, col);
    findIsland(row + 1, col);
    findIsland(row, col - 1);
    findIsland(row, col + 1);
  };

  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      // 물인 경우
      if (grid[row][col] === "0") continue;

      cnt++;
      findIsland(row, col);
    }
  }
  return cnt;
};

console.log(
  countIsland([
    ["0", "1", "1", "1"],
    ["0", "1", "1", "1"],
    ["1", "1", "0", "0"],
  ])
);
