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

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   eats() {
//     console.log("eating");
//   }
// }

// 2. WHAT JAVASCRIPT ACTUALLY DOES (Prototypes)
// function Animal(name) {
//   this.name = name; // Instance property
// }

// Methods are attached to the prototype to save memory

// Animal.prototype.eats = function() {
//   console.log("eating");
// };


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

let a = new Animal("lion"); // creating an object of the class Animal using the new keyword and passing the name as an argument to the constructor function
console.log(a);

console.log(a.name); // we can access the properties and methods of the class using the object  
a.eats()
a.jumps()
// a.runs() // undefined because runs is not a method of the class Animal

/// ============= the extend keyword ==============//

// --- the extend keyword is used to create a subclass of a class ---//
// --- the subclass inherits the properties and methods of the superclass ---//

class Dog extends Animal {
  constructor(name,breed){
    // super(name) // super is used to call the constructor of the superclass
    this.breed = breed // this is the way to create property in a class
  }
  bark(){
    console.log("woof");
  }
  eats(){
    console.log(` ${this.name} is eating dog food`);
  }
}
let d = new Dog("tommy","german shepherd");
console.log(d);
d.eats() // we can access the properties and methods of the superclass using the subclass
d.bark() // we can access the properties and methods of the subclass using the object of the subclass

// --- the extend keyword allows us to create a new class that inherits the properties and methods of an existing class, and also allows us to add new properties and methods to the new class ---//

// --- we can also override the methods of the superclass in the subclass ---//

// --- we can also call the methods of the superclass in the subclass using the super keyword ---//

//In JavaScript, the super keyword is strictly required in any subclass constructor that uses this. However, if your subclass does not need a constructor of its own, or if you are working with regular methods rather than constructors, you can use class inheritance without it.1. When super() is Required (Constructors)If you define a constructor() in a subclass (the class that extends another), you must call super() before you can access or modify this.Why? In JavaScript, instances of subclasses are created and allocated by the parent class. The super() method executes the parent's constructor to set up this. If you try to use this before calling super(), your code will throw a ReferenceError.

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name); // MUST be called before using 'this'
//     this.age = age; 
//   }
// }

// 2. When super is OptionalYou can skip super in the following scenarios:No subclass constructor: If you don't write a constructor in the child class, JavaScript will automatically create a default one that calls super(...args) for you.No this usage: If your subclass constructor does not use this and explicitly returns an object, you don't need super() (though this is extremely rare).Regular methods: When overriding a parent method, you only need to use super.methodName() if you actually want to call the original parent version of that method.

// // class Parent {
//   greet() {
//     console.log("Hello from Parent!");
//   }
// }

// class Child extends Parent {
//   // We didn't use super here; it's entirely optional for methods
//   greet() {
//     console.log("Hello from Child!");
//   }
// }

/// ============= static methods ==============//

// --- static methods are methods that are called on the class itself, not on the instances of the class ---//
// --- static methods are used to create utility functions that are related to the class but not to the instances of the class ---//

class MathUtils {
  static add(a,b){
    return a+b;
  }
}
console.log(MathUtils.add(5, 3)); // 8
