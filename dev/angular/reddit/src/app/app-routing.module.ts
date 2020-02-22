import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'detail/:subreddit/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
