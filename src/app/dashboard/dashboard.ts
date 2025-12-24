import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Studentservice } from '../student/studentservice/studentservice';
import { Teacherservice } from '../teacher/teacherservice/teacherservice';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  totalStudents: number | undefined;
  totalTeachers: number | undefined;
   constructor(
    private studentService: Studentservice,
    private teacherService: Teacherservice
  ) {}
  
ngOnInit(): void {
    this.totalStudents = this.studentService.getStudentCount();
    this.totalTeachers = this.teacherService.getTeachers().length; 
    // OR you can create a getTeacherCount() method similar to Studentservice
  }
}
