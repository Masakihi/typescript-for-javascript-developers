export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'masa',
  age: 43
};

me.age++;

console.log(me)

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'masaki',
  age: 40
}

// friend.age++;

type Yomitorisenyo<T> = { readonly [P in keyof T]: T[P]; }
type yomitoriprofile = Yomitorisenyo<Profile>;
