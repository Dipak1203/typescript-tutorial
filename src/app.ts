
// square bracket array

// const friends: string [] = ['Ram','Sita','Hanuman'];

// console.log(friends[0])


// Generic type array
// const friends: Array<string> = ['Ram','Sita','Hanuman'];

// friends.push('DIPAK');
// console.log(friends)


// const arr: [string,number] = ['dipak',23];
// console.log(`My name is ${arr[0]} and my age is ${arr[1]}`);


// Multi type array

// let person: Array<string | number> = ['DIPAK',20,'NEPAL','PROGRAMMER',50];


// console.log(`My name is ${person[0]} and my age is ${person[1]} and I'm from ${person[2]}. I'm a ${person[3]}, I have a more than ${person[4]} projects`)


// let message = "Hello, TypeScript"; // The compiler infers the type of 'message' as 'string'
// let count = 42;                    // The compiler infers the type of 'count' as 'number'
// let isValid = true; 

// message = 10;


// let ageOrName: number | string;

// ageOrName = 25;     // Valid, as 'ageOrName' can hold a number
// ageOrName = "RAM"; // Valid, as 'ageOrName' can hold a string
// ageOrName = true; // Type 'boolean' is not assignable to type 'string | number'


// function printID(id: number | string) {
//     console.log(`ID: ${id}`);
//   }
  
// printID(42);       // Valid
//   printID("ABC123"); // Valid
// //   printID(true);  // Error, as 'id' should be a number or a string


// type A = { foo: number };
// type B = { bar: string };

// // Intersection type: a variable must satisfy both type A and type B
// let combined: A & B = { foo: 42, bar: "hello" };


// let someValue: any = "this is a string";

// // Type assertion: Treat 'someValue' as a string
// let strLength: number = (<string>someValue).length;

// // Type assertion with union type: Treat 'someValue' as a number or a string
// let strOrNum: string | number = <string | number>someValue;



// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }
  
//   function move(direction: Direction) {
//     // Function logic here
//   }
  
//   move(Direction.Up);   // Valid
//   move(Direction.Down); // Valid
//   move("LEFT");       // Error, as the argument must be of type Direction enum
  

// interface Person {
//     name: string;
//     age: number;
//     email: string;
//   }
  
//   const person: Person = {
//     name: "ram",
//     age: 30,
//     email: "ram@example.com",
//   };

//   console.log(person.name)


// type Car = {
//     make: string;
//     model: string;
//     year: number;
//   };
  
//   const car: Car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//   };

//   console.log(car.make)



// let employee: [number, string][];
// employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

// console.log(employee)