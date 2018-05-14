import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { TodoClass } from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title = 'Things to do';

  todos = [];

  newTodo: TodoClass = new TodoClass();

  constructor(private todoService: TodoService) { }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(del) {
    this.todos.forEach((item) => {
      if (item.id === del) {
        let remove = this.todos.indexOf(item);
        this.todos.splice(remove, 1);
      }
    })
  }

  toggleComplete(task) {
    this.todos.forEach((item) => {
      if(task === item.id) {
        item.status = !item.status;
      }
    })
  }

  addTodo() {
    let id = this.todos.length + 1;
    this.newTodo.id = id;
    this.todos.push(this.newTodo);
    this.newTodo = new TodoClass();
  }

  ngOnInit() {
    this.getTodos();
  }

}
