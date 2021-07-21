/**
 * 카드를 입력받아 카드 배열의 요소 중에서 3가지를 조합하여 합한 숫자를 만든다.
 * 조합한 합 중에서 소수의 개수를 리턴한다.
 */

// Solution
function blackJack(cards) {
  // cards의 요수중에서 3가지로 조합할수 있는 경우의 수를 담을 변수를 생성한다.
  let combination = [];

  // cards를 탐색하면서 요소 3개를 조합한다.
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        // combination에 넣어준다.
        combination.push([cards[i], cards[j], cards[k]]);
      }
    }
  }
  console.log(combination);

  // 주어진 경우의 수 배열에서 배열의 요소끼리 합한다.
  let sumOfCase = combination.map((el) => {
    return el.reduce((val, cur) => val + cur);
  });
  console.log(sumOfCase);

  // 합 중에서 소수인 것만 필터링한다.
  let onlyPrimeNum = sumOfCase.filter((el) => isPrime(el));
  console.log(onlyPrimeNum);

  // onlyPrimeNum의 길이를 리턴한다.
  return onlyPrimeNum.length;
}

// 소수를 판별하기 위한 함수
const isPrime = (num) => {
  // 2는 소수다
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    // 나누어 떨어지는 경우는 소수가 아니다
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(blackJack([1, 2, 3, 4]));

// 소수 판별 함수 2
// const isPrime = (num) => {
//   // 2는 소수다
//   if (num === 2) {
//     return true;
//   }

//   if (num % 2 === 0) {
//     return false;
//   }

//   for (let i = 3; i < num; i++) {
//     // 나누어 떨어지는 경우는 소수가 아니다
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
