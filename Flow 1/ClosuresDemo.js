
/*
Closures allows a function to remain accessible for further use.
This environment consists of any local variables 
that were in-scope at the time the closure was created.
When add5 and add10 is declared, x is set to 5 and 10 respectively, 
x is in this case a local variable which is then accesible by the inner function.

When add5 and add10 is called, the y value (2) is inserted into the makeAdder inner function
to ensure that the function can execute.
*/

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12