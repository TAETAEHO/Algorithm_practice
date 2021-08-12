/*
1. 두 배열(a, b)를 입력 받아 b가 a의 부분집합인지 확인
*/

// Solution 1
function isSubsetOf(a, b) {
  // 부분집합 여부를 담아줄 변수 선언
  let subset = false;

  // 이중포문으로 a, b 탐색
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      // b랑 a랑 같은 요소가 있는지 확인한다.
      if (b[i] === a[j]) {
        // 같은게 있으면 subset은 true
        subset = true;
        // true이면 빠져나온다.
        break;
      } else {
        // 없으면 subset은 false
        subset = false;
      }
    }
  }
  // 최종 subset을 리턴
  return subset;
}

// Solution 2. every 메서드 사용
function isSubsetOf(a, b) {
  /*
    return b.every(el => b.includes(el));
    */

  return b.every((el) => {
    if (a.includes(el)) {
      return true;
    } else {
      return false;
    }
  });
}

// Solution 3. 오름차순으로 소팅 후 비교
function isSubsetOf(a, b) {
  // 부분집합 여부를 담아줄 변수 선언
  let subset = false;

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  // 이중포문으로 a, b 탐색
  // 오름차순으로 소팅한 상태이니까 a는 b부터 탐색한다.
  for (let i = 0; i < b.length; i++) {
    for (let j = i; j < a.length; j++) {
      // b랑 a랑 같은 요소가 있는지 확인한다.
      if (b[i] === a[j]) {
        // 같은게 있으면 subset은 true
        subset = true;
        // true이면 빠져나온다.
        break;
      } else {
        // 없으면 subset은 false
        subset = false;
      }
    }
  }
  // 최종 subset을 리턴
  return subset;
}
