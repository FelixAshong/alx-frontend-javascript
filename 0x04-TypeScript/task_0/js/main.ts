interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Blessing',
  lastName: 'Tetteh',
  age: 99,
  location: 'Tema',
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Jane',
  age: 24,
  location: "Accra",
};

let studentsList: Student[] = [Student1, Student2]

const student_table = document.createElement('table');
const tablebody = document.createElement('tbody');

studentsList.forEach((objectList)=>{
    const tablename = document.createElement('tablename');
    const tablerow = document.createElement('tablerow');
    const tablelocation = document.createElement('tablelocation');

    tablename.textContent = objectList.firstName;
    tablelocation.textContent = objectList.location;
    tablerow.appendChild(tablename);
    tablerow.appendChild(tablelocation);
    tablebody.appendChild(tablerow);
})
student_table.appendChild(tablebody);
document.body.appendChild(student_table);
