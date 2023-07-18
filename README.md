![alt text](./images/img.png)

# Hello Guys ! In this tutorial I'm going to explain typescript

first of all you should know what is typescript(ts).

# What is Typescript?

Typescript is a superset of Javascript that adds static typing and other features on top of JavaScript.

Typescript (TS) is a programming language developed and maintained by Microsoft. It offers static type checking
It's developed by Microsoft, which means it has the backing from one of the biggest companies in software
development worldwide - Google!

TypeScript offers several benefits over plain old JavaScript:
1- Static Typing : TypeScript enforces type checking at compile time so any mistakes can
be caught before they become runtime errors or bugs.

2- Intelligent Autocompletion : With intelligent auto completion tools like Visual Studio Code’s
IntelliSense feature,
developers don't have to waste their valuable time looking up documentation for functions

3- Better Refactorability : Since code written using TypeScript is already well structured with classes
and interfaces

# Why to learn Typescript ?

1.  Type Safety
2.  Code Maintainability
3.  Tooling Support
4.  Refactoring and Scalability
5.  Strong Community and Support

# How to run typescript ?

You have to download nodejs in your machine. IF you haven't then download from here. https://nodejs.org/en/download
You have also install npm || yarn in your local machine
After that in your terminal install typescript globally
`npm install -g typescript`

`tsc --init`

or if you are using **yarn** then
`yarn add -g typescript`

`npx tsc --init`

This command will create tsconfig file where we configure our project settings
such as compiler options, files included/excluded etc..

In tsconfig.json file have enable this content

```
"compilerOptions": {
    "target":"es6",
    "module": "commonjs",
    "rootDir":".src/app.ts"
    "outDir": "./dist/",
    "strict": true,
    "sourceMap":true,
    "noEmitOnError":true,
    "removeComments": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
}

```

Then create directory name `src` in that create app.ts file

# Our first program on typescript

let's write code on `app.ts file(src/app.ts)`

```
    let name:string = "Hello World"
    console.log(string)
```

save the file and go to the terminal hit the `tsc` command to compiler the .ts file to .js file
and run the app `node dist/app.js` then you'll see output

![alt text](./images/congrate.jpg)

# congratulations buddie `now you are typescript programmer 😄`

# Next. What is type annotations in typescript ?

Type annotations in TypeScript are used to explicitly specify the types of variables, function parameters, return values, and other elements in your code.

**for example**

![alt text](./images/annotation.png)


if we try to write other it throw the error
**because we must keep add value or change value according to the that variable annotations**
```
// Number type annotation
let age: number = 20;
age = "dipak"

// String type annotation
let personName: string = "Dipak";
personName = [2,4]

// Boolean type annotation
let isStudent: boolean = true;
isStudent = "true"
// Array type annotation
let myFavNum: number[] = [12, 2, 5,6];

myFavNum = "hello"

// Object type annotation
let person: { name: string; age: number } = {
  name: "Ram",
  age: 25,
};
```