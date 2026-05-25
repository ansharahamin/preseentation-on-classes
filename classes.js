//  ============Classes======================
// =======A TEMPLATE TO BUILD OBJS IT IS COMPRISED OF PROPERTIES AND METHODS
class Employee {
  constructor(givenName, givenAge, givenSalary, givenExperience) {
    this.name = givenName;
    this.age = givenAge
    this.salary = givenSalary
    this.Experience = givenExperience
  } // CONSTRUCTOR FUNCTION CALLED WHEN OBJ IS CREATED
  slogan() {

    return ` My name is ${this.name} and i love my company`
  }
  joiningYear() {
    return 2026 - this.Experience
  }
  static add(a, b) {
    return a + b
  }
}
class Programmar extends Employee {

  constructor(givenName, givenAge, givenSalary, givenExperience, lang,github) {
    super(givenName, givenAge, givenSalary, givenExperience) //== superclass ke constructor ko call karta ha
    this.lang = lang
    this.github = github   

  }
favouriteLang(){
  if (this.lang === "python") {
    console.log(`my fav lang is ${this.lang}`);
  } else {
    console.log(`my fav lang is js`);
    
  }
}
static multiply(c,d){
  return c*d
}
}
class designer extends Employee {

  constructor(givenName, givenAge, givenSalary, givenExperience, software,) {
    super(givenName, givenAge, givenSalary, givenExperience) //== superclass ke constructor ko call karta ha
    this.software = software  

  }
favouriteSoftware(){
  if (this.lang === "python") {
    console.log(`my fav lang is ${this.lang}`);
  } else {
    console.log(`my fav lang is js`);
    
  }
}
static multiply(c,d){
  return c*d
}
}
class web_dev extends Programmar{

}
// static methods ko obj ki zaroorat nhi ha wo directly class ke saath call hojata ha .... is ma this keyword kaam nhi karta


// Ansharah = new Employee(`Ansharah`, `19`, `50000`, `5`)
// console.log(Ansharah.joiningYear());
// Ayesha = new Employee(`Ayesha`, `19`, `70800`, `20`)
// console.log(Ayesha.slogan());
// console.log(Ayesha.joiningYear());
// console.log(Employee.add(2, 5));

hania = new Programmar("hania" , 45,50000,10,"python","hania45")
console.log(hania.favouriteLang());


