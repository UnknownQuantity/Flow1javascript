/*
Prototype allows you to add additional functionality / information to an objects constructor,
that normally wouldn't be possible.
In the example below, the Person constructor contains information about: name, age and eyecolor,
but with the prototype property, it is possible to add information about nationality,
which isn't defined in the original Person constructor 
*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }  
  Person.prototype.nationality = "English";