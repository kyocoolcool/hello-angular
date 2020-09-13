import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  loginWithCredenitals(userName: string, password: string): boolean {
    if (userName === 'chris') {
      return true;
    }
    return false;
  }
}
