/**
 *  target 금액을 훔칠 수 있는 방법의 경우의 수를 구한다.
 *  target 금액과 금고에 있는 돈의 종류 type 을 입력받아, target 을 훔칠 수 있는 방법의 수를 리턴해라
 */

// Solution -> knapsack
function knapsack(target, type) {
  let flag = new Array(target + 1).fill(0);
  type.sort((a, b) => a - b);

  type.forEach((el) => {
    flag[el]++;

    for (let i = el + 1; i < flag.length; i++) {
      if (flag[i - el] > 0) flag[i] += flag[i - el];
    }
  });
  return flag[target];
}

console.log(knapsack(50, [10, 20, 50]));
