import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Teacherservice } from './teacherservice/teacherservice';
import { Table } from '../shared/table/table';
import { Form } from '../shared/form/form';

@Component({
  selector: 'app-teacher',
  standalone: true, // This is required for NG2007 fix
  imports: [Table, Form],
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css']
})
export class Teacher implements OnInit {
  protected readonly router = inject(Router);
  private teacherService = inject(Teacherservice);
  
  teachers: any[] = [];
  editTeacher: any = null;

  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }

  // Called when clicking the "ADD TEACHER" button
  openAddModal() {
    this.editTeacher = null; 
  }

  // Called when clicking "Edit" in the table
  onEditRequest(index: number) {
    const teacherToEdit = this.teacherService.setEditTeacher(index);
    // The {...} creates a NEW object reference so the Form component detects the change
    this.editTeacher = { ...teacherToEdit };
  }

  onTeacherAdded(teacher: any) {
    this.teacherService.addTeacher(teacher);
    this.editTeacher = null;
  }

  onTeacherUpdated(teacher: any) {
    this.teacherService.updateTeacher(teacher);
    this.editTeacher = null;
  }

  onDelete(index: number) {
    this.teacherService.deleteTeacher(index);
  }

  gotohome() {
    this.router.navigate(['/dashboard']);
  }

  clear() {
    this.editTeacher = null;
  }
}