// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// COURSE:JAVASCRIPT
// DATE: 2 February 2025
// ASSIGNMENT : QUESTION 2






// Match class to represent an Employee
class Match {
    constructor(name, jobTitle, age, department, dateOfHire) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
        this.department = department;
        this.dateOfHire = dateOfHire;
    }

    // Function to display details of an employee
    displayDetails() {
        console.log(`\nEmployee Details:`);
        console.log(`Name: ${this.name}`);
        console.log(`Job Title: ${this.jobTitle}`);
        console.log(`Age: ${this.age}`);
        console.log(`Department: ${this.department}`);
        console.log(`Date of Hire: ${this.dateOfHire}`);
        console.log("-----------------------------");
    }
}

// Array to store employee objects
let employees = [];

// Function to add an employee
function addEmployee(name, jobTitle, age, department, dateOfHire) {
    let newEmployee = new Match(name, jobTitle, age, department, dateOfHire);
    employees.push(newEmployee);
}

// Function to get employee details by name
function getEmployeeDetails(name) {
    const employee = employees.find(emp => emp.name === name);
    if (employee) {
        employee.displayDetails();
    } else {
        console.log("\nEmployee not found.");
    }
}

// Function to display details of all employees
function displayAllEmployees() {
    if (employees.length === 0) {
        console.log("\nNo employees to display.");
        return;
    }

    console.log("\nAll Employee Details:");
    employees.forEach(emp => emp.displayDetails());
}

// Function to filter employees by department
function getEmployeesByDepartment(department) {
    return employees.filter(emp => emp.department === department);
}

// Function to calculate average age of employees
function getAverageAge() {
    if (employees.length === 0) return 0;
    const totalAge = employees.reduce((sum, emp) => sum + emp.age, 0);
    return totalAge / employees.length;
}

// Function to get all employee names
function getAllEmployeeNames() {
    return employees.map(emp => emp.name);
}

// Example usage
addEmployee("Deepti", "Developer", 19, "IT", "2023-01-10");
addEmployee("Yesh", "Designer", 20, "Design", "2022-07-05");
addEmployee("Heena", "Manager", 19, "IT", "2021-03-15");

// Display details of all employees
displayAllEmployees();

// Display employees in a specific department
console.log("\nEmployees in IT department:");
getEmployeesByDepartment("IT").forEach(emp => emp.displayDetails());

// Display average age of employees
console.log("\nAverage Age of Employees:", getAverageAge());

// Display all employee names
console.log("\nAll Employee Names:", getAllEmployeeNames());

