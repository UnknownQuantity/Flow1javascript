/*
es2015 introduced a new keyword to js - let.
let allows you to declare variables that are limited in scope to the block, 
statement, or expression on which it is used. 
This is unlike the var keyword, which defines a variable globally, 
or locally to an entire function regardless of block scope.
*/


//Pre es2015 with var
{ 
    var x = 2; 
  }
  // x CAN be used here


//es2015 with let
{ 
    let x = 2;
  }
  // x can NOT be used here  



/*
Arrow functions allows you to make functions without the function keyword,
the return keyword, and the curly bois. - the latter two only applying if it's a single statement.
They are unsuitable for defining objects as they lack their own this,
as well as not being hoisted - they MUST be defined before use.
 */

 // Pre es2015
var x = function(x, y) {
    return x * y;
 }
 
 // es2015
 const x = (x, y) => x * y;

 //es2015 with return and curly bois
 const x = (x, y) => { return x * y };


/*
this keyword in arrow functions. 
In arrow functions, this keyword always retains its initial value when used in both global and lexical scopes.
(Lexical scope means that every inner level can access its outer levels - 
    inner functions contains the scope of the parent function, even if it has returned)
*/

//Global scope demo

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true

/*
The rest parameter.
Allows us to represent an indefinite number of arguments as an array.
The last parameter of a function can be prefixed with ... which will cause all remaining 
parameters to be placed in an array. Only the last parameter can be a rest parameter.
Because the rest array is treated like an actual array, methods like map, sort etc.
can be used on it. 
*/

function numbers(a, b, ...manyMoreArgs) {
    console.log("a", a); 
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs); 
  }
  
  numbers("one", "two", "three", "four", "five", "six");
  
  // Console results:
  // a, one
  // b, two
  // manyMoreArgs, [three, four, five, six]


  //Sorting rest

  function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
  console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

/*
Destructuring allows extracting data from arrays and/or objects and transform it to variables,
that are easier to work with, and removes clutter. 
*/

 var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]


//Swap values
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


//on Objects
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true


/*
The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.
This also allows us to modify each individual element in an array.
*/

const data = [2, 3, 4, 5, 35]
const numberArray = numberArray.map(singleData => {
    return singleData * 2
})

console.log(numberArray) // [4, 6, 8, 10, 70]

//or this snippet for displaying names on a website using react
//.......
const names = ["john", "sean", "mike", "jean", "chris"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);
//.......

/*
Will produce a list of the names shown on webpage the following way
 •John
 •Sean
 •Mike
 •Jean
 •Chris
*/


/*
Modules are also supported in es2015, much like we know it from node.
This allows us to import other files, thus logic, into our program, and splitting the files up for less clutter,
and allowing files to "access" eachother, if we add the export keyword with the things we want to share. 
*/
//------ lib.js ------
const sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
 function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export {square, diag};

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
