/**
 * 문자열을 입력받아 그 문자열로 구성될 수 있는 모든 부분집합을 구한다.
 * 멱집합의 개념
 * 배열 형태로 리턴한다.
 */

function powerSet(str) {
  // str 문자열을 배열로 만들어주고 소팅한다.
  let arr = str.split("").sort();
  // 최종적으로 리턴할 배열 변수를 만들어준다.
  let result = [];

  // result와 arr[i]를 받아서 부분집합을 만들 함수를 만들어준다.
  let subset = (result, target) => {
    // result 배열을 복사한다.
    // result.slice()를 사용해도 무방하다.
    let copy = [...result];

    // copy를 탐색한다.
    for (let i = 0; i < copy.length; i++) {
      // copy[i]에 target(arr[i]) 문자열을 합쳐준다.
      copy[i] += target;
      // 합쳐진 copy[i]를 result에 넣어준다.
      result.push(copy[i]);
    }
    return result;
  };

  // result를 탐색한다.
  for (let i = 0; i < arr.length; i++) {
    // result에 중복값이 있으면 안되니까 중복값이 없는 경우만 for문을 돌려준다.
    if (!result.includes(arr[i])) {
      // 재귀적으로 돌려준다.
      subset(result, arr[i]);
    }
  }
  // 최종적으로 result를 소팅해서 리턴한다.
  return result.sort();
}
