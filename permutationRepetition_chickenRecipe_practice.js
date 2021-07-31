/**
 * 새로운 치킨 소스 레시피
 * 중복이 없는 경우의 수 리턴
 * N 가지의 재료 중에 단 M 가지만을 사용하여 조합한 모든 경우의 수 중 하나이다.
 * 재료는 0과 1로만 이루어진 숫자로 암호화가 되어 있고, 항상 1로 시작하며 복호화를 할 수 없다.
 * 단, 0이 3개 이상인 재료는 상한 재료이기 때문에 제외한다.
 * 재료의 순서에 따라 맛이 달라지기 때문에, 재료를 넣는 순서가 다르다면 다른 레시피이다.
 *
 * Number.prototype.toString() : toString() 메서드는 특정 진수로 객체를 표현한 문자열을 반환
 * String() - 문자로 형변환하여 반환
 */

function newChickenRecipe(stuffArr, choiceNum) {
  // stuffArr에서 0이 3개이상인 요소 삭제
  for (let i = 0; i < stuffArr.length; i++) {
    if (checkZeroCnt(stuffArr[i])) {
      stuffArr.splice(stuffArr.indexOf(stuffArr[i]), 1);
      // splice는 mutable하기 떄문에 splice가 일어난 경우 i--를 해줘서 전체 배열안에 요소를 탐색 할 수 있게 해준다.
      i--;
    }
  }

  // 경우의 수를 담을 변수
  let result = [];

  // 재귀
  let permutation = (stuffArr, bucket) => {
    // base case
    if (bucket.length === choiceNum) {
      result.push(bucket);
      return;
    }

    for (let i = 0; i < stuffArr.length; i++) {
      let curEl = stuffArr[i];
      let restStuffArr = [...stuffArr.slice(0, i), ...stuffArr.slice(i + 1)];

      permutation(restStuffArr, bucket.concat(curEl));
    }
  };

  // 재귀 -> 중복불가 순열, bucket 초기값 = []
  permutation(stuffArr, []);
  return result;
}

// 0의 갯수에 따른 true, false값을 리턴하는 함수
function checkZeroCnt(num) {
  let str = String(num);
  let cnt = 0;

  for (let char of str) {
    if (char === "0") {
      cnt++;
    }

    if (cnt >= 3) {
      return true;
    }
  }
  return false;
}

console.log(newChickenRecipe([1, 10, 1100, 1111], 2));
