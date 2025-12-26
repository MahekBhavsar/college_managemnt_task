import { Injectable } from '@angular/core';
import { Gender, Person } from '../../Interface/interface';

@Injectable({
  providedIn: 'root',
})
export class Teacherservice {

  private editIndex: number | null = null;


  private teachers: Person[] = [
    {
      name: 'MAHEK',
      phone: 9081947464,
      email: 'mahek.bhavsar29@gmail.com',
      address: 'valsad',
      gender: Gender.Female
    },
    {
      name: 'HARSHIL',
      phone: 7284050706,
      email: 'harshil@gmail.com',
      address: 'valsad',
      gender: Gender.Male
    }
  ];


  getTeachers() {
    return this.teachers;
  }

  addTeacher(teacher: Person) {
    this.teachers.push(teacher);
    console.log(teacher);
  }

  setEditTeacher(index: number) {
    this.editIndex = index;
    return this.teachers[index];
  }

  updateTeacher(updatedTeacher: Person) {
    if (this.editIndex !== null) {
      this.teachers[this.editIndex] = updatedTeacher;
      this.editIndex = null;
    }
    console.log(updatedTeacher);
  }

  deleteTeacher(index: number) {
    this.teachers.splice(index, 1);
  }
  getTeacherCount(): number {
    return this.teachers.length;
  }
  getTeacherByEmail(email: string) {
    return this.teachers.find(teachers =>teachers.email === email)
  }

}
