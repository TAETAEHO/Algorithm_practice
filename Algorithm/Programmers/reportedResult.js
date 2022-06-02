/**
 * 프로그래머스 lv.1 - 신고 결과 받기
 * 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
 * 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
 * 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
 * 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
 * k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
 * 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
 *
 * 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때,
 * 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 */

// Solution
// function reportedResult(id_list, report, k) {
//   let withoutDupReport = [...new Set(report)]; // 중복 제거

//   let reporterARR = [];
//   let reporterOBJ = {};

//   let reporteeCnt = 0;
//   let reporteeARR = [];
//   let reporteeOBJ = {};

//   if (withoutDupReport.length < k) return [0, 0];

//   for (let i = 0; i < withoutDupReport.length; i++) {
//     let reporter = withoutDupReport[i].split(" ")[0];
//     let reportee = withoutDupReport[i].split(" ")[1];

//     reporteeOBJ = {
//       [reportee]: reporteeCnt,
//     };

//     reporterOBJ = {
//       [reporter]: reportee,
//     };

//     reporteeARR.push(reporteeOBJ);
//     reporterARR.push(reporterOBJ);

//     if (
//       Object.keys(reporteeARR[i]).toString() ==
//       Object.values(reporterARR[i]).toString()
//     ) {
//       // console.log("2222222222");
//     }
//   }

//   console.log(reporterARR);
//   console.log(reporteeARR);

//   return withoutDupReport;
// }

function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const reported_list = {};

  id_list.map((user) => {
    reported_list[user] = [];
  });

  report.map((user) => {
    const [user_id, reported_id] = user.split(" ");

    if (!reported_list[reported_id].includes(user_id)) {
      reported_list[reported_id].push(user_id);
    }
  });

  for (const key in reported_list) {
    if (reported_list[key].length >= k) {
      reported_list[key].map((user) => {
        result[id_list.indexOf(user)] += 1;
      });
    }
  }
  return result;
}

// solution(
//   ["con", "ryan"],
//   ["ryan con", "ryan con", "ryan con", "ryan con"],
//   3
// );

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
