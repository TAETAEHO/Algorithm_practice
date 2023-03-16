{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance(object) level

    // 생성자 : class를 가지고 object, instance를 만들 때 호출
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level에서 활용하고자 할 때
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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
  const maker = new CoffeeMaker(32);
  // const maker1 = CoffeeMaker.makeMachine(1);
  console.log(maker);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}
