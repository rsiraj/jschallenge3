/*EASY: Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming" */
let exercise = x => {return () => `Today's exercise: ${x}.`;}

let run = exercise('running');
let swim = exercise('swimming');

console.log(run());
console.log(swim());

/* MEDIUM: Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
// prints "Each person gets 2.67 slices of pizza" */
let cutPizzaSlices = slices => people => `Each person gets ${slices / people} slices of pizza.`;

let sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));

/* HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.

You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn. */

let objectAccount = (function () {
  // password protected function
  let SSN = () => console.log("123-45-678"); ;

  // public object
  let pii = {
    personName: "Rehan Siraj",
    //method that returns function with ssn upon correct password
    privateAccess: function (password) {
      if (password === "TotallySecurePassword") {
        SSN();
      } else {
        console.log("Incorrect Password");
      }
    },
  };
  return {
    pii: pii,
  };
})();

console.log(objectAccount.pii.personName);
objectAccount.pii.privateAccess("IncorrectPassword");
objectAccount.pii.privateAccess("TotallySecurePassword");

/* VERY HARD: Object prototype chain and prototypal inheritance exercise.
1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { } */

class Person {
  // 1. Create a Person constructor that has three properties: name, job, and age.
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  // 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
  exercise () {
    console.log("I'm just here so I don't get fined.");
  }
  // 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
  fetchJob() {
    console.log(`${this.name} works as a ${this.job}`);
  }
  Info(){
    console.log(`${this.name} is ${this.age} years old and working as a ${this.job}.`);
  }
}
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
class Programmer extends Person {
  constructor(name, job, age, languages = []){
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  // 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  // 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
  offerNewTask() {
    if (this.busy === true) {
      console.log(`${this.name} is currently busy and not accepting new tasks.`);
    }
      else {
        console.log(`${this.name} is available for more work.`)
      }
    }
  // 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
  learnLanguage(lang) {
    this.languages.push(lang);
  }
  listLanguage() {
    console.log(this.languages);
  }
  Info(){
    console.log(`${this.name} is a ${this.job} working with ${this.languages}.`);
  }
}

// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

const person1 = new Person("Rehan", "Coding Apprentice", 300);
const programmer1 = new Programmer("John", "Sr. Software Engineer", 34, ["HTML", "CSS", "JavaScript"]);
const programmer2 = new Programmer("Dwayne", "Full-stack Developer", 26, ["HTML", "CSS", "JavaScript", "Node.JS", "React"])

person1.Info();
programmer1.Info();
programmer2.Info();

programmer1.learnLanguage("Node.JS");
programmer2.learnLanguage("Python");

programmer1.listLanguage();
programmer2.listLanguage();

person1.Info();
programmer1.Info();
programmer2.Info();

programmer1.completeTask();
programmer1.offerNewTask();
programmer1.acceptNewTask();
programmer1.offerNewTask();