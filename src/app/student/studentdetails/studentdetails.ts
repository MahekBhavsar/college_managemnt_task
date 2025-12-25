import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studentservice } from '../studentservice/studentservice';

@Component({
  selector: 'app-studentdetails',
  imports: [],
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css',
})
export class Studentdetails implements OnInit {

  email!:string;
  private route=inject(ActivatedRoute);
  private studentservice=inject(Studentservice)
  ngOnInit(): void {
    this.email=this.route.snapshot.paramMap.get('email') || '';
    console.log(this.email)
  }
  get studentDetails ()
  {
    return this.studentservice.getStudentByEmail(this.email);
  }
}
