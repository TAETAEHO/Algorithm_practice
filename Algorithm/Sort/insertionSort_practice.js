/**
 * 삽입정렬을 연습한다.
 * 삽입정렬 -> 항상 두번째 요소를 왼쪽요소와 비교하면서 시작
 */

// Solution 1.
let insertionSort = (arr) => {
  // arr을 탐색한다.
  // 삽입정렬은 해당 인덱스와 왼쪽에 있는 인덱스를 비교하기 때문에 i는 1부터 시작한다.
  for (let i = 1; i < arr.length; i++) {
    // 현재 인덱스의 요소를 가리키는 변수 생성
    let curEl = arr[i];
    // 현재 인덱스의 왼쪽에 위치한 인덱스를 나타내는 변수 생성
    let left = i - 1;

    // left가 0 이상이거나 arr[left]가 curEl보다 큰 경우 while을 돌려주면서 정렬시킨다.
    while (left >= 0 && arr[left] > curEl) {
      // 자리바꿈
      arr[left + 1] = arr[left];
      arr[left] = curEl;
      curEl = arr[left];
      left--;
    }
  }

  return arr;
};

// Solution 2.
let insertionSort = (arr) => {
  // arr을 탐색한다.
  // 삽입정렬은 해당 인덱스와 왼쪽에 있는 인덱스를 비교하기 때문에 i는 1부터 시작한다.
  for (let i = 1; i < arr.length; i++) {
    // 현재 인덱스의 요소를 가리키는 변수 생성
    let curEl = arr[i];
    // 현재 인덱스의 왼쪽에 위치한 인덱스를 나타내는 변수 생성
    let left = i - 1;

    // left가 0 이상이거나 arr[left]가 curEl보다 큰 경우 while을 돌려주면서 정렬시킨다.
    while (left >= 0 && arr[left] > curEl) {
      // 자리바꿈
      arr[left + 1] = arr[left];
      left--;
    }
    // while문을 타게 되면 left는 항상 -1이 되어서 빠져나오기 때문에 arr[left + 1]은 arr[0]이 된다.
    arr[left + 1] = curEl;
  }
  // 정렬 된 arr 리턴
  return arr;
};

// Solution 3. -> callback.
let insertionSort = (arr, callback = (item) => item) => {
  // 삽입정렬은 해당 인덱스와 왼쪽에 있는 인덱스를 비교하기 때문에 i는 1부터 시작한다.
  for (let i = 1; i < arr.length; i++) {
    // 현재 인덱스의 요소를 가리키는 변수 생성
    let curEl = arr[i];
    // 현재 인덱스의 왼쪽에 위치한 인덱스를 나타내는 변수 생성
    let left = i - 1;

    // left가 0 이상이거나 arr[left]가 curEl보다 큰 경우 while을 돌려주면서 정렬시킨다.
    while (callback(left) >= 0 && callback(arr[left]) > callback(curEl)) {
      // 자리바꿈
      arr[left + 1] = arr[left];
      left--;
    }
    // while문을 타게 되면 left는 항상 -1이 되어서 빠져나오기 때문에 arr[left + 1]은 arr[0]이 된다.
    arr[left + 1] = curEl;
  }

  return arr;
};
