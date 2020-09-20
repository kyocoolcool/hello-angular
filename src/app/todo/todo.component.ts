import {Component, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  desc: string = '';

  constructor(private service: TodoService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  addTodo(): void {
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      });
  }

  toggleTodo(todo: Todo): void {
    const i = this.todos.indexOf(todo);
    this.service
      .togguleTodo(todo)
      .then(t => {
        this.todos = [...this.todos.slice(0, i), t, ...this.todos.slice(i + 1)];
      });
  }

  removeTodo(todo: Todo): void{
    const i = this.todos.indexOf(todo);
    this.service
      .deleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i + 1)];
      });
  }

  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }

  onTextChange(value): void {
    this.desc = value;
  }
}
