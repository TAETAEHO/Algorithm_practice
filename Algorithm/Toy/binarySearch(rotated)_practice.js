/**
 * 이진 탐색 트리(rotated)를 연습한다.
 * 입력받은 배열은 부분적으로 오름차순 정렬 된 배열이다. -> [4, 5, 6, 0, 1, 2, 3]
 */

// Solution 1. for문을 이용한 풀이(시간복잡도 O(n))
function rotatedArraySearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  // target이 없는 경우
  return -1;
}

// Solution 2. -> indexOf 사용
function rotatedArraySearch(arr, target) {
  if (!arr.includes(target)) {
    return -1;
  }

  return arr.indexOf(target);
}

// Solution 3. binary search 사용(시간복잡도 O(logN))
function rotatedArraySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 내림 or 올림
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    // arr[mid]가 arr[left]보다 큰 경우
    if (arr[left] < arr[mid]) {
      // target은 arr[left] 보다 크거나 같고 arr[mid]보다 작다.
      if (target >= arr[left] && target < arr[mid]) {
        // right를 이동시킨다.
        right = mid - 1;
      } else {
        // left를 이동시킨다.
        left = mid + 1;
      }
    } else {
      // target은 arr[mid] 보다 크고 arr[right]보다 작거나 같다.
      if (target > arr[mid] && target <= arr[right]) {
        // left를 이동시킨다.
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  // target이 없는 경우
  return -1;
}
