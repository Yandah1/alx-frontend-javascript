export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrades
        .filter((grade) => grade.studentId === student.id)
        .map((grade) => grade.grade)[0] || 'N/A',
    }));
}
