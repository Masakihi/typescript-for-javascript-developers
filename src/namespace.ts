export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }  
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }  
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }  
}


const me = new Japanese.Tokyo.Person('masa')
console.log(me.name)

const michel = new English.Person('Michel','Joseph','Jackson')
console.log(michel)