import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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

  constructor(private task: TasksService, private location: Location) {
    let url = window.location.pathname.split('/task/')[1];
    this.task.getDataById(url).subscribe((data) => {
      this.data = data;
    });
  }
  gotoHome(): void {
    this.location.back();
  }
  ngOnInit(): void {}
}
