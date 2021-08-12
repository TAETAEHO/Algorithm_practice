/*
1. 배열과 정수를 입력받아 정수가 배열에 해당하는 인덱스를 리턴한다.
    1-1. target이 배열에 없는 경우 -1을 리턴
*/

// Solution 1. for문을 이용한 문제해결 -> 시간복잡도 O(N)
function(arr, target) {
    for(let i=0; i<arr.length; i++) {
        if(target === arr[i]) {
            return i;
        }
    }
    return -1;
}

// Solution 2. 이진 탐색 트리를 이용한 문제해결 -> 시간복잡도 O(logN)
function(arr, target) {
    // 이진 탐색 트리를 사용하기 위해서 정렬이 필요하다.
    arr = arr.sort((a, b) => a-b);

    // 배열의 0번째 인덱스를 가리키는 변수
    let left = 0;
    // 배열의 마지막 인덱스를 가리키는 변수
    let right = arr.length -1;

    // right가 left보다 크거나 같을때까지 while문을 수행한다.
    while(left <= right) {
        // 배열의 가운데를 가리키는 변수(내림 or 올림)
        let mid = Math.floor((left + right) / 2);

        // target이 arr[mid]와 같으면 mid 리턴
        if(target === arr[mid]) {
            return mid;
        }

        // target이 arr[mid]보다 큰 경우
        if(target > arr[mid]) {
            left = mid + 1;
        }

        // target이 arr[mid]보다 작은 경우
        if(target < arr[mid]) {
            right = mid - 1;
        }
    }
    return -1;
}