import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo.component';
import {AuthGuardService} from '../core/auth-guard.service';

export const routes: Routes = [
  {
    path: 'todo/:filter',
    canActivate: [AuthGuardService],
    component: TodoComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo/All'
  }
];

export const routing = RouterModule.forChild(routes);
