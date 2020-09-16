import {Component, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input name="userName" required #userNameRef="ngModel" type="text" [(ngModel)]="userName" minlength="3" [ngClass]="{'a': isDefault}"
                 (focus)="onFocusUserName()"/>
          <div *ngIf="userNameRef.errors?.required">this is required</div>
          <div *ngIf="userNameRef.errors?.minlength">should be at least 3 characters</div>
          <br>
          <br>
          <input name="userPassword" required #userPasswordRef="ngModel" type="password" [(ngModel)]="userPassword" minlength="3" [ngClass]="{'a': isDefault2}"
                 (focus)="onFocusPassword()">
          <div *ngIf="userPasswordRef.errors?.required">this is required</div>
          <div *ngIf="userPasswordRef.errors?.minlength">should be at least 3 characters</div>
          <br>
          <br>
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: ['input.ng-invalid { border: 3px solid red; }',
    'input.ng-valid { border: 3px solid green; }',
    '.a {color: grey}'
  ],
})
export class LoginComponent implements OnInit {
  isDefault = true;
  isDefault2 = true;
  userName = '請輸入用戶名';
  userPassword = '請輸入密碼';

  constructor(@Inject('auth') private services) {
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

  onSubmit(value: any): void {
    // tslint:disable-next-line:no-console
    console.info(value.login.userName);
    // tslint:disable-next-line:no-console
    console.info(value.login.userPassword);
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
