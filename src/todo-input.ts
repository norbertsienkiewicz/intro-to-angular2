import { Component } from 'angular2/core';

import { TodoService } from './todo-service';
import { TodoModel } from './todo-model';

@Component({
  selector: 'todo-input',
  template: `
    <form (submit)="onSubmit()">
      <input type="text" #myInput [(ngModel)]="todoModel.title" />
    </form>
    {{todoModel.title}}
  `,
})
export class TodoInput{
  todoModel:TodoModel = new TodoModel();

  constructor(public todoService: TodoService) {

  }

  onSubmit() {
    this.todoService.todos.push(this.todoModel);
    this.todoModel = new TodoModel();

    console.log(this.todoService.todos);
  }
};
