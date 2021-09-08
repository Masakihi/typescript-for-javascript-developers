export {};

interface Profile {
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'masa', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'masa';
profile.age = 21;
profile.nationality = 'japan';
profile.ismale = true;