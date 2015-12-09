var Super = function() {}

var Sub = function() {}

Super.prototype.superMethod = function() {
  console.log("Super Method!");
}

Sub.prototype = Object.create(Super.prototype);

Sub.prototype.superMethod = function() {
  console.log("Altered Method!");
}

var subInstance = new Sub();

subInstance.superMethod();
var superInstance = new Super();
superInstance.superMethod();
