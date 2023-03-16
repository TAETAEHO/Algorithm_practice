{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보은닉 -> 작성하지 않으면 public
  // public
  // private : 외부에서 접근 불가
  // protected : 상속할 때 자식 클래스에서만 접근이 가능하도록 한다.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    // 생성자 : class를 가지고 object, instance를 만들 때 호출
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level에서 활용하고자 할 때
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // public
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    // 하나의 함수
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // 생성자 호출
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  console.log(maker);

  class User {
    // private firstName: string;
    // private lastName: string;
    // fullName: string;

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      // return 3;
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) throw new Error("Invalid age");
      this.internalAge = num;
    }

    // constructor(firstName: string, lastName: string) {
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   // this.fullName = `${firstName} ${lastName}`;
    // }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Taeho", "Kim");

  user.age = 6;
  console.log(user);
  console.log(user.fullName);
}
