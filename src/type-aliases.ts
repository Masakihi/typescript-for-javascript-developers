export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'こんにちは';


const example1 = {
  name: 'masa',
  age: 21,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'masa',
  age: 21,
};

type Profile2 = typeof example1;