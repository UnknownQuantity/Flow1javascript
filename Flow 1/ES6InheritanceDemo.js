
/*
    Inheritance in ES6 is looking a lot like inheritance in Java. This is shown by the creation of a parent class and a child class that
    extends the parent class. 

    The 'super' call is used in both Java and ES6 to call the parents method (in the example below either the constructor or the getName).
    This opens up the possibility to have the same method on multiple objects, but with object-specific data.
*/

class Vehicle {
 
    constructor (name, type) {
      this.name = name;
      this.type = type;
    }
   
    getName () {
      return this.name;
    }
   
    getType () {
      return this.type;
    }
   
  }
  
  class Car extends Vehicle {
   
    constructor (name) {
      super(name, 'car');
    }
   
    getName () {
      return 'It is a car: ' + super.getName();
    }
   
  }

  let car = new Car('Volvo');
  console.log(car.getName());
  console.log(car.getType());