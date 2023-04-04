let age: number;

age = 10;
age = 100;
// age = "20"; //error

let userName: string = "Zuko";

let isEligible: boolean = true;

// non-primitive data types
// array of strings

let skills: string[];
skills = ["JS", "CSS"];

let data;
data = {
  id: "IDX87",
  createdAt: "Monday",
  expiresIn: "20hrs",
};

// object type definition
let evolve: {
  current: number;
  target: number;
  split: string;
};

evolve = {
  current: 78,
  target: 74,
  split: "Push Pull Legs",
};

// array of objects
let massData: {
  current: number;
  target: number;
  split: string;
}[];

// Type Inference
let course = "TypeScript";

// course = 1234; //typescript gives error as course is initialized at the time of declaration.

// Union types
let subjects: string | number;
subjects = "123";
subjects = 10;
