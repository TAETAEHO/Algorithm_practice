/**
 * 프로그래머스 lv.1 - 두 개 뽑아서 더하기
 * 정수 배열 numbers가 주어집니다.
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
 * 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
  let sum = 0;
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];

      if (!result.includes(sum)) result.push(sum);
    }
  }

  return result.sort((a, b) => a - b);
}

function solution2(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  let sum = [...new Set(result)];
  return sum.sort((a, b) => a - b);
}

solution2([2, 1, 3, 4, 1]); // [2,3,4,5,6,7]
// [1, 1, 2, 3, 4]
