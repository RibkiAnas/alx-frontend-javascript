export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Anas',
  lastName: 'Kasd',
  age: 24,
  location: 'Marrakech',
};

const student2: Student = {
  firstName: 'Khalid',
  lastName: 'Alsuwailem',
  age: 26,
  location: 'Casablanca',
};

const studentsList: Array<Student> = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');

const trHead = document.createElement('tr');
const thFirstName = document.createElement('th');
const thLocation = document.createElement('th');

thFirstName.innerHTML = 'firstName';
thLocation.innerHTML = 'location';

trHead.appendChild(thFirstName);
trHead.appendChild(thLocation);
thead.appendChild(trHead);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const trBody = document.createElement('tr');
  const tdFirstName = document.createElement('td');
  const tdLocation = document.createElement('td');

  tdFirstName.innerHTML = student.firstName;
  tdLocation.innerHTML = student.location;

  trBody.appendChild(tdFirstName);
  trBody.appendChild(tdLocation);
  tbody.appendChild(trBody);
});

table.appendChild(tbody);
body.appendChild(table);
