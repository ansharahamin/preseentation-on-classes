// obj

// constructor function
// function Person(name,age,grade){
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
// }
// let maha = new Person("maha", 20, 9)
// console.log(maha);

// class
class Employee {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    slogan(){
        return `i am ${this.name} i am ${this.age} years old and i love my company`
    }
}

let umra = new Employee("umra", 20)
let rida = new Employee("rida", 25)
let ali = new Employee("ali", 30)
let fatima = new Employee("fatima", 28)

// console.log(umra.slogan());

// class Car {
//     constructor(name,model,mileage){
//         this.name =  name
//         this.model = model
//         this.mileage = mileage
//     }
//     start(){
//         return `the ${this.name} is starting...`
//     }
//     stop(){
//         return `the ${this.name} is stopping...`
//     }
//     run(){
//         return `the ${this.name} is running...`
//     }
// }

// let car1 = new Car('toyota', 2020, 15000)
// let car2 = new Car('honda', 2021, 10000)
// console.log(car1.start());
// console.log(car2.stop());
// console.log(car1);

// class inheritance => extends keyword
class Developer extends Employee {
    constructor(name,age,salary,Lang){
        super(name,age)
        this.salary = salary
        this.Lang = Lang
    }
    
}