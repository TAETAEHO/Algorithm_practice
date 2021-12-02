/**
 * 정수를 요소로 갖는 배열과 특정 구간을 입력받아, 해당 구간 내에서 최소값을 리턴해야 합니다.
 * const arr = [1, 3, 2, 7, 9, 11];
 * const mins = rangeMinimum(arr, [
 * [1, 4],
 * [0, 3],
 * ]);
 */

// Solution 1.
function rangeMinimum(arr, ranges) {
  return ranges.map((range) => {
    // range의 start, end 값 설정
    const [start, end] = range;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = start; i <= end; i++) {
      if (min > arr[i]) min = arr[i];
    }
    return min;
  });
}

// Solution 2. -> 이중포문으로 구현
function rangeMinimum(arr, ranges) {
  let result = [];

  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    let min = Number.MAX_SAFE_INTEGER;

    for (let j = start; j <= end; j++) {
      if (min > arr[j]) min = arr[j];
    }

    result.push(min);
  }
  return result;
}

console.log(
  rangeMinimum(
    [1, 3, 2, 7, 9, 11],
    [
      [1, 4],
      [0, 3],
    ]
  )
);
