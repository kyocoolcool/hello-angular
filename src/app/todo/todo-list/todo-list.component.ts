import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from '../todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  _todos: Todo[] = [];

  @Input()
  set todos(todos: Todo[]) {
    this._todos = [...todos];
  }

  get todos(): Todo[] {
    return this._todos;
  }

  @Output() removeTodo = new EventEmitter<Todo>();
  @Output() toggleTodo = new EventEmitter<Todo>();
  @Output() toggleAll = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTriggered(todo: Todo): void {
    this.removeTodo.emit(todo);
  }

  toggleTriggered(todo: Todo): void {
    this.toggleTodo.emit(todo);
  }

  toggleAllTriggered(): void {
    this.toggleAll.emit(true);
  }
}
