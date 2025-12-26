import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(m => m.routes)
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.routes').then(m => m.routes)
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.routes').then(m => m.routes)
  },
  {
    path: 'student/:email',
    loadComponent: () =>
      import('./student/studentdetails/studentdetails').then(m => m.Studentdetails)

  },

  {
    path: 'teacher/:email',
    loadComponent: () =>
      import('./teacher/teacherdetails/teacherdetails').then(m => m.Teacherdetails)

  },

  { path: '', redirectTo: '/dashboard', pathMatch: "full" }
];
