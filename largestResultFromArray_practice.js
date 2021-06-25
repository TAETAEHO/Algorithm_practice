/*
1. 정수를 요소로 갖는 배열을 입력받아 요소 3개를 곱해 최대값을 출력해야한다.
*/

// Solution
function largestResult(arr) {
  // 배열의 요소로 양수만 있는 경우 소팅해서 제일 큰 수 3개를 차례대로 곱해주면 된다.
  // 배열의 요소로 음수가 2개 있는 경우 소팅해서 첫번째 요소랑 비교를 해서 알맞게 출력해준다.

  // arr을 소팅한다.
  arr = arr.sort((a, b) => b - a);

  // 소팅해서 첫번째 요소가 양수, 두번째 요소가 음수인 경우
  if (arr[0] > 0 && arr[1] < 0) {
    // 첫번째 요소와 끝에서 두번째 첫번째 요소를 곱해주면 된다.
    return arr[0] * arr[arr.length - 2] * arr[arr.length - 1];
  }
  // 소팅해서 첫번째 요소가 양수, 마지막 두번째 요소가 음수이고 첫번째 요소보다 큰 경우
  if (
    arr[0] > 0 &&
    arr[arr.length - 2] < 0 &&
    arr[0] < Math.abs(arr[arr.length - 2])
  ) {
    // 마찬가지로 첫번째 요소와 끝에 두개를 곱해주면 된다.
    return arr[0] * arr[arr.length - 2] * arr[arr.length - 1];
  }

  // 나머지 경우는 그냥 차례대로 곱해주면 된다.
  return arr[0] * arr[1] * arr[2];
}
