import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://task-tracker-api-v1.herokuapp.com/api/task';
    return this.http.get(url);
  }
}
