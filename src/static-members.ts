export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'masa';
  static lastname: string = 'hirano';

  static work() {
    // "Hey, guis! This is masa Are you interested in Typescript? Let's dive into Typescript!"
    return `Hey, guis! This is ${this.firstName}! Are you interested in Typescript? Let's dive into Typescript!`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer)
console.log(Me.work())