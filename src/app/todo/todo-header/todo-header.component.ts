import {Component, ElementRef, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs-compat/add/observable/fromEvent';


@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = '';
  @Input()
  placeholder = 'What needs to be done';
  @Input()
  delay = 300;
  @Output()
  textChanges = new EventEmitter<string>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onEnterUp = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  enterUp(): void{
    // @ts-ignore
    this.onEnterUp.emit(this.inputValue);
    this.inputValue = '';
  }

}
