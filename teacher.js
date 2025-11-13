export const teacher = {
  name: "Mr. John Smith",
  subject: "Computer Science",
  experience: "10 years",
  email: "john.smith@school.edu",
};

export function displayTeacherInfo() {
  const teacherDiv = document.getElementById("teacher-info");
  teacherDiv.innerHTML = `
    <h3>Teacher Information</h3>
    <p><strong>Name:</strong> ${teacher.name}</p>
    <p><strong>Subject:</strong> ${teacher.subject}</p>
    <p><strong>Experience:</strong> ${teacher.experience}</p>
    <p><strong>Email:</strong> ${teacher.email}</p>
  `;
}
