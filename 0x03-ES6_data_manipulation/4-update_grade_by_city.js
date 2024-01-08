export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  const newStudents = studentsByCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return [...newStudents];
}
