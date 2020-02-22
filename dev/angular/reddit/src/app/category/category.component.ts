import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  posts;
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.posts = this.categoryService.getlist();
  }

}
