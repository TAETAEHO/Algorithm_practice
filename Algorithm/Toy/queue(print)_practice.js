function queuePrinter(bufferSize, capacities, documents) {
  /**
   * bufferSize : 인쇄작업 목록크기(number) -> 1<=size<=100
   * capacities : 최대 용량(number) -> <=100kib
   * documents : 배열 -> 1<=documents<=100
   */

  /*bufferSize = 2, capacities = 10, documents = [7, 4, 5, 6]이라고 가정함.*/

  let cnt = 0; // 시간변수(카운트) 생성
  let queue = []; // 버퍼사이즈를 확인하기 위한 큐 변수 생성
  let totalSum = 0; // documents에서 뽑은 프린트들의 총합을 나타낼 변수 생성

  // buffersize의 크기 만큼 큐에다가 0으로 채워넣는다.
  for (let i = 0; i < bufferSize; i++) {
    queue.push(0); // [0, 0]
  }

  // documents에서 프린트를 빼와서 그 프린트의 용량을 확인하기 위한 변수 생성
  let currentDocument = documents.shift(); // 7

  // queue 맨 앞에다가 currentDocument를 넣는다.
  queue.unshift(currentDocument); // [7, 0, 0]
  // queue 맨 뒤 요소는 제거한다.
  queue.pop(); // [7, 0]
  totalSum = totalSum + currentDocument; // 0 + 7 = 7

  cnt++; // 1초 증가

  // totalSum이 없을때까지 while문을 돌려준다.
  while (totalSum) {
    // totalSum을 확인한다. -> totalSum - queue.pop()
    totalSum = totalSum - queue.pop(); // 7 - 0 = 7 -> queue = [7]
    currentDocument = documents.shift(); // documents = [4, 5, 6] -> documents.shift() = 4

    // totalSum + currentDocument가 capacities보다 큰지 확인 -> 7 + 4 = 11
    if (totalSum + currentDocument <= capacities) {
      queue.unshift(currentDocument); // queue = [4, 0]
      totalSum = totalSum + currentDocument; // 0 + 4 = 4
    } else {
      documents.unshift(currentDocument); // documents = [5, 6] -> documents = [4, 5, 6]
      queue.unshift(0); // queue = [7] -> queue = [0, 7]
    }
    // 1초씩 시간 증가
    cnt++;
  }
  return cnt;
}
