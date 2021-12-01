/**
 * 프로그래머스 lv.2 - 기능개발
 */

// Solution
function funcDevelopment(processes, speeds) {
  // 개발일 변수 생성
  let publishDay = [];
  let workDay = 0;

  for (let i = 0; i < processes.length; i++) {
    workDay = Math.ceil((100 - processes[i]) / speeds[i]);

    // workDay 집어넣기
    publishDay.push(workDay);
  }

  // 최종 리턴한 기능 배포 변수 생성
  let result = [];

  // 개발일 변수의 길이가 0 보다 클때까지 반복
  while (publishDay.length > 0) {
    // publishDay의 0번째 인덱스의 요소보다 큰 값을 같은 요소의 인덱스 찾기
    let maxNumIdx = publishDay.findIndex((el) => publishDay[0] < el);

    // 없는 경우
    if (maxNumIdx === -1) {
      // publishDay의 길이를 result에 넣고 break
      result.push(publishDay.length);
      break;
    } else {
      // 있는 경우 maxNumIdx를 result에 집어넣고 그만큼 자르기
      result.push(maxNumIdx);
      // slice() -> immutable
      publishDay.splice(0, maxNumIdx);
    }
  }
  return result;
}

console.log(funcDevelopment([93, 30, 55], [1, 30, 5]));
