{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: string = "TaeHo";
  const name2: Text = "TaeHo";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "TaeHo",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let TaehoName: Name;
  TaehoName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
