import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacherservice } from '../teacherservice/teacherservice';

@Component({
  selector: 'app-teacherdetails',
  imports: [],
  templateUrl: './teacherdetails.html',
  styleUrl: './teacherdetails.css',
})
export class Teacherdetails {

   email!:string
   private route=inject(ActivatedRoute);
    private teacherservice=inject(Teacherservice)
  ngOnInit(): void {
    this.email=this.route.snapshot.paramMap.get('email') || '';
    console.log(this.email)
    
  }
  get teacherDetails ()
  {
    return this.teacherservice.getTeacherByEmail(this.email);
  }
}
