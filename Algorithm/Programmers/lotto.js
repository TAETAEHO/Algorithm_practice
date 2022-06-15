/**
 * 프로그래머스 lv.1 - 로또의 최고 순위와 최저 순위
 * 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다.
 * 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
 * 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
 * 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다.
 * 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.
 *
 * 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
 * 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
 */

// Solution -> edge case 해결 못함
// function solution(lottos, win_nums) {
//   const result = [];

//   lottos.sort((a, b) => a - b);
//   win_nums.sort((a, b) => a - b);

//   for (let i = 0; i < lottos.length; i++) {
//     if (lottos[i] !== 0 && lottos[i] !== win_nums[i]) lottos.splice(i, 1);
//     i++;
//   }

//   let filteredLottos = lottos.filter((val) => val !== 0);

//   if (filteredLottos.length !== 0) {
//     result.push(7 - lottos.length, 7 - filteredLottos.length);
//   } else {
//     result.push(7 - lottos.length, 6);
//   }

//   return result;
// }

function solution2(lottos, win_nums) {
  const highestRank = [];
  const lowestRank = [];
  const result = [];

  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      highestRank.push(lottos[i]);
      continue;
    }

    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        highestRank.push(lottos[i]);
        lowestRank.push(lottos[i]);
      }
    }
  }

  if (lowestRank.length !== 0) {
    result.push(7 - highestRank.length, 7 - lowestRank.length);
  } else if (highestRank.length === 0 && lowestRank.length === 0) {
    result.push(6, 6);
  } else {
    result.push(7 - highestRank.length, 6);
  }

  return result;
}

function solution3(lottos, win_nums) {
  // look-up table
  const ranks = [6, 6, 5, 4, 3, 2, 1];

  const minCount = lottos.filter((el) => win_nums.includes(el)).length;
  const zeroCount = lottos.filter((el) => el === 0).length;

  let maxCount = minCount + zeroCount;

  return [ranks[maxCount], ranks[minCount]];
}

// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
// solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution2([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
