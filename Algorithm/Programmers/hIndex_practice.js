/**
 * 프로그래머스 lv.2 - h-index
 * 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 * 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 *
 * 문제의 핵심
 * 1. array 내림차순
 * 2. h-index => index + 1 <= array[index]를 만족하는 가장 마지막 인덱스
 */

// Solution 1.
function hIndex(citations) {
  citations.sort((a, b) => b - a);
  let index = 0;

  while (index + 1 <= citations[index]) {
    index++;
  }

  return index;
}

// Solution 2.
function hIndex(citations) {
  citations.sort((a, b) => b - a);
  let cnt = 0;

  for (let i = 0; i < citations.length; i++) {
    if (i + 1 <= citations[i]) cnt++;
    else break;
  }

  return cnt;
}

console.log(hIndex([3, 0, 6, 1, 5]));
