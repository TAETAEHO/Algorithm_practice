/**
 * Type Inference
 * 일반적으로 타입을 명시하는 것을 권장함
 */

let text = "hello"; // 문자열 할당 (타입 생략 가능)
text = 1; // x

function print(message: string) {
  console.log(message);
}
print("hello");
print(1); // x

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2); // add는 number 타입을 리턴하기 때문에 result도 number 타입으로 추론됨
