import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
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
