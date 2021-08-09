import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://task-tracker-api-v1.herokuapp.com/api/task';
    return this.http.get(url);
  }
  getDataById(taskId: string) {
    let url = `https://task-tracker-api-v1.herokuapp.com/api/task/${taskId}`;
    return this.http.get(url);
  }

  deleteTasks(task: Task) {
    return this.http.delete(
      `https://task-tracker-api-v1.herokuapp.com/api/task/${task}`
    );
  }

  addTask(task: any) {
    return this.http.post(
      'https://task-tracker-api-v1.herokuapp.com/api/task',
      task,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
