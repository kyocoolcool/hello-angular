import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo.component';

export const routes: Routes = [
  {
    path: 'todo/:filter',
    component: TodoComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo/All'
  }
];

export const routing = RouterModule.forChild(routes);
