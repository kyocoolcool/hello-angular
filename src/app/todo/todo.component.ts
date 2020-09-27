import {Component, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {TodoService} from './todo.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  desc: string = '';

  constructor(private service: TodoService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // this.getTodos();
    this.route.params.forEach((params: Params) => {
      const filter = params.filter;
      this.filterTodos(filter);
    });
  }

  addTodo(): void {
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      });
  }

  toggleTodo(todo: Todo): Promise<void> {
    const i = this.todos.indexOf(todo);
    return this.service
      .togguleTodo(todo)
      .then(t => {
        this.todos = [...this.todos.slice(0, i), t, ...this.todos.slice(i + 1)];
        return null;
      });
  }

  removeTodo(todo: Todo): Promise<void> {
    const i = this.todos.indexOf(todo);
    return  this.service
      .deleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i + 1)];
        return null;
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

  filterTodos(filter: string): void {
    this.service.filterTodos(filter)
      .then(todos => this.todos = [...todos]);
  }

  toggleAll(): void {
    Promise.all(this.todos.map(todo => this.toggleTodo(todo)));

  }


  clearCompleted(): void {
    const completedTodos = this.todos.filter(todo => todo.completed === true);
    const activeTodos = this.todos.filter(todo => todo.completed === false);
    Promise.all(completedTodos.map(todo => {
        this.service.deleteTodoById(todo.id).then(() => this.todos = [...activeTodos]);
      })
    );
  }
}
