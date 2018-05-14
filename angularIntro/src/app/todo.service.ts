import { Injectable } from '@angular/core';

import { TODOS } from './mock-todos';
import { TodoClass } from './todo';
@Injectable()
export class TodoService {

  todos: TodoClass[];

  getTodos(): TodoClass[] {
    return TODOS;
  }

  constructor() { }

}
