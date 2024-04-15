export default function getStudentsByLocation(studentList, city) {
  const studentsInCity = studentList.filter((student) => student.location === city);

  return studentsInCity;
}
