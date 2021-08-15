/**
 * 프로그래머스 lv.2 - 카펫
 * Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
 * Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 *
 * 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 * 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
 */

// Solution
function carpet(brown, yellow) {
  let area = brown + yellow;

  // 가능한 카펫의 크기는 area의 약수들이 된다.
  // 가로 길이는 세로보다 크거나 같다.
  // height에 1이 있으면 yellow를 brown이 감싸지 못하기 때문에 1은 배제한다. -> 자기 자신은 제외하기 위해 2로 나눠 그 다음 큰 약수부터 따진다.
  for (let i = Math.floor(area / 2); i > 0; i--) {
    // 약수 아닌 것 걸러내기
    if (area % i !== 0) continue;

    let width = i;
    let height = area / i;

    // 세로 가로 길이를 2씩 줄여 나갔을 때 yellow와 같으면 그 세로 가로 값을 리턴한다.
    if ((width - 2) * (height - 2) === yellow) return [width, height];
  }
}

console.log(carpet(10, 2));
