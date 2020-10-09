import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {TodoComponent} from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo'
  },
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule)
  }
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
