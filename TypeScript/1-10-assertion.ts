{
  /**
   * Type Assertions : Bad
   */

  function jsStrFunc(): any {
    // return "hello";
    return 2;
  }
  const result = jsStrFunc();
  result.length; // any type이므로 문자열 api를 사용할 수 없다.
  console.log((result as string).length); // 문자열이라고 casting
  console.log((<string>result).length); // 문자열이라고 casting

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers.push(2); // 숫자 또는 undefined가 가능하므로 경고
  numbers!.push(2); // ! -> 타입을 장담할 때

  const button = document.querySelector("class");
  button.nodeValue;
  if (button) button.nodeValue;
  button!.nodeValue; // 100% 타입 장담할 때
}
