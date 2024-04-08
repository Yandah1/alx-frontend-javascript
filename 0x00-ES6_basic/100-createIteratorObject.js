export default function* createIteratorObject(report) {
  for (const department of report.allEmployees) {
    const employees = report.allEmployees[department].employeeList;
    for (const employee of employees) {
      yield employee;
    }
  }
}
