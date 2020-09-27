import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {UUID} from 'angular2-uuid';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TodoService {
  private apiUrl: string = 'http://localhost:3000/todos';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) {
  }


  addTodo(desc: string): Promise<Todo> {
    const todo: Todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    return this.http
      .post(this.apiUrl, todo, {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  togguleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    const updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .patch(url, JSON.stringify(updatedTodo), {headers: this.headers})
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }

  deleteTodoById(id: string): Promise<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }

  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.apiUrl)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.meaning || error);
  }

  filterTodos(filter: string): Promise<Todo[]> {
    switch (filter) {
      case 'Active':
        return this.http
          .get(`${this.apiUrl}?completed=false`).toPromise()
          .then(res => res as Todo[])
          .catch(this.handleError);
      case 'Completed':
        return this.http
          .get(`${this.apiUrl}?completed=true`)
          .toPromise()
          .then(res => res as Todo[])
          .catch(this.handleError);
      default :
        return this.getTodos();
    }
  }
}
