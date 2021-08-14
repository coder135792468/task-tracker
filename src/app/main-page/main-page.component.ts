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
  filter: any = null;
  constructor(private task: TasksService, private location: Location) {
    this.task.getData().subscribe((data) => {
      // console.warn(data);
      this.data = data;
      this.loading = '';
    });
  }

  ngOnInit(): void {}
  goto(value: any) {
    let url = `/task/${value}`;
    window.location.href = url;
  }
  searchTask(text: string) {
    if (text.trim().length === 0) {
      this.filter = null;
      return;
    }
    this.filter = this.data.filter((task: any) =>
      task.name.match(new RegExp(`${text}`, 'gi'))
    );
    console.log(this.filter);
  }

  delete(value: any) {
    this.data = this.data.filter((task: any) => task._id !== value);

    this.task.deleteTasks(value).subscribe(() => {
      alert('Task deleted successfully!!!');
    });
  }
}
