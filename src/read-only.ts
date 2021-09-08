export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('masa')
console.log(myVisaCard.owner);
// myVisaCard.owner = 'hem';