{
  /**
   * Enum : TypeScript에서는 Enum을 사용하지 않고 Union Type을 사용한다. (타입 추론으로 인한 에러 이슈)
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  // TypeScript는 union type으로 대체해서 사용
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfTWeek: DaysOfWeek = "Monday";
  dayOfTWeek = "Wednesday";

  //   enum Days {
  //     Monday = 1,
  //     Tuesday,
  //     Wednesday,
  //     Thursday,
  //     Friday,
  //     Saturday,
  //     Sunday,
  //   }
  console.log(Days.Tuesday);
  const day = Days.Friday;
}
