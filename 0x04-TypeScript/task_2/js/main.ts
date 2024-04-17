// DirectorInterface interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

interface Employee {
  role: string;
}

interface Director extends Employee {
  role: 'Director';
}

interface Teacher extends Employee {
  role: 'Teacher';
}

function isDirector(employee: Employee): employee is Director {
  return employee.role === 'Director';
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

function workDirectorTasks(): void {
  console.log('Getting to director tasks');
}

function workTeacherTasks(): void {
  console.log('Getting to work');
}

console.log(executeWork(createEmployee(200)));

console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';

console.log(teachClass('Math'));

console.log(teachClass('History'));
