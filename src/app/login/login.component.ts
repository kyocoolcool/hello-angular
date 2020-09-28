import {Component, Inject, OnInit} from '@angular/core';
import {Auth, User} from '../todo/entities';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isDefault = true;
  isDefault2 = true;
  userName = '請輸入用戶名';
  userPassword = '請輸入密碼';
  auth: Auth;

  constructor(@Inject('auth') private services, private  router: Router) {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    const result = this.services.loginWithCredenitals(this.userName, this.userPassword);
    // tslint:disable-next-line:no-console
    console.info(`result ${result}`);
    // tslint:disable-next-line:no-console
    console.info(this.userName + '----' + this.userPassword + ' button was clicked');
  }

  onSubmit(formValue: any): void {
    this.services.loginWithCredenitals(formValue.login.userName, formValue.login.userPassword)
      .then(auth => {
        const redirectUrl: string = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }

  // tslint:disable-next-line:typedef
  onFocusUserName() {
    this.userName = '';
    this.isDefault = false;
  }

  // tslint:disable-next-line:typedef
  onFocusPassword() {
    this.userPassword = '';
    this.isDefault2 = false;
  }
}
