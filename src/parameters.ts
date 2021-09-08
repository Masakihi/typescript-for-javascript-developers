export {};

const debugProfile = (name: string, age: number) => {
  console.log({name, age});
}

debugProfile('masa', 11);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['gloria', 76];

debugProfile(...profile);