// HOF - higher order function --
// three HOF callback, settimeout and setInterval

// callback -
// function greet(userName, callback) {
//   console.log("hello ", userName);
//   callback();
// }

// function callback() {
//   console.log("I am call back");
// }
// greet("Touthang", callback);

/**
 * arrow function --
 */
// const callback = (n) => {
//   return n ** 2;
// };

// function squ(callback, n) {
//   return callback(n) * n;
// }

// console.log(squ(callback, 5));

/**
 * settimeout
 */
// function courseName() {
//   console.log("Welcome to JS BootCamp");
// }
// setTimeout(courseName, 2000);

// setTimeout(() => {
//   console.log("Welcome to JS BootCamp");
// }, 3000);

// // setInterval
// setInterval(()=>{console.log("Refresh the Page!")}, 2000)

/**
 * foreach
 * map
 */
// const greet = ["hey", "hi", "hello", "hola"];
// greet.forEach((val, i) => {
//   console.log(val, i);
// });

// // map --  iterate and modified
// const num = [1, 2, 3, 4, 5, 6];
// const abc = num.map((val) => {
//   val * val;
// });

// console.log(abc);

/**
 * filter -
 */
// const countries = [
//   "India",
//   "Germany",
//   "Japan",
//   "England",
//   "Findland",
//   "Africa",
// ];

// const ret = countries.filter((country) => {
//   return country.includes("ia");
// });
// console.log(ret);

// // reduce - three parameters(initial, current)
// const choc = [1, 2, 3, 4, 5];

// const wrap = choc.reduce((acc, pos) => acc + pos, 0);
// console.log(wrap);

/**
 * Sort --
 */
// const names = ["Hitesh", "Anurag", "Anirub", "Mithun", "SuryaSir"]
// console.log(names.sort())

/**
 * Destructuring - spread and rest
 */
// function sum(x, y){
//     return x + y;
// }

// let vari = [1, 2]
// console.log(sum(...vari)); // spread

// function sumTwo(...args){
//     console.log(args)
//     args
// }

// sumTwo(1, 2, 3, 4, 5, 6, 7, 8)

/**
 * new
 */

/**
 * set (store unit value) and map
 */

// let tech = new Set();
// console.log(tech);

// let abc = [
//   "html",
//   "css",
//   "js",
//   "nodejs",
//   "reactjs",
//   "html",
//   "css",
//   "js",
//   "Angular",
// ];
// let newAbc = new Set(abc);
// console.log(newAbc);

/**
 * Map --
 */

// let map = new Map();
// console.log(map);

// // getter
// map.set("1", "Str1");
// map.set(true, "str2");
// map.set(1, "st3");
// console.log(map);

// // setter
// console.log(map.get(1));

/**
 * closure - the capabilities of the inner function to access to outer variable
 */

// function Gradparent() {
//   let dad = "hello";
//   function parent() {
//     console.log(dad);
//   }
//   parent();
// }

// Gradparent();

// function grandpran() {
//   let dad = "hello dad";
//   function par() {
//     console.log(dad);
//   }
//   return par;
// }

// let var2 = grandpran();
// var2();

/**
 * Task -- hoisting, scope,
 */

/**
 * Try and catch -- error handling
 */

// try {
//   let firstname = "anurag";
//   console.log(firstnam + " " + lastname);
// } catch (e) {
//   console.log(err);
// } finally {
//     console.log("print for sure");
// }

// console.log("hello world")

/**
 * Promise -
 * callback, .then .catch, async await
 */

// const makePromise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     const exam = ["html", "css", "js", "Tailwind"];
//     if (exam.length < 0) {
//       resolve("Done");
//     } else {
//       rejected("Rejected");
//     }
//   }, 2000);
// });

// makePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

// Async await - try again  --
// const uno = () => {
//   return "i am  one";
// };
// const dos = () => {
//   return "i am  two";
// };
// const tres = () => {
//   return "i am  three";
// };

// const call = () => {
//   const uno = () => {
//     console.log(one);
//   };
//   const dos = () => {
//     console.log(two);
//   };
//   const tres = () => {
//     console.log(three);
//   };
// };

// call();

/**
 * fetch
 */

const url = "https://restcountries.com/v2/all"; // Countries API
fetch(url)
  .then((result) => {
    result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
