import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  data:any;
  constructor(private task:TasksService) {
    this.task.getData().subscribe(data=>{
      console.warn(data)
      this.data=data
    })
   }

  ngOnInit(): void {
  }

}
