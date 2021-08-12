/**
 * 짐 크기를 나타내는 배열을 입력받아 모든 짐을 나르기 위해 limit을 넘지 않는 필요한 박스의 개수 구하기
 * 짐은 최대 2개 넣는다.
 */

// Solution
const movingStuff = (stuff, limit) => {
  // stuff 배열을 오름차순 정렬한다.
  stuff.sort((a, b) => a - b);

  // 박스의 개수 변수 생성
  let cnt = 0;
  // stuff 배열의 양쪽 끝을 나타내기 위한 leftIdx, rightIdx 변수 생성
  let leftIdx = 0;
  let rightIdx = stuff.length - 1;

  while (leftIdx < rightIdx) {
    // leftIdx의 요소와 rightIdx의 요소의 합이 limit보다 큰지 작은지 확인
    if (stuff[leftIdx] + stuff[rightIdx] <= limit) {
      cnt++;

      // 자리이동
      leftIdx++;
      rightIdx--;
    } else {
      // rightIdx 자리이동
      rightIdx--;
    }
  }
  // 배열의 길이에서 cnt 뺀 값을 리턴
  return stuff.length - cnt;
};
