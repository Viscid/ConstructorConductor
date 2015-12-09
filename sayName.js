//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

var Human = function() {
  var test = 'test!';
}

Human.prototype.coolMethod = function() {
  console.log(this.test);
}

Person.prototype = Object.create(Human.prototype);

//Now create three instances of Person with data you make up

var person1 = new Person('Joe', 15);
var person2 = new Person('Mary', 23);
var person3 = new Person('Agnes', 64);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  console.log(this.name);
}

person1.sayName();

person1.coolMethod();
