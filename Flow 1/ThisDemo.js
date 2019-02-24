
/*
This in Java will always refer to the same object / variable, 
regardless of how the object / variable is instantiated.

This in JavaScript can return different outcome, 
dependant of the context in which the object / variable is called.
*/

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'