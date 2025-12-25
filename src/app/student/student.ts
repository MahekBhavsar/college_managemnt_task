import { Component, OnInit, inject } from '@angular/core'; // Added OnInit
import { Router } from '@angular/router';
import { Form } from '../shared/form/form';
import { Table } from '../shared/table/table';
import { Studentservice } from './studentservice/studentservice';

@Component({
  selector: 'app-student',
  standalone: true,           // ✅ Required for standalone imports
  imports: [Form, Table],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnInit {
  protected readonly router = inject(Router);
  private studentsService = inject(Studentservice); // Using inject consistently

  students: any[] = [];
  editStudent: any = null;

  ngOnInit() {
    this.students = this.studentsService.getStudent();
  }

  // Use this for the "ADD STUDENT" button
  openAddModal() {
    this.editStudent = null;
  }

  onStudentAdded(student: any) {
    this.studentsService.onStudentAdded(student);
    this.editStudent = null; // Reset state after adding
  }

  onEditRequest(index: number) {
    const studentToEdit = this.studentsService.setEditStudent(index);
    // ✅ CRITICAL: Use spread operator to trigger ngOnChanges in Form
    this.editStudent = { ...studentToEdit };
  }

  onStudentUpdated(student: any) {
    this.studentsService.updateStudent(student);
    this.editStudent = null; // ✅ Reset state after updating
  }

  onDelete(index: number) {
    this.studentsService.deleteStudent(index);
  }

  gotohome() {
    this.router.navigate(['/dashboard']);
  }

  clear() {
    this.editStudent = null;
  }
}