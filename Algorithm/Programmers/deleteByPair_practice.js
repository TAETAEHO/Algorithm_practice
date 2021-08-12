/**
 * 프로그래머스 lv.2 - 짝지어 제거하기
 */

// Solution
const deleteByPair = (alphabet) => {
  // stack 생성
  let stack = [];

  // alphabet 문자열 탐색
  for (let i = 0; i < alphabet.length; i++) {
    // 스택이 비어있거나 스택의 마지막 요소가 i번째 요소가 같지 않은 경우 i번째 요소를 stack에 넣어준다.
    if (stack.length === 0 || stack[stack.length - 1] !== alphabet[i]) {
      stack.push(alphabet[i]);
    } else {
      stack.pop();
    }
  }

  // 스택이 비어있으면 1, 아니면 0 리턴
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
};

// failed Solution
// function solution(s) {
//   let arr = s.split("");

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 2);
//     }
//   }

//   if (arr[0] === arr[1]) {
//     arr.splice(0);
//   }

//   if (arr.length === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
