export const student = {
  name: "Mishi Khan",
  age: 20,
  grade: "A",
  rollNumber: "CS-101",
};

export function displayStudentInfo() {
  const studentDiv = document.getElementById("student-info");
  studentDiv.innerHTML = `
    <h3>Student Information</h3>
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Grade:</strong> ${student.grade}</p>
    <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
  `;
}
