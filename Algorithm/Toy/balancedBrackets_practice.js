/**
 * 문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.
 * 문제 포인트 : stack
 * 괄호의 종류는 (, )만 고려합니다.
 * 괄호는 먼저 열리고((), 열린만큼만 닫혀야()) 합니다.
 * 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
 */

// Solution -> stack에 괄호들을 넣어두면서 열린괄호, 닫힌괄호를 비교하여 true, false값을 리턴한다.
const balancedBrackets = (str) => {
  let stack = [];
  // lookup table
  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  if (str === "") {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    if (str.length > 1) {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        stack.push(str[i]);
      } else {
        const topEl = stack.pop();
        if (BRACKETS[topEl] !== str[i]) return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(balancedBrackets("[](){}"));
