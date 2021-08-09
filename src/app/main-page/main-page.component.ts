import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  data: any;
  loading: string = 'Loading...';
  constructor(private task: TasksService, private location: Location) {
    this.task.getData().subscribe((data) => {
      // console.warn(data);
      this.data = data;
      this.loading = '';
    });
  }

  ngOnInit(): void {}
  goto(value: any) {
    window.location.href = `/task/${value}`;
    // this.location.go(`/task/${value}`);
  }
  async delete(value: any) {
    await this.task.deleteTasks(value).subscribe(() => {
      alert('Task deleted successfully!!!');
    });
    window.location.reload();
  }
}
