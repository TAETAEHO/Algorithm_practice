{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {} // 일관성

  // Tuple : 서로 다른 타입을 허용할 수 있는 배열 (권장 x) -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // student.name;
  // student.age;
  const [name, age] = student;
}
