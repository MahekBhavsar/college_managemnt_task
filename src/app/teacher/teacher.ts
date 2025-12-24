import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Teacherservice } from './teacherservice/teacherservice';
import { Table } from '../shared/table/table';
import { Form } from '../shared/form/form';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
  imports: [Table, Form]  // Only if standalone components
})
export class Teacher implements OnInit {
  protected readonly router = inject(Router);
  constructor(private teacherService: Teacherservice) { }
  teachers: any[] = [];
  editTeacher: any = null;


  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }

  onTeacherAdded(teacher: any) {
    this.teacherService.addTeacher(teacher);
  }

  onEditRequest(index: number) {
    this.editTeacher = this.teacherService.setEditTeacher(index);
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
}