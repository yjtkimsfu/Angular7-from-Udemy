import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'http://www.pbs.org/food/wp-content/blogs.dir/2/files/2012/12/2012-in-Review-Header.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
