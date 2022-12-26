{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 인터페이스 -> 표준, 규약
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 인터페이스를 구현하는 부분 -> 인터페이스에서 작성한 함수를 모두 구현한다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    // 생성자 : class를 가지고 object, instance를 만들 때 호출
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level에서 활용하고자 할 때
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // public
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`granding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  // 생성자 호출
  // 추상화 -> 정말 필요한 함수만 노출
  // CoffeeMachine이라는 타입으로 CoffeeMachine object를 받게되면 public으로 되어있는 함수들을 사용할 수 있다.
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  // interface로 타입을 제한하면 interface에서 사용된 함수들만 사용할 수 있다.
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32); // maker의 타입은 CoffeeMaker이며 CoffeeMaker interface에 작성되지 않은 함수는 사용할 수 없다. (추상화)
  maker2.makeCoffee(2);
  maker2.clean();

  const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker3);
  const pro = new ProBarista(maker3);
}
