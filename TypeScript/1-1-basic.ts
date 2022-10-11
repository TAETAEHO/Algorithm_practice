{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true || false;

  // undefined
  let name: undefined; // x
  let age: number | undefined; // number or undefined (optional)
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // x
  let person2: string | null; // string or null (optional)

  // unknown -> not recommended
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any -> not recommended
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
  }
  let unusable: void = undefined; // not recommended

  // never -> can't write return
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while (true) {}
  }
  let nerverEnding: never; // can't use

  // object
  let obj: object; // not recommended
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "Kim" });
  acceptSomeObject({ animal: "dog" });
}
