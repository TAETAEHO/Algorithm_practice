/**
 * 밥은 한 가지이며 반찬은 다수일 때, 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수를 배열에 담아 리턴하세요.
 * 멱집합
 */

// Solution
function missHouseMeal(sideDishes) {
  let result = [[]];
  // lexical sort
  sideDishes.sort();

  // recursive
  let recursive = (result, target) => {
    let copiedResult = [...result];

    for (let i = 0; i < copiedResult.length; i++) {
      let curEl = copiedResult[i].concat(target);
      result.push(curEl);
    }
  };

  for (let i = 0; i < sideDishes.length; i++) {
    // 중복이 없는경우
    if (!result.includes(sideDishes[i])) recursive(result, sideDishes[i]);
  }
  // lexical sort
  return result.sort();
}

console.log(missHouseMeal(["eggroll", "kimchi", "fishSoup"]));
