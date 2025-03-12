//Question 2.a
function findHighPerformers(employees, threshold) {
  return employees.filter(emp => emp.performanceScore > threshold).map(emp => emp.name);
}
const employees = [
  { name: "Alice", tasksCompleted: 30, hoursWorked: 40, performanceScore: 90 },
  { name: "Bob", tasksCompleted: 20, hoursWorked: 35, performanceScore: 85 },
  { name: "Charlie", tasksCompleted: 25, hoursWorked: 45, performanceScore: 95 }
];
console.log(findHighPerformers(employees, 88));

//Question 2.b
function averageHoursWorked(employees) {
  return employees.reduce((total, emp) => total + emp.hoursWorked, 0) / employees.length;
}
console.log(averageHoursWorked(employees));

//Question 2.c
function getTopPerformer(employees) {
  return employees.reduce((top, emp) => (emp.performanceScore > top.performanceScore ? emp : top), employees[0]).name;
}
console.log(getTopPerformer(employees));

//Question 2.d
function sortEmployeesByTasks(employees) {
  return employees.sort((a, b) => b.tasksCompleted - a.tasksCompleted);
}
console.log(sortEmployeesByTasks(employees));

//Question 2.e >>> Answer :
//  -Using map and filter method to ensure immunity and best performance, 
// -