import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnChanges {

  @Input() editData: any = null;

  @Output() added = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();

  person = {
    name: '',
    phone: 0,
    email: '',
    address: '',
    gender: ''
  };

  ngOnChanges() {
    if (this.editData) {
      this.person = { ...this.editData }; 
    }
  }

  addData() {
    if (this.editData) {
      // UPDATE
      this.updated.emit({ ...this.person });
    } else {
      // ADD
      this.added.emit({ ...this.person });
    }

    // reset form
    this.person = { name: '', phone: 0, email: '', address: '', gender: '' };
    this.editData = null;
  }
}
