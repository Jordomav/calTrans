import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  newTask: List = new List();

  constructor(private listService: ListService) { }

  getLists(): void {
    this.listService.getLists().subscribe(lists => this.lists = lists);
  }

  addTodo() {
    let id = this.lists.length + 1;
    // this.newTask.id = id;
    this.newTask.status = false;
    let task = this.newTask.task;
    let status = this.newTask.status;
    if (this.newTask.task === '') { return; }
    // console.log(this.listService.addTask({ task, status } as List));
    this.listService.addTask({ task, status } as List).subscribe(list => {
      this.lists.push(list);
      this.newTask = new List();
    })
  }

  deleteTask(list: List): void {
      this.lists = this.lists.filter(l => l !== list);
      this.listService.deleteTask(list).subscribe();
  }

  toggleComplete(item): void {
    item.status = !item.status;
    this.listService.updateList(item).subscribe();
  }

  // search(input) {
  //   this.lists = this.lists.filter(l => l === input);
  // }

  ngOnInit() {
    this.getLists();
    // console.log(this.listService.getLists());
  }

}
