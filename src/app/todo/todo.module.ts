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
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MdlModule} from '@angular-mdl/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        routing,
        MdlModule
    ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})

export class TodoModule {
}
