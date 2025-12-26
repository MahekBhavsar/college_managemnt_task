

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,           // <--- ADD THIS LINE
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})

  // ... rest of your code stays exactly the same

export class Form implements OnChanges {
  @Input() editData: any = null;

  @Output() added = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();
  @Output() clear = new EventEmitter<any>();

  // This property will help you change the button label in the HTML
  buttonText = 'Add';

  person = {
    name: '',
    phone: null,
    email: '',
    address: '',
    gender: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    // Check if editData actually changed
    if (changes['editData']) {
      if (changes['editData'].currentValue) {
        // We are EDITING
        this.person = { ...changes['editData'].currentValue };
        this.buttonText = 'Update';
      } else {
        // We are ADDING (editData is null)
        this.reset();
        this.buttonText = 'Add';
      }
    }
  }

  addData() {
    if (this.editData) {
      this.updated.emit({ ...this.person });
    } else {
      this.added.emit({ ...this.person });
    }
    // No need to reset here, the Parent will clear editData 
    // and ngOnChanges will trigger automatically
  }

  // Rename this to avoid confusion with the 'clear' EventEmitter
  reset() {
    this.person = { 
      name: '', 
      phone: null, 
      email: '', 
      address: '', 
      gender: '' 
    };
  }

  // This is called when the user clicks 'Close' or 'X' on the modal
  onCloseModal() {
    this.clear.emit(); // Tell parent to set editTeacher = null
  }
}