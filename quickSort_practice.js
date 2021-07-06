/**
 * 퀵소트 연습하기
 * 퀵소트 : 입력받은 배열에서 기준이 되는 요소를 정하고 그 기준이 되는 요소보다 작은 요소들은 왼쪽, 큰 요소들은 오른쪽에 배치하면서 정렬한다.
 */

// Solution 1. -> 시간복잡도를 고려하지 않은 구현
let quickSort = (arr) => {
  // 기준이 되는 요소 정하기
  let mid = [arr[0]];
  // 기준이 되는 요소의 왼쪽, 오른쪽 정하기
  let left = [];
  let right = [];

  // arr 탐색 -> 기준이 되는 요소를 arr[0]번째로 세팅했으니까 1번째 인덱스부터 탐색
  for (let i = 1; i < arr.length; i++) {
    // 작은 요소들은 left 배열에 넣기
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else if (arr[i] > mid) {
      // 큰 요소들은 right 배열에 넣기
      right.push(arr[i]);
    } else {
      mid.push(arr[i]);
    }
  }

  // left, right, mid배열을 가지고 재귀적으로 계속 정렬해준다.
  return quickSort(left).concat(mid, quickSort(right));
};

// Solution 2. -> In Place 방법으로 구현
let quickSort = (arr, left = 0, right = arr.length - 1) => {
  let mid = Math.floor((left + right) / 2);
  // 기준이 되는 요소 정하기(가운데)
  let pivot = arr[mid];

  // 재귀적으로 divide function을 돌려서 left를 담아낼 변수 생성
  let partition = divide(arr, left, right, pivot);

  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);

  return arr;
};

// left, right, pivot을 기준으로 재귀적으로 수행될 함수 생성
function divide(arr, left, right, pivot) {
  // left가 right보다 작거나 같을때까지 반복
  while (left <= right) {
    // left의 요소가 mid요소보다 작으면 이동
    while (arr[left] < pivot) {
      left++;
    }

    // right의 요소가 mid요소보다 크면 이동
    while (arr[right] > pivot) {
      right--;
    }

    // pivot보다 큰 값이 나타날때까지 오른쪽으로 이동하면서 자리바꿈 -> left의 위치가 right보다 커지면 자리를 바꿀수가 없다.
    if (left <= right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;

      left++;
      right--;
    }
  }
  return left;
}
