// const person1 = {
//   // Object Literal
//   name: "varol",
//   age: 36,
//   showInfos: function () {
//     console.log(this);
//   },
// };

// function a() {
//   console.log(this);
// }
// a();
// console.log(this);
// console.log(person1.showInfos());

// Yapıcı fonsiyon

function Employee(name, age) {
  this.name = name;
  this.age = age;
  // this.showInfos = function () {
  //   console.log("Bilgiler gösteriliyor: ", this.name, this.age, this.salary);
  // };
}

// Prototype fonkiyonu gönderdik
Employee.prototype.showInfos = function () {
  console.log("Bilgiler gösteriliyor: ", this.name, this.age, this.salary);
};

const emp1 = new Employee("Varol", 35, 5000);
const emp2 = new Employee("Serkan", 33, 5000);

// console.log(emp1.showInfos());

function Person(name, age, salary) {
  Employee.call(this, name, age);
  this.salary = salary;
}

// Prototype tabanlı miras alma
Person.prototype = Object.create(Employee.prototype);

const per1 = new Person("Varol", 35, 5000);

console.log(per1);

// Class tabanlı yazım

// class Employee{
//   constructor()
// }

// class Person extends Employee{
//   constructor() {
//     super(name, age)

//   }
// }
