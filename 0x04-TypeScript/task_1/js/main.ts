interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
 
interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: 'Kathy',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  contract: false,
}

console.log(teacher1);

function printTeacher(firstName: string, lastName: string): string {
   const firstInitial = firstName.charAt(0);
   const fullName = `${firstInitial}. ${lastName}`;
   return fullName;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const teacherName: string = printTeacher("John", "Doe");
console.log(teacherName);

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  workOnHomework(): string {
      return 'Currently working';
  }

  displayName(): string {
      return this.firstName;
  }
}

const student1 = new StudentClass('Luyandah', 'Van');
console.log(student1);
