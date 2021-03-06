import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskItemComponent } from './task-item/task-item.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'task/:id',
    component: TaskItemComponent,
  },
  {
    path: 'add',
    component: AddTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
