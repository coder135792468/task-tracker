import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'http://127.0.0.1:8080/api/task';
    return this.http.get(url);
  }
  getDataById(taskId: string) {
    let url = `http://127.0.0.1:8080/api/task/${taskId}`;
    return this.http.get(url);
  }

  deleteTasks(task: Task) {
    return this.http.delete(`http://127.0.0.1:8080/api/task/${task}`);
  }

  addTask(task: any) {
    return this.http.post('http://127.0.0.1:8080/api/task', task, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
