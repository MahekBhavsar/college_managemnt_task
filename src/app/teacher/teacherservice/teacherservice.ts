import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Teacherservice {

  private editIndex: number | null = null;


  private teachers: any[] = [
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


  getTeachers() {
    return this.teachers;
  }

  addTeacher(teacher: any) {
    this.teachers.push(teacher);
  }

  setEditTeacher(index: number) {
    this.editIndex = index;
    return this.teachers[index];
  }

  updateTeacher(updatedTeacher: any) {
    if (this.editIndex !== null) {
      this.teachers[this.editIndex] = updatedTeacher;
      this.editIndex = null;
    }
  }

  deleteTeacher(index: number) {
    this.teachers.splice(index, 1);
  }
}
