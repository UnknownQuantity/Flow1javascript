
/*
the filter method is called on an array, and returns a new array based on the requirements set in
the method declaration. The filter method does not change the original array.

The example below, returns a new array containing all names from the original array with a total
letter count of 3 or less.
*/
var filterArray = ["Dennis", "Emilie", "Hayley", "Chloé", "Hans", "Pia", "Kim", "Camilla"];

const filterResult = filterArray.filter(name => name.length <= 3);

console.log(filterResult);

/*
The map method calls a function on every element in an array, and returns a new array with the
result of the functions. The method does not execute the function on empty elements and doesn't
change the original array.

The example below returns a new array containing all names from the original array, but all letters
uppercased.
*/
const mapResult = filterArray.map(function(res){ return res.toUpperCase()});

console.log(mapResult);

/*
the reduce method runs through an array, collects all values and stores these values in one single
value. Reduce methods execute a function on each element in the array from left to right.

The example below does three different reduces on the same array, the first will return one long
string with all names, the second will return a string with all the names, with spaces between each
name, the last will return a string with all the names, separated by #.

The bottom example adds all the values of the array together, it is essentially a calculator.
*/
var all= ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join());
console.log(all.join(" "));
console.log(all.join("#"));


const array1 = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
