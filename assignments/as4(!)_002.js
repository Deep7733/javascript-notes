// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// COURSE:JAVASCRIPT
// DATE: 2 February 2025
// ASSIGNMENT : QUESTION 1





// Employee array to store employee details
let employees = [];

// Function to add an employee
function addEmployee(name, jobTitle, age, department) {
    employees.push({ name, jobTitle, age, department });
}

// Function to get employee details by name
function getEmployeeDetails(name) {
    const employee = employees.find(emp => emp.name === name);
    if (employee) {
        console.log(`\nEmployee Details:`);
        console.log(`Name: ${employee.name}`);
        console.log(`Job Title: ${employee.jobTitle}`);
        console.log(`Age: ${employee.age}`);
        console.log(`Department: ${employee.department}`);
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
    employees.forEach(emp => {
        console.log(`\nName: ${emp.name}`);
        console.log(`Job Title: ${emp.jobTitle}`);
        console.log(`Age: ${emp.age}`);
        console.log(`Department: ${emp.department}`);
        console.log("-----------------------------");
    });
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
addEmployee("Deepti", "Developer", 19, "IT");
addEmployee("Yesh", "Designer", 20, "Design");
addEmployee("Heena", "Manager", 19, "IT");

// Display details of all employees
displayAllEmployees();

// Display employees in a specific department
console.log("\nEmployees in IT department:");
getEmployeesByDepartment("IT").forEach(emp => {
    console.log(`Name: ${emp.name}, Job Title: ${emp.jobTitle}, Age: ${emp.age}`);
});

// Display average age of employees
console.log("\nAverage Age of Employees:", getAverageAge());

// Display all employee names
console.log("\nAll Employee Names:", getAllEmployeeNames());
