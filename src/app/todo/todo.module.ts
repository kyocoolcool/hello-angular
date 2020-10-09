
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {routing} from './todo.routes';
import {TodoComponent} from './todo.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoService} from './todo.service';
import {InMemoryTodoDbService} from './todo.data';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {SharedModule} from '../share/share.module';

@NgModule({
    imports: [
        HttpClientModule,
        routing,
        SharedModule
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
