'use strict';

// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

const employees = [];
const erich = new Employee('Erich Hartnauer', 'Developer', '80K', 'test');
const em = new Employee('Emilee', 'UX Designer', '100K', 'test');
const pais = new Employee('Paislee', 'Back End Dev', '120K', 'test');
const brax = new Employee('Brax', 'Front End Dev', '70K', 'test');
erich.status = 'Part Time';
employees.push(erich, em, pais, brax);

erich.printEmployeeForm = employees[0];
em.printEmployeeForm = employees[1];
pais.printEmployeeForm = employees[2];
brax.printEmployeeForm = employees[3];

function Employee(name, job, salary, printEmployeeForm) {
  this.name = name;
  this.job = job;
  this.salary = salary;
  this.status = 'Full Time';
  this.printEmployeeForm = printEmployeeForm;
}

Employee.prototype.employeeForm = function () {
  console.log(this.printEmployeeForm);
};

erich.employeeForm();
em.employeeForm();
pais.employeeForm();
brax.employeeForm();
