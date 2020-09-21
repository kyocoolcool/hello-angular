import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  isChecked: boolean = false;
  @Input()
  todoDesc: string = '';
  @Output()
  toggleTriggered = new EventEmitter<boolean>();
  @Output()
  removeTriggered = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void{
    this.toggleTriggered.emit(true);
  }

  remove(): void {
    this.removeTriggered.emit(true);
  }

}
