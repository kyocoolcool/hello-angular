import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, NgModel} from '@angular/forms';
import {routing} from './todo.routes';
import {TodoComponent} from './todo.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoService} from './todo.service';
import {InMemoryTodoDbService} from './todo.data';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing
  ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})

export class TodoModule {
}
