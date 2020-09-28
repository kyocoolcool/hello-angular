import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Auth} from '../todo/entities';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, @Inject('user') private userService) {
  }

  loginWithCredenitals(userName: string, password: string): boolean {
    return this.userService
      .findUser(userName)
      .then(user => {
        const auth = new Auth();
        localStorage.setItem('userId', user.id);
        const redirectUrl = (localStorage.getItem('redirectUrl') === null) ? '/' : localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        if (null === user) {
          auth.hasError = true;
          auth.errMsg = 'user not found';
        }
        return auth;
      }).catch(this.handError);
  }

  private handError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);

  }
}
