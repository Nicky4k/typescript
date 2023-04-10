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

// Type Alias
type StereoType = {
  band: string;
  launchDate: string;
  members: number;
  bio: string;
  membersName: string[];
};

type DOB = {
  date: number;
  month: string;
  year: number;
};

let JacobDOB: DOB;
let teamDOB: DOB[];

// Function and Types

function add(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

function recursiveCall() {
  return function invokeFn(a: number, b: number, c: number) {
    return a + b + c;
  };
}

// Generics

function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// Optional Properties
function printCar(car: {
  make: string;
  build: number;
  color?: string;
  topSpeed?: string;
}) {
  console.log(car);
}

printCar({
  make: "Ferarri",
  build: 2026,
  color: "Red",
  topSpeed: "150mph",
});

printCar({
  make: "Audi",
  build: 2025,
  color: "white",
});

const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  fax: {
    country: "IND",
    area: "JH",
    number: "9148669104",
  },
};
phones.fax.area = "a";

// Tuples
const aCar = ["BMW", "Blue", 2028];
const [carName, color, build] = aCar;

let myCar: [number, string, string] = [2024, "Audi", "Q7"];

// typescript limitations: it wont show error when we push or pop a tuple.

// type checking
