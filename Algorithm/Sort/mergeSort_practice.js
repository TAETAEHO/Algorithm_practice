/**
 * mergeSort 연습
 * Divide and Conquer 기법
 */

// Solution
const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // mid, left, right 생성
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // 재귀
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // 정렬해서 담을 배열 변수
  let result = [];
  // left, right 인덱스
  let leftIdx = 0;
  let rightIdx = 0;

  // left, right인덱스가 left, right길이보다 작을때까지 무한반복
  while (leftIdx < left.length && rightIdx < right.length) {
    // leftIdx의 요소가 rightIdx의 요소보다 작을 때
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  // while문 수행까지의 결과를 합쳐준다.
  return result.concat(left.slice(leftIdx), right.slice(rightIdx));
};

// console.log(mergeSort([4, 7, 4, 3, 9, 1, 2]));
