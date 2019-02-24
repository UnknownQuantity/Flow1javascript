
/* Not Hoisting because only the declaration (var y), 
not the initialization (=7) is hoisted to the top.
Because of hoisting, y has been declared before it is used, 
but because initializations are not hoisted, the value of y is undefined.
*/ 

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y



/* Hoisting because the declaration is by default moved to the top of the script / function, 
which allows the initialization (=5) to be assigned to the declared variable (var a).
*/

a = 5; // Assign 5 to a

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = a;                     // Display a in the element

var a; // Declare a

/* Design rule behind hoisting
Hoisting is an unknown or overlooked behavior of JavaScript.
If a developer doesn't understand hoisting, programs may contain bugs.
To avoid bugs, always declare all variables at the beginning of every scope.
Since this is how JavaScript interprets the code, it is always a good rule.
*/

var p = 5; // Initialize p
var l = 7; // Initialize l

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = p + " " + l;           // Display p and l