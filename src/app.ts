
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


