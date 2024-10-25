const students = [];

function addStudent(event) {
  event.preventDefault();
  
  const name = document.getElementById('student-name').value;
  const grade = parseInt(document.getElementById('student-grade').value);
  
  students.push({ name, grade });
  document.getElementById('student-form').reset();
  displayStudents();
}

function displayStudents() {
  const studentList = document.getElementById('student-list');
  studentList.innerHTML = '';

  students.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name}: ${student.grade}`;
    studentList.appendChild(li);
  });
}
