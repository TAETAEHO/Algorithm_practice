/**
 * 프로그래머스 lv.1 - 모의고사
 */

// Solution 1 -> 불필요한 for문 및 연산으로 시간초과
function bruteForce(answers) {
  /*
    1번 : 순서대로
    2번 : 2번먼저 1, 3, 4, 5
    3번 : 3 3이 먼저 그 다음에 11 22 44 55
    */
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  // 1번 수포자
  for (let i = 0; i < answers.length; i++) {
    arr1.push([1, 2, 3, 4, 5]);
  }

  // 2번 수포자
  for (let i = 0; i < answers.length; i++) {
    arr2.push([2, 1, 2, 3, 2, 4, 2, 5]);
  }

  // 3번 수포자
  for (let i = 0; i < answers.length; i++) {
    arr3.push([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  }

  let result1 = [];
  let result2 = [];
  let result3 = [];

  for (let i = 0; i < answers.length; i++) {
    if (arr1.flat(Infinity)[i] === answers[i]) {
      result1.push(answers[i]);
    }

    if (arr2.flat(Infinity)[i] === answers[i]) {
      result2.push(answers[i]);
    }

    if (arr3.flat(Infinity)[i] === answers[i]) {
      result3.push(answers[i]);
    }
  }

  // 가장 긴거 뽑아내기
  let longest = Math.max(result1.length, result2.length, result3.length);
  let result = [];

  if (result1.length === longest) result.push(1);
  if (result2.length === longest) result.push(2);
  if (result3.length === longest) result.push(3);

  return result;
}

// Solution 2
function bruteForce(answers) {
  /*
    1번 : 순서대로
    2번 : 2번먼저 1, 3, 4, 5
    3번 : 3 3이 먼저 그 다음에 11 22 44 55
    */
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 정답들만 필터링
  let filteredArr1 = answers.filter((el, idx) => el === arr1[idx % 5]).length;
  let filteredArr2 = answers.filter((el, idx) => el === arr2[idx % 8]).length;
  let filteredArr3 = answers.filter((el, idx) => el === arr3[idx % 10]).length;

  // 가장 정답이 많은거 구하기
  let max = Math.max(filteredArr1, filteredArr2, filteredArr3);
  let result = [];

  if (max === filteredArr1) result.push(1);
  if (max === filteredArr2) result.push(2);
  if (max === filteredArr3) result.push(3);

  return result;
}

console.log(bruteForce([1, 2, 3, 4, 5]));
