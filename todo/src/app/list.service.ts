import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { List } from './list';
import { ThrowStmt } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists: List[];

  private listsUrl = 'api/lists';

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listsUrl);
  }

  addTask(list: List): Observable<List> {
    return this.http.post(this.listsUrl, list);
  }

  deleteTask(list: List | number): Observable<List> {
    const id = typeof list === 'number' ? list : list.id;
    const url = `${this.listsUrl}/${id}`;

    return this.http.delete<List>(url, httpOptions);
  }

  updateList(list: List): Observable<any> {
    return this.http.put(this.listsUrl, list, httpOptions);
  }

  constructor(private http: HttpClient) { }

}
