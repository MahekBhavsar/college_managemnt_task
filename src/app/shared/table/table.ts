import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table.html',
})
export class Table {
  @Input() items: any[] = [];

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  editItem(index: number) {
    this.edit.emit(index);
  }

  deleteItem(index: number) {
    this.delete.emit(index);
  }
}