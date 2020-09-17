import {Injectable} from '@angular/core';
import {Todo} from "./todo.model";
import {UUID} from "angular2-uuid";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api_url = "api/todos";
  private headers = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) {
  }


  addTodo(desc: string): Promise<Todo> {
    let todo: Todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    let a = JSON.stringify(todo);
    return this.http
      .post(this.api_url, todo, {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  togguleTodo(todo: Todo): Promise<Todo> {
    const url = '${this.api_url}/${todo.id}';
    console.info(url);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed})
    return this.http
      .put(url, JSON.stringify(updatedTodo), {headers: this.headers})
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError)
  }

  deleteTodoById(id: string): Promise<Todo> {
    const url = '${this.api_url}/${id}';
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }

  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.api_url)
      .toPromise()
      .then(res =>{
       return res as Todo[]})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred')
    return Promise.reject(error.meaning || error)
  }
}
