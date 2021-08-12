/**
 * 최대힙 구현하기
 */

// Solution
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // 왼쪽 자식의 인덱스 : (부모의 인덱스) * 2
  // 오른쪽 자식의 인덱스 : (부모의 인덱스) * 2 + 1
  // 완전이진트리니까 오른쪽 자식까지 있어야한다.
  // idx = x * 2 + 1
  // x * 2 = idx - 1
  // x = (idx - 1) / 2

  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);

  // 자식노드, 부모노드 구하기
  let curIdx = heap.length - 1;
  let parentIdx = getParentIdx(curIdx);

  // 최대힙의 성질 -> 부모노드의 크기는 자식노드의 크기보다 크거나 같다.
  while (parentIdx >= 0 && heap[curIdx] > heap[parentIdx]) {
    swap(curIdx, parentIdx, heap);

    curIdx = parentIdx;
    parentIdx = getParentIdx(curIdx);
  }

  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
