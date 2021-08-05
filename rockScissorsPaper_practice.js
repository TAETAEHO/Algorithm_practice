/**
 * 2인 이상
 * n 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다.
 * 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.
 */

// Solution 1.
function rockScissorsPaper(rounds) {
  // rounds 설정
  rounds = rounds || 3;
  // return할 최종 배열 변수
  let result = [];
  // lookup table
  let rps = ["rock", "paper", "scissors"];

  // 재귀 함수 생성
  let recursive = (rounds, games) => {
    for (let i = 0; i < rps.length; i++) {
      let currentRps = rps[i];

      // base case
      if (rounds === 0) {
        result.push(games);
        return;
      }

      // 재귀
      recursive(rounds - 1, games.concat(currentRps));
    }
  };

  // 재귀 함수 호출 -> 경우의 수 초기값 []
  recursive(rounds, []);
  return result;
}

console.log(rockScissorsPaper(5));

// Solution 2.
function rockScissorsPaper(rounds) {
  rounds = rounds || 3;
  let result = [];
  // lookup tagble
  let rps = ["rock", "paper", "scissors"];

  let permutation = (rps, buckets) => {
    // base case
    if (buckets.length === rounds) {
      result.push(buckets);
      return;
    }

    for (let i = 0; i < rps.length; i++) {
      let curEl = rps[i];

      permutation(rps, buckets.concat(curEl));
    }
  };

  // 중복순열
  permutation(rps, []);
  return result;
}

console.log(rockScissorsPaper(5));
