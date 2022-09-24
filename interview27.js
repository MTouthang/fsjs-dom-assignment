// JavaScript revision – Q&A
// 1. First name of javaScript - Moca
// 2. Launched Year of JS - 1995
// 3. Initially javaScript design for FrontEnd
// Node js
// Var, let and const (let and const was introduced in ES6)
// What is variable ?

// Hoisting

// primitive and non-primitive
// primitive (storing single type of value) vs non-primitive(storing multiple type of value)

//primitive: number, String, Boolean, null, (null vs undefined)
// Non-primitive: Array and Object

// Math
const PI = Math.PI;
console.log(PI);

console.log(Math.round(9.91));
console.log(Math.floor(9.91)); // 9
console.log(Math.min(-5, -3, 2, 4, 6));

/**
 * Math.round
 * Math.pow(3, 3)
 */

let randnum = Math.floor(Math.random() * 10);
console.log(randnum);

// String --
let user = "Anurag";
let username = "Anurag";

console.log(user[2]);
console.log(user.toUpperCase());

// property -- like length
// some of the string method ---

// truety (all the number - and except 0 and all string except empty) value and falsy (na zero null undefined empty-string) value - explain

// Coercion on javaScript

// Operator - arithmatic operator, assignment operator, logical operator, ternary operator
// +, -, * / % ** pow
// ==, >< >= <= !=, ===
// && ||

// Ternary operator, condition

// if, if else, if else if else, switch, ternary op

// if and else
// let rating = 5;
// if(rating == 3){
//     console.log("four");
// } else if (rating == 5 || rating == 1){
//     console.log("five");

// } else {
//     console.log("Rating not given")
// }

// let user1 = "Me"
// switch(user1){
//     case "Me":
//         console.log("mamag");
//         break
//     case "touthang":
//         console.log("Touthang");
//         break
//     default:
//     console.log("default value")
// }

// ternary --  condition ? true event : false event
// let raining = true;
// raining ? console.log("raining") : console.log("Not raining");

// for(let i = 0; i<=5; i=i+1){
//     console.log(`${i}`);
// }

// while execute non if it does not meet the condition
// do while execute atleast once even if it does not meet the condition

// while (i<=5){
//     console.log(i)
//     i++;
// }

// Array
let marks = [];
console.log(marks);

// array looping with for loop

// array looping with for of
for (let element of array) {
  console.log(element);
}

// simple array method - cancate, indexOf, lastindexOf, includes, isArray, toString, slice splice, push, pop, shift an unshift, reverse, sort, log

// object
// let names = {
//     anurag: 97,
//     shubham: 98,
//     hiteshsir: 100,
//     students: ["stud1", "stud2", "stud3"],
//     username: function (){
//         return this.anurag;
//     }
// }
// console.log(names.user())
// console.log(names.students[1])

// Date
// let some = new Date();
// console.log(some.getMonth());
// console.log(some.toString());

// // break and continue

// // Function --

// function squ() {
//   console.log("SQU");
// }
// squ();

// function sum() {
//   let sums = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sums = sums + arguments[i];
//   }
//   return sums;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

const dec = () => {
  console.log("Anurag");
};
dec();

// hoisting --
// scope --
// execution context --
// callstack --
