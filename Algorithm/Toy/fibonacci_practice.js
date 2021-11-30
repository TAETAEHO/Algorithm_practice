/*
1. 피보나치 수열 연습 
*/

// Solution 1. 재귀함수를 이용한 피보나치 수열
function fibonacci(num) {
  // num이 2보다 작으면 num을 리턴한다. -> 피보나치 0번째 수는 0, 1번째 수는 1
  if (num < 2) return num;

  // f(n) = f(n-1) + f(n-2)
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Solution 2. for문을 이용한 피보나치 수열
function fibonacci(num) {
  // num이 0이면 0을 리턴한다.
  if (num === 0) return 0;

  // 초기값 설정 f(n) = f(n-1) + f(n-2)
  let preNum = 0;
  let currentNum = 1;
  let fiboNum = 0;

  // 0번째 1번째 수는 이미 세팅한 상태이니 2번째부터 시작한다.
  for (let i = 2; i <= num; i++) {
    fiboNum = currentNum + preNum;
    preNum = currentNum;
    currentNum = fiboNum;
  }

  // 최종 fiboNum을 리턴
  return fiboNum;
}

// Solution 3. 피보나치 일반항을 이용한 피보나치 수열
function fibonacci(num) {
  let sqrt_5 = 5 ** (1 / 2);
  let result = Math.floor(
    (1 / sqrt_5) * (((1 + sqrt_5) / 2) ** num - ((1 - sqrt_5) / 2) ** num)
  );

  return result;
}

// Solution 4. Dynamic Programming을 이용한 피보나치 수열
function fibonacci(num) {
  // memo 배열 변수 선언
  let memo = [];

  const fibo = (num) => {
    // num이 2보다 작으면 num 리턴
    if (num < 2) {
      return num;
    } else {
      // memo 배열에 값이 있는지 확인한다.
      if (memo[num] !== undefined) {
        // 값이 있으면 memo[num] 리턴
        return memo[num];
      } else {
        // 값이 없는 경우 f(n) = f(n-1) + f(n-2)
        memo[num] = fibo(num - 1) + fibo(num - 2);
        // 재귀적으로 돌아서 memo[num]에 값이 할당되면 memo[num] 리턴
        return memo[num];
      }
    }
  };
  // 최종적으로 fibo()리턴
  return fibo(num);
}
