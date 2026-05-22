// ========== object oriented programming ======//  a method of programming that uses objects and classes to organize code

// --- used in complex js applications ---//
// --- easier to maintain and reuse code ---//

// why use oop??

// we can make real world obj with real world templates (classes) ---//


// --- we can also do these things with functional programming but oop is more intuitive for many developers ---//  

let obj = {
    name: "john",
    age: 30,
    greet: function() {
        console.log("hello");
    }
}

//--- obj is an object that has properties name and age, and a method greet  it has some additional properties  that are calledd prototypes---//  

console.log(obj);
console.log(obj.salary); // undefined

// why undefined?? because salary is not a property of obj but there is a chance that it can be in its prototype ---//

// why we make prototypes?? 
// inorder to make prototypal inheritance possible ---//


// --- an object can have its own properties and methods, as well as access to the properties and methods of its class ---//  

let animal = {
    eats : true
}
let rabbit = {
    jumps : true
}

rabbit.__proto__ =animal // rabbit inherits from animal

console.log(rabbit.eats); // true

// --- prototypal inheritance allows us to create new objects that inherit properties and methods from existing objects ---//

// but it can lead to some issues like if we change the prototype object then all the objects that inherit from it will also change  inorder to make ourselves free from these issues we use classes we have to use classes to make real world objects ---//

//// ================= Classess ===============//

// --- a class is a blueprint for creating objects ---//
// --- a class defines the properties and methods of an object ---//

// ex:  let suppose of bank form there is only one form but there are many customers so we can make a class for the form and then create many objects for the customers ---//


// why capital?? link with constructor function?????

//When you create a class, JavaScript secretly builds a constructor function and attaches the methods to its prototype.Under the Hood ComparisonHere is how the engine translates your modern class into the old prototype system:

//
// 1. WHAT YOU WRITE (Modern Class)
class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log("eating");
  }
}

// 2. WHAT JAVASCRIPT ACTUALLY DOES (Prototypes)
function Animal(name) {
  this.name = name; // Instance property
}

// Methods are attached to the prototype to save memory
Animal.prototype.eats = function() {
  console.log("eating");
};


class Animal {
constructor(name){
    this.name = name // this is the way to create property in a class
    
    console.log("obj is created");
    
}eats(){
    console.log("i am eating");
    
}jumps(){
    console.log("i m jumping");
    
}
}

//=== obj crated using class is called instance of the class ===//

let a = new Animal("dog"); // creating an object of the class Animal using the new keyword and passing the name as an argument to the constructor function
console.log(a);

console.log(a.name); // we can access the properties and methods of the class using the object  
a.eats()
a.jumps()
a.runs() // undefined because runs is not a method of the class Animal
