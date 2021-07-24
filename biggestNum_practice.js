/**
 * 프로그래머스 lv.2 - 가장 큰 수
 */

// Solution
function biggestNum(numbers) {
  // numbers안에 있는 요소들을 문자열화
  let stringEl = numbers.map((el) => el.toString());

  // 문자열로 합쳐 서로 비교해서 정렬한다.
  // '3', '30'의 경우 -> b + a = '303', a + b = '330'
  // 303 - 330 < 0 이므로 (a + b)를 (b + a)앞에 위치시킨다.
  let arr = stringEl.sort((a, b) => b + a - (a + b));

  // 문자열 형태로 리턴 -> edge case 걸러준다.
  return arr[0] === "0" ? "0" : arr.join("");
}

console.log(biggestNum([6, 10, 2]));
