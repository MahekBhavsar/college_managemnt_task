import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '../shared/form/form';
import { Table } from '../shared/table/table';
import { Studentservice } from './studentservice/studentservice';

@Component({
  selector: 'app-student',
  imports: [Form, Table],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  protected readonly router = inject(Router);

  students: any[] = [];
  editStudent: any = null;

  constructor(private studentsService: Studentservice) {}

  ngOnInit() {
    this.students = this.studentsService.getStudent();
  }

  onStudentAdded(student: any) {
    this.studentsService.onStudentAdded(student);
  }

  onEditRequest(index: number) {
    this.editStudent = this.studentsService.setEditStudent(index);
  }

  onStudentUpdated(student: any) {
    this.studentsService.updateStudent(student);
    this.editStudent = null;
  }

  onDelete(index: number) {
    this.studentsService.deleteStudent(index);
  }

  gotohome() {
    this.router.navigate(['/dashboard']);
  }
}
