/*
1. 버블 정렬을 연습한다.
    1-1. 버블 정렬 :  첫번째 요소가 두번째 요소보다 크면 자리를 바꾸고 두번째 요소가 세번째 요소보다 크면 자리를 바꾸고.... 반복
*/

// Solution 1. sort() 메서드 사용
function bubbleSort(arr) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr;
}

// Solution 2. 이중 포문
function bubbleSort(arr) {
  let tmp = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[j];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

// Solution 3. 이중포문 -> 정렬이 일어나지 않은 경우 바로 arr 리턴
function bubbleSort(arr) {
  let tmp = 0;

  for (let i = 0; i < arr.length; i++) {
    let cnt = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // 정렬이 일어났으므로 cnt 하나 증가
        cnt++;
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    // 정렬이 일어나지 않은 경우(cnt === 0) 바로 arr return
    if (cnt === 0) {
      return arr;
    }
  }

  return arr;
}
