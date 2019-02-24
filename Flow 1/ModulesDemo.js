

var person  = function() {
    var personAge = 0;
    var personName = "";
    var personInfo = "Name: " + personName + " Age: " + personAge;

    function setName(name) {
        personName = name;
    }
    function setPersonAge(age) {
        personAge = age;
    }
    return {
      setName: function() {setName(name);},
      setAge: function() {setPersonAge(age);},
      getInfo: function() { return "Name: " + personName;}
    }
  };
  var person1 = person();

  person1.setName("John");
  person1.setAge(25);
  console.log(person1.getInfo());
