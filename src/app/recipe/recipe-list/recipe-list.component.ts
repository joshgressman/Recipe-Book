import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('dummy', 'dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
  constructor() { }

  ngOnInit() {
  }

 onSelected(recipe: Recipe){
   this.recipeSelected.emit(recipe);
 }

}
