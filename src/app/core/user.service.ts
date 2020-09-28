import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../todo/entities';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  findUser(userName: string): Promise<User> {
    const url = `${this.apiUrl}/?userName=${userName}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        const users: User[] = res as User[];
        return (users.length > 0) ? users[0] : null;
      }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
