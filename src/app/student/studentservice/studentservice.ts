import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {

  private students: any[] = [
    {
      name: 'MAHEK',
      phone: 9081947464,
      email: 'mahek.bhavsar29@gmail.com',
      address: 'valsad',
      gender: 'Female'
    },
    {
      name: 'HARSHIL',
      phone: 7284050706,
      email: 'harshil@gmail.com',
      address: 'valsad',
      gender: 'Male'
    }
  ];

 private editIndex: number = 0; // must assign a number


  getStudent() {
    return this.students;
  }

  onStudentAdded(student: any) {
    this.students.push(student);
  }

  setEditStudent(index: number) {
    this.editIndex = index;
    return this.students[index];
  }

  updateStudent(updatedStudent: any) {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = updatedStudent;
      
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
  getStudentCount(): number {
  return this.students.length;
}
getStudentByEmail(email:string)
{
  return this.students.find(students =>students.email === email)
}
}
