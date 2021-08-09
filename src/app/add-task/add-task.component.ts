import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Location } from '@angular/common';
// regular style toast

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(private task: TasksService, private location: Location) {}

  ngOnInit(): void {}
  onClick(): void {}
  data(task: any) {
    this.task.addTask(task).subscribe((task: any) => {
      alert('Task added successfully');

      this.location.back();
    });
  }
}
