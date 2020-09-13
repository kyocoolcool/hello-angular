import {Component, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  template: `
    <input type="text" [(ngModel)]="userName"/>
    <input type="password" [(ngModel)]="userPassword">
    <button (click)="onClick()">login</button>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  userName = '';
  userPassword = '';

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
}
