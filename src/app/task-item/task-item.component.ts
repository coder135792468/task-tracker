import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  data: any = {
    description: 'Loading....',
  };
  edit: boolean = false;

  constructor(private task: TasksService) {
    let url = window.location.pathname.split('/task/')[1];
    this.task.getDataById(url).subscribe((data) => {
      this.data = data;
    });
  }
  ngOnInit(): void {}
  gotoHome(): void {
    window.location.href = '/';
  }
  toggle() {
    this.edit = !this.edit;
  }
  async updateTask(value: any) {
    console.log(value);
    let url = window.location.pathname.split('/task/')[1];
    await this.task.updateTask(value, url).subscribe(() => {
      this.data = value;
    });
  }
}