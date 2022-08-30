// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucumber", "Radish"];

// console.log([...fruits, ...vegetables]);

const developer = {
  salary: 10000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};
developer.doubleSalary();
console.log(developer.salary);
console.log(developer.lookingForWork);
