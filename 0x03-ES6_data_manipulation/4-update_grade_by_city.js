export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((student) => student.location === city);
  return studentsCity.map((student) => {
    const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);
    if (filteredGrades.length > 0) {
      return {
        ...student,
        grade: filteredGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
