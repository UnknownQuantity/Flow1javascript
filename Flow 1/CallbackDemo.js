/*
The user defined filter callback below, takes an array as input and filters through it's contents
in order to find all names with 3 or less letters. The callback then returns a new array with the
filtered results.

The callback purpose is to ensure a piece of code is executed before another piece of code, that
is dependent on the first piece, executes.
*/

var filterArray = ["Dennis", "Emilie", "Hayley", "Chloé", "Hans", "Pia", "Kim", "Camilla"];

function myFilter(filterArray, callback) {
    console.log(callback(filterArray));
}

myFilter(filterArray, function callback(arr) {
    var newArray = [];
    var i = 0;
     while(i < arr.length){
        if(arr[i].length <= 3) {
            newArray[newArray.length] = arr[i];
        }
        i++;
     }
        return newArray;
    });